import { cn } from "@/lib/utils";

interface InteractiveMapProps {
  selectedRegion?: string;
  onRegionClick?: (regionId: string) => void;
}

const InteractiveMap = ({ selectedRegion, onRegionClick }: InteractiveMapProps) => {
  const handleRegionClick = (regionId: string) => {
    onRegionClick?.(regionId);
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-auto max-w-4xl"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))' }}
      >
        {/* Background */}
        <rect width="800" height="600" fill="#E8F4F8" />
        
        {/* Definitions for gradients and shadows */}
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="2" dy="6" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <linearGradient id="yellow-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#F9D71C', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#E5C000', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="pink-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FF1493', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#D01178', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="green-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#7FD957', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#5FB82E', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#66D4E7', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#3BADC7', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="coral-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FF7B7B', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#E05555', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="lightpink-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FFB3D9', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FF8AC6', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#D946EF', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#B026D0', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="lime-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#D4E157', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#B8C43E', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="rose-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FF6B9D', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#E04A7D', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* Qoraqalpog'iston - Northwest */}
        <g className={cn("transition-all duration-300 cursor-pointer", selectedRegion === "qoraqalpogiston" && "brightness-110")}>
          <path
            id="qoraqalpogiston"
            d="M 50 150 L 180 120 L 220 180 L 200 250 L 150 280 L 80 260 Z"
            fill="url(#yellow-gradient)"
            stroke="#000"
            strokeWidth="2"
            filter="url(#shadow)"
            className="hover:brightness-110"
            onClick={() => handleRegionClick("qoraqalpogiston")}
          />
          <text x="115" y="200" className="text-[11px] fill-black pointer-events-none font-bold">
            Karakalpakstan
          </text>
        </g>

        {/* Xorazm - West */}
        <g className={cn("transition-all duration-300 cursor-pointer", selectedRegion === "xorazm" && "brightness-110")}>
          <path
            id="xorazm"
            d="M 200 250 L 220 180 L 280 200 L 290 250 L 260 280 Z"
            fill="url(#green-gradient)"
            stroke="#000"
            strokeWidth="2"
            filter="url(#shadow)"
            className="hover:brightness-110"
            onClick={() => handleRegionClick("xorazm")}
          />
          <text x="218" y="235" className="text-[11px] fill-black pointer-events-none font-bold">
            Khorezm
          </text>
        </g>

        {/* Navoiy - Central */}
        <g className={cn("transition-all duration-300 cursor-pointer", selectedRegion === "navoiy" && "brightness-110")}>
          <path
            id="navoiy"
            d="M 260 280 L 290 250 L 380 260 L 420 300 L 380 350 L 300 340 Z"
            fill="url(#pink-gradient)"
            stroke="#000"
            strokeWidth="2"
            filter="url(#shadow)"
            className="hover:brightness-110"
            onClick={() => handleRegionClick("navoiy")}
          />
          <text x="325" y="305" className="text-[11px] fill-white pointer-events-none font-bold">
            Navoi
          </text>
        </g>

        {/* Buxoro - Southwest */}
        <g className={cn("transition-all duration-300 cursor-pointer", selectedRegion === "buxoro" && "brightness-110")}>
          <path
            id="buxoro"
            d="M 150 280 L 260 280 L 300 340 L 280 400 L 200 420 L 140 360 Z"
            fill="url(#cyan-gradient)"
            stroke="#000"
            strokeWidth="2"
            filter="url(#shadow)"
            className="hover:brightness-110"
            onClick={() => handleRegionClick("buxoro")}
          />
          <text x="205" y="350" className="text-[11px] fill-black pointer-events-none font-bold">
            Bukhoro
          </text>
        </g>

        {/* Qashqadaryo - South */}
        <g className={cn("transition-all duration-300 cursor-pointer", selectedRegion === "qashqadaryo" && "brightness-110")}>
          <path
            id="qashqadaryo"
            d="M 300 340 L 380 350 L 420 400 L 380 460 L 280 450 L 280 400 Z"
            fill="url(#pink-gradient)"
            stroke="#000"
            strokeWidth="2"
            filter="url(#shadow)"
            className="hover:brightness-110"
            onClick={() => handleRegionClick("qashqadaryo")}
          />
          <text x="310" y="408" className="text-[10px] fill-white pointer-events-none font-bold">
            Kashkadarya
          </text>
        </g>

        {/* Surxondaryo - Far South */}
        <g className={cn("transition-all duration-300 cursor-pointer", selectedRegion === "surxondaryo" && "brightness-110")}>
          <path
            id="surxondaryo"
            d="M 280 450 L 380 460 L 420 520 L 350 550 L 260 530 Z"
            fill="url(#rose-gradient)"
            stroke="#000"
            strokeWidth="2"
            filter="url(#shadow)"
            className="hover:brightness-110"
            onClick={() => handleRegionClick("surxondaryo")}
          />
          <text x="305" y="508" className="text-[10px] fill-white pointer-events-none font-bold">
            Surkhandarya
          </text>
        </g>

        {/* Samarqand - Central South */}
        <g className={cn("transition-all duration-300 cursor-pointer", selectedRegion === "samarqand" && "brightness-110")}>
          <path
            id="samarqand"
            d="M 380 350 L 480 340 L 520 380 L 500 420 L 420 400 Z"
            fill="url(#lightpink-gradient)"
            stroke="#000"
            strokeWidth="2"
            filter="url(#shadow)"
            className="hover:brightness-110"
            onClick={() => handleRegionClick("samarqand")}
          />
          <text x="430" y="380" className="text-[10px] fill-black pointer-events-none font-bold">
            Samarkand
          </text>
        </g>

        {/* Jizzax - Central */}
        <g className={cn("transition-all duration-300 cursor-pointer", selectedRegion === "jizzax" && "brightness-110")}>
          <path
            id="jizzax"
            d="M 380 260 L 480 250 L 520 290 L 480 340 Z"
            fill="url(#coral-gradient)"
            stroke="#000"
            strokeWidth="2"
            filter="url(#shadow)"
            className="hover:brightness-110"
            onClick={() => handleRegionClick("jizzax")}
          />
          <text x="435" y="295" className="text-[11px] fill-white pointer-events-none font-bold">
            Jizzakh
          </text>
        </g>

        {/* Sirdaryo - North Central */}
        <g className={cn("transition-all duration-300 cursor-pointer", selectedRegion === "sirdaryo" && "brightness-110")}>
          <path
            id="sirdaryo"
            d="M 480 250 L 560 240 L 580 280 L 540 310 L 520 290 Z"
            fill="url(#coral-gradient)"
            stroke="#000"
            strokeWidth="2"
            filter="url(#shadow)"
            className="hover:brightness-110"
            onClick={() => handleRegionClick("sirdaryo")}
          />
          <text x="515" y="275" className="text-[10px] fill-white pointer-events-none font-bold">
            Sirdaryo
          </text>
        </g>

        {/* Toshkent viloyati - North Central */}
        <g className={cn("transition-all duration-300 cursor-pointer", selectedRegion === "toshkent" && "brightness-110")}>
          <path
            id="toshkent"
            d="M 540 310 L 580 280 L 650 300 L 660 350 L 620 380 L 560 360 Z"
            fill="url(#lime-gradient)"
            stroke="#000"
            strokeWidth="2"
            filter="url(#shadow)"
            className="hover:brightness-110"
            onClick={() => handleRegionClick("toshkent")}
          />
          <text x="577" y="330" className="text-[10px] fill-black pointer-events-none font-bold">
            Tashkent
          </text>
        </g>

        {/* Toshkent shahar - Capital (small circle) */}
        <g className={cn("transition-all duration-300 cursor-pointer", selectedRegion === "toshkent-shahar" && "brightness-110")}>
          <circle
            id="toshkent-shahar"
            cx="600"
            cy="340"
            r="20"
            fill="url(#lime-gradient)"
            stroke="#000"
            strokeWidth="2"
            filter="url(#shadow)"
            className="hover:brightness-110"
            onClick={() => handleRegionClick("toshkent-shahar")}
          />
          <text x="587" y="345" className="text-[9px] fill-black pointer-events-none font-bold">
            T.city
          </text>
        </g>

        {/* Namangan - East */}
        <g className={cn("transition-all duration-300 cursor-pointer", selectedRegion === "namangan" && "brightness-110")}>
          <path
            id="namangan"
            d="M 660 350 L 720 340 L 750 380 L 730 420 L 680 410 L 660 380 Z"
            fill="url(#purple-gradient)"
            stroke="#000"
            strokeWidth="2"
            filter="url(#shadow)"
            className="hover:brightness-110"
            onClick={() => handleRegionClick("namangan")}
          />
          <text x="680" y="380" className="text-[10px] fill-white pointer-events-none font-bold">
            Namangan
          </text>
        </g>

        {/* Andijon - Far East */}
        <g className={cn("transition-all duration-300 cursor-pointer", selectedRegion === "andijon" && "brightness-110")}>
          <path
            id="andijon"
            d="M 730 420 L 750 380 L 780 400 L 770 450 L 730 460 Z"
            fill="url(#purple-gradient)"
            stroke="#000"
            strokeWidth="2"
            filter="url(#shadow)"
            className="hover:brightness-110"
            onClick={() => handleRegionClick("andijon")}
          />
          <text x="735" y="425" className="text-[10px] fill-white pointer-events-none font-bold">
            Andijan
          </text>
        </g>

        {/* Farg'ona - Southeast */}
        <g className={cn("transition-all duration-300 cursor-pointer", selectedRegion === "fargona" && "brightness-110")}>
          <path
            id="fargona"
            d="M 680 410 L 730 420 L 730 460 L 700 480 L 650 460 L 660 430 Z"
            fill="url(#lime-gradient)"
            stroke="#000"
            strokeWidth="2"
            filter="url(#shadow)"
            className="hover:brightness-110"
            onClick={() => handleRegionClick("fargona")}
          />
          <text x="675" y="448" className="text-[10px] fill-black pointer-events-none font-bold">
            Fergana
          </text>
        </g>
      </svg>
    </div>
  );
};

export default InteractiveMap;
