import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { regions, validateRegionCenter } from "@/data/regions";
import { Check, X } from "lucide-react";
import RegionDetails from "./RegionDetails";

interface RegionSelectorProps {
  selectedRegion?: string;
  onRegionChange?: (regionId: string) => void;
}

const RegionSelector = ({ selectedRegion: externalSelectedRegion, onRegionChange }: RegionSelectorProps) => {
  const [centerInput, setCenterInput] = useState<string>("");
  const [validationResult, setValidationResult] = useState<"valid" | "invalid" | null>(null);

  const selectedRegion = externalSelectedRegion || "";

  const handleRegionChange = (value: string) => {
    onRegionChange?.(value);
    setCenterInput("");
    setValidationResult(null);
  };

  const handleCenterInput = (value: string) => {
    setCenterInput(value);
    
    if (selectedRegion && value.trim()) {
      const isValid = validateRegionCenter(selectedRegion, value);
      setValidationResult(isValid ? "valid" : "invalid");
    } else {
      setValidationResult(null);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6 md:p-8 space-y-6 shadow-lg border-2 border-border">
        <div className="space-y-2">
          <Label htmlFor="region-select" className="text-base md:text-lg font-semibold">
            Viloyatni tanlang
          </Label>
          <Select value={selectedRegion} onValueChange={handleRegionChange}>
            <SelectTrigger id="region-select" className="w-full h-12 text-base">
              <SelectValue placeholder="Viloyatni tanlang..." />
            </SelectTrigger>
            <SelectContent className="bg-popover">
              {regions.map((region) => (
                <SelectItem key={region.id} value={region.id} className="text-base">
                  {region.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="center-input" className="text-base md:text-lg font-semibold">
            Viloyat markazini kiriting
          </Label>
          <div className="relative">
            <Input
              id="center-input"
              type="text"
              placeholder="Masalan: Andijon shahar"
              value={centerInput}
              onChange={(e) => handleCenterInput(e.target.value)}
              disabled={!selectedRegion}
              className="w-full h-12 text-base pr-12"
            />
            {validationResult && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                {validationResult === "valid" ? (
                  <Check className="h-6 w-6 text-success animate-in zoom-in-50 duration-300" />
                ) : (
                  <X className="h-6 w-6 text-destructive animate-in zoom-in-50 duration-300" />
                )}
              </div>
            )}
          </div>
          {validationResult && (
            <div className="flex items-center gap-2 pt-2 animate-in slide-in-from-top-2 duration-300">
              {validationResult === "valid" ? (
                <p className="text-success font-medium text-sm md:text-base">
                  ✓ To'g'ri!
                </p>
              ) : (
                <p className="text-destructive font-medium text-sm md:text-base">
                  ✗ Xato! Iltimos, to'g'ri viloyat markazini kiriting
                </p>
              )}
            </div>
          )}
        </div>
      </Card>

      {validationResult === "valid" && selectedRegion && (
        <RegionDetails regionId={selectedRegion} />
      )}
    </div>
  );
};

export default RegionSelector;
