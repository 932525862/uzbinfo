import { useState } from "react";
import RegionSelector from "@/components/RegionSelector";
import Uzbmap from "@/assets/harita .png";

const Index = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  return (  
    <div className="min-h-screen bg-background py-6 md:py-12 px-4">
      <div className="container max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">
            O'zbekiston viloyatlari
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Viloyatni tanlang va uning markazini kiriting
          </p>
        </div>

      
        <div className="bg-card rounded-xl shadow-xl p-4 md:p-6 border-2 border-primary/20 min-h-[400px] flex justify-center items-center">
          <img 
            src={Uzbmap} 
            alt="O'zbekiston xaritasi" 
            className="max-w-full h-auto rounded-lg object-contain"
          />
        </div>

        <RegionSelector 
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
        />
      </div>
    </div>
  );
};

export default Index;
