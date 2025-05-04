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
};

const UiLabelContext = createContext<UiLabelContextType | null>(null);

export const UiLabelProvider = ({ children }: { children: ReactNode }) => {
  const { toast } = useToast();
  const [localLabels, setLocalLabels] = useState<Record<string, Record<string, string>>>({});
  
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
        return response.json();
      } catch (error) {
        console.warn('Error fetching UI labels:', error);
        return [];
      }
    },
    refetchOnWindowFocus: false,
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
      const response = await apiRequest('POST', '/api/admin/ui-labels', label);
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
      const response = await apiRequest('PATCH', `/api/admin/ui-labels/${id}`, { value });
      if (!response.ok) {
        throw new Error('Failed to update UI label');
      }
      return await response.json();
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