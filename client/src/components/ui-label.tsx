import React from 'react';
import { useUiLabel } from '@/hooks/use-ui-label';

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
  const { getLabel } = useUiLabel();
  
  const label = getLabel(keyName, defaultValue, context);
  
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