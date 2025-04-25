import React, { useCallback, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

interface ColorPaletteProps {
  colors: string[];
  value: string;
  onChange: (color: string) => void;
}

const defaultColors = [
  "#1F2937", // Gray-800
  "#374151", // Gray-700
  "#4B5563", // Gray-600
  "#6B7280", // Gray-500
  "#9CA3AF", // Gray-400
  "#D1D5DB", // Gray-300
  "#E5E7EB", // Gray-200
  "#F3F4F6", // Gray-100
  "#F9FAFB", // Gray-50
  "#FFFFFF", // White
  "#EF4444", // Red-500
  "#F59E0B", // Amber-500
  "#10B981", // Emerald-500
  "#3B82F6", // Blue-500
  "#6366F1", // Indigo-500
  "#8B5CF6", // Violet-500
  "#EC4899", // Pink-500
];

const ColorPalette = ({ colors, value, onChange }: ColorPaletteProps) => {
  return (
    <div className="grid grid-cols-8 gap-2 mt-2">
      {colors.map((color) => (
        <button
          key={color}
          className={cn(
            "w-5 h-5 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
            value === color && "ring-2 ring-offset-2 ring-gray-500"
          )}
          style={{ backgroundColor: color }}
          onClick={() => onChange(color)}
          type="button"
          aria-label={`Select color ${color}`}
        />
      ))}
    </div>
  );
};

export function ColorPicker({
  value,
  onChange,
  className,
}: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className={cn("w-10 h-10 p-0", className)}
          style={{ backgroundColor: value }}
          aria-label="Pick a color"
        />
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Color picker</h4>
            <div
              className="w-6 h-6 rounded-md border border-gray-200"
              style={{ backgroundColor: value }}
            />
          </div>
          
          <div className="grid gap-2">
            <ColorPalette
              colors={defaultColors}
              value={value}
              onChange={onChange}
            />

            <div>
              <label
                htmlFor="custom-color"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Custom color
              </label>
              <div className="relative mt-1 rounded-md">
                <input
                  ref={inputRef}
                  id="custom-color"
                  type="text"
                  value={value}
                  onChange={handleInputChange}
                  pattern="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="#000000"
                />
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}