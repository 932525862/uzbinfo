import { Card } from "@/components/ui/card";
import { regions } from "@/data/regions";
import { Building2, Users, User, MapPin, Home, Building, TrendingUp } from "lucide-react";

interface RegionDetailsProps {
  regionId: string;
}

const RegionDetails = ({ regionId }: RegionDetailsProps) => {
  const region = regions.find((r) => r.id === regionId);
  
  if (!region) return null;

  const stats = [
    {
      icon: Building2,
      label: "Ma'muriy birlik",
      value: region.details.administrativeDivision,
    },
    {
      icon: Users,
      label: "Aholi soni",
      value: region.details.population,
    },
    {
      icon: User,
      label: "Amaldagi hokim",
      value: region.details.governor,
    },
    {
      icon: MapPin,
      label: "Tumanlar soni",
      value: region.details.districts.toString(),
    },
    {
      icon: Home,
      label: "Qishloqlar soni",
      value: region.details.villages.toLocaleString(),
    },
    {
      icon: Building,
      label: "Mahallalar soni",
      value: region.details.neighborhoods.toString(),
    },
    {
      icon: TrendingUp,
      label: "Yalpi ichki mahsulot",
      value: region.details.gdp,
    },
  ];

  return (
    <Card className="p-6 md:p-8 space-y-6 shadow-lg border-2 border-primary/30 animate-in slide-in-from-top-4 duration-500">
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">
          {region.name}
        </h2>
        <p className="text-muted-foreground">
          Viloyat ma'lumotlari
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
className="flex items-start gap-3 p-4 rounded-lg border-2 border-[#06b2b6] hover:bg-[#b4feff] transition-colors duration-200"
          >
            <div className="p-2 rounded-full bg-primary/10">
              <stat.icon className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1  space-y-1">
              <p className="text-sm  text-[#000000] font-medium">
                {stat.label}
              </p>
              <p className="text-base md:text-lg font-semibold text-foreground">
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RegionDetails;
