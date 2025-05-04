import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from './use-toast';

export type UiLabel = {
  id: number;
  key: string;
  value: string;
  context: string;
  defaultValue: string;
  createdAt: string;
  updatedAt: string | null;
};

type UiLabelContextType = {
  labels: UiLabel[];
  isLoading: boolean;
  getLabel: (key: string, defaultValue: string, context?: string) => string;
  createLabel: (label: Omit<UiLabel, 'id' | 'createdAt' | 'updatedAt'>) => Promise<UiLabel>;
  updateLabel: (id: number, value: string) => Promise<UiLabel>;
  deleteLabel: (id: number) => Promise<void>;
  refreshLabels: () => Promise<void>;
  getLabelObject: (key: string, context: string) => UiLabel | undefined;
};

const UiLabelContext = createContext<UiLabelContextType | null>(null);

export const UiLabelProvider = ({ children }: { children: ReactNode }) => {
  const { toast } = useToast();
  // Initialize labels map to avoid infinite loop from state changes
  const [localLabels, setLocalLabels] = useState<Record<string, Record<string, string>>>({
    Global: {},
    Navigation: {},
    Dashboard: {},
    Property: {},
    Marketplace: {},
    Social: {},
    Admin: {},
  });
  
  // Fetch all UI labels
  const { 
    data: labels = [], 
    isLoading,
    refetch 
  } = useQuery<UiLabel[]>({
    queryKey: ['/api/admin/ui-labels'],
    queryFn: async () => {
      try {
        const response = await fetch('/api/admin/ui-labels');
        if (!response.ok) {
          console.warn('Failed to fetch UI labels, using defaults');
          return [];
        }
        
        // Get the server response with database field names
        const serverLabels = await response.json();
        
        // Map from server field names to client field names
        return serverLabels.map((label: any) => ({
          id: label.id,
          key: label.internalKey,
          value: label.customLabel,
          defaultValue: label.defaultValue || "",
          context: label.context,
          createdAt: label.createdAt,
          updatedAt: label.updatedAt
        }));
      } catch (error) {
        console.warn('Error fetching UI labels:', error);
        return [];
      }
    },
    staleTime: 60000, // Cache valid for 1 minute
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    retry: 1,
  });

  // Organize labels by context and key for faster lookup
  useEffect(() => {
    const labelMap: Record<string, Record<string, string>> = {};
    
    labels.forEach(label => {
      if (!labelMap[label.context]) {
        labelMap[label.context] = {};
      }
      labelMap[label.context][label.key] = label.value;
    });
    
    setLocalLabels(labelMap);
  }, [labels]);

  // Get a label by key and context
  const getLabel = (key: string, defaultValue: string, context = 'Global'): string => {
    // Check if we have this label in our cache
    if (localLabels[context]?.[key]) {
      return localLabels[context][key];
    }
    
    // Return default value if we don't have the label
    return defaultValue;
  };

  // Create a new UI label
  const createLabelMutation = useMutation({
    mutationFn: async (label: Omit<UiLabel, 'id' | 'createdAt' | 'updatedAt'>) => {
      // Map the frontend field names to the backend field names
      const mappedLabel = {
        internalKey: label.key,
        customLabel: label.value,
        defaultValue: label.defaultValue,
        context: label.context
      };
      
      const response = await apiRequest('POST', '/api/admin/ui-labels', mappedLabel);
      if (!response.ok) {
        throw new Error('Failed to create UI label');
      }
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/ui-labels'] });
      toast({
        title: 'Label created',
        description: 'The UI label has been created successfully.',
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Failed to create label',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  // Update an existing UI label
  const updateLabelMutation = useMutation({
    mutationFn: async ({ id, value }: { id: number; value: string }) => {
      // Map the frontend field name to the backend field name
      const response = await apiRequest('PATCH', `/api/admin/ui-labels/${id}`, { 
        customLabel: value 
      });
      if (!response.ok) {
        throw new Error('Failed to update UI label');
      }
      
      // Map from server response to client format
      const serverLabel = await response.json();
      return {
        id: serverLabel.id,
        key: serverLabel.internalKey,
        value: serverLabel.customLabel,
        defaultValue: serverLabel.defaultValue || "",
        context: serverLabel.context,
        createdAt: serverLabel.createdAt,
        updatedAt: serverLabel.updatedAt
      };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/ui-labels'] });
      toast({
        title: 'Label updated',
        description: 'The UI label has been updated successfully.',
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Failed to update label',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  // Delete a UI label
  const deleteLabelMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await apiRequest('DELETE', `/api/admin/ui-labels/${id}`);
      if (!response.ok) {
        throw new Error('Failed to delete UI label');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/ui-labels'] });
      toast({
        title: 'Label deleted',
        description: 'The UI label has been deleted successfully.',
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Failed to delete label',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  const createLabel = async (label: Omit<UiLabel, 'id' | 'createdAt' | 'updatedAt'>) => {
    return await createLabelMutation.mutateAsync(label);
  };

  const updateLabel = async (id: number, value: string) => {
    return await updateLabelMutation.mutateAsync({ id, value });
  };

  const deleteLabel = async (id: number) => {
    await deleteLabelMutation.mutateAsync(id);
  };

  const refreshLabels = async () => {
    await refetch();
  };
  
  // Get the full label object by key and context
  const getLabelObject = (key: string, context: string): UiLabel | undefined => {
    return labels.find(label => label.key === key && label.context === context);
  };

  return (
    <UiLabelContext.Provider
      value={{
        labels,
        isLoading,
        getLabel,
        createLabel,
        updateLabel,
        deleteLabel,
        refreshLabels,
        getLabelObject,
      }}
    >
      {children}
    </UiLabelContext.Provider>
  );
};

export const useUiLabel = () => {
  const context = useContext(UiLabelContext);
  if (!context) {
    throw new Error('useUiLabel must be used within a UiLabelProvider');
  }
  return context;
};