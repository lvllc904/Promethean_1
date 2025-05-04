import React, { useState } from 'react';
import { useUiLabel } from '@/hooks/use-ui-label';
import { useUiLabelExplorer } from '@/hooks/use-ui-label-explorer';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface UiLabelProps {
  keyName: string;
  defaultValue: string;
  context?: string;
  as?: React.ElementType;
  className?: string;
}

/**
 * A component for displaying customizable text labels.
 * 
 * @param keyName - The unique key identifier for this label
 * @param defaultValue - The default text to display if no custom label is defined
 * @param context - The context category for this label (default: "Global")
 * @param as - The HTML element to render (default: span)
 * @param className - Optional CSS classes to apply
 */
export const UiLabel: React.FC<UiLabelProps> = ({
  keyName,
  defaultValue,
  context = 'Global',
  as: Component = 'span',
  className = '',
}) => {
  const { getLabel, labels } = useUiLabel();
  const { isExplorerMode, setSelectedLabel } = useUiLabelExplorer();
  const [isHovered, setIsHovered] = useState(false);
  
  const label = getLabel(keyName, defaultValue, context);
  
  // Try to find the exact label object for this key
  const labelObject = labels.find(
    (l) => l.key === keyName && l.context === context
  );

  // Handle click when in explorer mode
  const handleClick = () => {
    if (isExplorerMode && labelObject) {
      // Pass the label object to the explorer context
      setSelectedLabel({
        ...labelObject
      });
    }
  };
  
  // If explorer mode is active, wrap with interactive elements
  if (isExplorerMode) {
    const explorerStyles = `
      ${className}
      ${isHovered ? 'bg-primary/10 rounded outline-dashed outline-1 outline-primary' : ''}
      ${isExplorerMode ? 'cursor-pointer transition-colors' : ''}
    `;
    
    return (
      <TooltipProvider>
        <Tooltip open={isHovered}>
          <TooltipTrigger asChild>
            <Component 
              className={explorerStyles}
              onClick={handleClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {label}
            </Component>
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-[300px]">
            <div className="space-y-1 text-xs">
              <div><span className="font-semibold">Key:</span> {keyName}</div>
              <div><span className="font-semibold">Context:</span> {context}</div>
              <div><span className="font-semibold">Current:</span> {label}</div>
              <div className="text-primary font-semibold">Click to edit</div>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
  
  // Normal rendering when not in explorer mode
  return <Component className={className}>{label}</Component>;
};

/**
 * Higher-order component that adds UI label capability to an existing component.
 * 
 * @param WrappedComponent - The component to wrap
 * @param keyPrefix - Optional prefix to add to label keys
 * @param context - The context category for labels (default: "Global")
 */
export function withUiLabels<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  keyPrefix?: string,
  context = 'Global'
) {
  return function WithUiLabels(props: P) {
    const { getLabel } = useUiLabel();
    
    const labelProps = {
      getLabel: (key: string, defaultValue: string) => 
        getLabel(keyPrefix ? `${keyPrefix}.${key}` : key, defaultValue, context),
    };
    
    return <WrappedComponent {...props} {...labelProps} />;
  };
}

export default UiLabel;