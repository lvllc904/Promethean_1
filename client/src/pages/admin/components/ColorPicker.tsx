import React, { useState, useRef, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState(value || '#000000');
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    setCurrentColor(value);
  }, [value]);
  
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setCurrentColor(newColor);
    onChange(newColor);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    
    // Validate hex color format
    if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(newColor)) {
      setCurrentColor(newColor);
      onChange(newColor);
    } else {
      setCurrentColor(newColor);
    }
  };
  
  const predefinedColors = [
    '#000000', '#ffffff', '#f44336', '#e91e63', '#9c27b0', '#673ab7', 
    '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', 
    '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722',
    '#795548', '#607d8b'
  ];
  
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          className="flex items-center gap-2 p-1 h-10 w-full justify-between"
        >
          <div 
            className="h-8 w-8 rounded-sm border"
            style={{ backgroundColor: currentColor }}
          />
          <span className="grow text-left">{currentColor}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="space-y-4">
          <div>
            <Input
              ref={inputRef}
              type="color"
              value={currentColor}
              onChange={handleColorChange}
              className="h-32 w-full p-1"
            />
          </div>
          
          <div>
            <Input
              type="text"
              value={currentColor}
              onChange={handleInputChange}
              className="font-mono"
              placeholder="#000000"
            />
          </div>
          
          <div className="grid grid-cols-5 gap-2">
            {predefinedColors.map((color) => (
              <button
                key={color}
                type="button"
                className="h-6 w-6 rounded-sm border"
                style={{ backgroundColor: color }}
                onClick={() => {
                  setCurrentColor(color);
                  onChange(color);
                }}
                title={color}
              />
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ColorPicker;