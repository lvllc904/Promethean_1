import React, { createContext, ReactNode, useContext, useState } from 'react';
import { UiLabel } from '@shared/schema';

type UiLabelExplorerContextType = {
  isExplorerMode: boolean;
  toggleExplorerMode: () => void;
  selectedLabel: UiLabel | null;
  setSelectedLabel: (label: UiLabel | null) => void;
};

const UiLabelExplorerContext = createContext<UiLabelExplorerContextType | null>(null);

export const UiLabelExplorerProvider = ({ children }: { children: ReactNode }) => {
  const [isExplorerMode, setIsExplorerMode] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<UiLabel | null>(null);
  
  const toggleExplorerMode = () => {
    setIsExplorerMode(prev => !prev);
    if (selectedLabel) {
      setSelectedLabel(null);
    }
  };
  
  return (
    <UiLabelExplorerContext.Provider
      value={{
        isExplorerMode,
        toggleExplorerMode,
        selectedLabel,
        setSelectedLabel,
      }}
    >
      {children}
    </UiLabelExplorerContext.Provider>
  );
};

export const useUiLabelExplorer = () => {
  const context = useContext(UiLabelExplorerContext);
  if (!context) {
    throw new Error('useUiLabelExplorer must be used within a UiLabelExplorerProvider');
  }
  return context;
};