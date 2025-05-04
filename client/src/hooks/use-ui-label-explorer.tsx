import React, { createContext, ReactNode, useContext, useState } from 'react';

// Use the frontend UiLabel type from hooks/use-ui-label.tsx
interface UiLabel {
  id: number;
  key: string;
  value: string;
  context: string;
  defaultValue: string;
  createdAt: string;
  updatedAt: string | null;
}

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