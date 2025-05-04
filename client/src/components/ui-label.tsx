import React from 'react';
import { useUiLabel } from '@/hooks/use-ui-label';

interface UiLabelProps {
  labelKey: string;
  defaultValue: string;
  context?: string;
  className?: string;
}

/**
 * UI Label component - renders text that can be customized through the admin UI
 * Allows for white-label rebranding of text throughout the application
 */
export const UiLabel: React.FC<UiLabelProps> = ({
  labelKey,
  defaultValue,
  context = "Global",
  className = "",
}) => {
  const { getLabel } = useUiLabel();
  const text = getLabel(labelKey, defaultValue, context);
  
  return <span className={className}>{text}</span>;
};

/**
 * Heading component that uses UI Labels
 */
interface UiLabelHeadingProps {
  labelKey: string;
  defaultValue: string;
  context?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export const UiLabelHeading: React.FC<UiLabelHeadingProps> = ({
  labelKey,
  defaultValue,
  context = "Global",
  level = 2,
  className = "",
}) => {
  const { getLabel } = useUiLabel();
  const text = getLabel(labelKey, defaultValue, context);
  
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return <HeadingTag className={className}>{text}</HeadingTag>;
};

/**
 * Button text component that uses UI Labels
 */
interface UiLabelButtonTextProps {
  labelKey: string;
  defaultValue: string;
  context?: string;
}

export const UiLabelButtonText: React.FC<UiLabelButtonTextProps> = ({
  labelKey,
  defaultValue,
  context = "Global",
}) => {
  const { getLabel } = useUiLabel();
  const text = getLabel(labelKey, defaultValue, context);
  
  return <>{text}</>;
};

export default UiLabel;