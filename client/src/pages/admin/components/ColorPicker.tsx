import React from 'react';
import { Input } from "@/components/ui/input";

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
}

const ColorPicker = ({ value, onChange }: ColorPickerProps) => {
  // Simple color picker component
  return (
    <Input
      type="color"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-10 w-10 p-0 rounded"
    />
  );
};

export default ColorPicker;