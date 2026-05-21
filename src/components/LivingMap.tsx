import { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface Brick {
  id: string;
  name: string;
  story: string;
  tier: 'seedling' | 'cornerstone' | 'guardian';
  x: number;
  y: number;
  isGlowing: boolean;
}

export function LivingMap() {
  const [bricks, setBricks] = useState<Brick[]>([
    {
      id: '1',
      name: 'The 250th Hub',
      story: 'Connecting Veterans to Freedom',
      tier: 'guardian',
      x: 20,
      y: 30,
      isGlowing: true,
    },
    {
      id: '2',
      name: 'The 100th Hub',
      story: 'Black History Evolution',
      tier: 'guardian',
      x: 50,
      y: 20,
      isGlowing: true,
    },
    {
      id: '3',
      name: 'The 80th Hub',
      story: 'Pioneering Families 1945',
      tier: 'guardian',
      x: 80,
      y: 35,
      isGlowing: true,
    },
  ]);

  const [hoveredBrick, setHoveredBrick] = useState<string | null>(null);
  const fundraisingMeter = 35;

  const getBrickColor = (tier: string) => {
    switch (tier) {
      case 'seedling':
        return '#B22222';
      case 'cornerstone':
        return '#D4AF37';
      case 'guardian':
        return '#2E8B57';
      default:
        return '#B22222';
    }
  };

  const getBrickSize = (tier: string) => {
    switch (tier) {
      case 'seedling':
        return 30;
      case 'cornerstone':
        return 50;
      case 'guardian':
        return 70;
      default:
        return 30;
    }
  };

  return (
    <div className="w-full">
      <div className="relative w-full h-96 bg-gradient-to-br from-[#F5F5DC] to-[#E8E8D0] rounded-2xl overflow-hidden border-4 border-[#B22222]">
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#B22222" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div className="relative w-full h-full">
          {bricks.map((brick) => (
            <div
              key={brick.id}
              className="absolute transition-all duration-300 cursor-pointer group"
              style={{
                left: `${brick.x}%`,
                top: `${brick.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseEnter={() => setHoveredBrick(brick.id)}
              onMouseLeave={() => setHoveredBrick(null)}
            >
              <div
                className={`rounded-lg transition-all duration-300 flex items-center justify-center text-white font-bold text-xs text-center p-2 ${
                  hoveredBrick === brick.id ? 'scale-125 shadow-2xl' : 'scale-100'
                } ${brick.isGlowing ? 'animate-pulse' : ''}`}
                style={{
                  width: getBrickSize(brick.tier),
                  height: getBrickSize(brick.tier),
                  backgroundColor: getBrickColor(brick.tier),
                  boxShadow:
                    hoveredBrick === brick.id || brick.isGlowing
                      ? `0 0 20px ${getBrickColor(brick.tier)}`
                      : 'none',
                }}
              >
                <Sparkles size={16} />
              </div>

              {hoveredBrick === brick.id && (
                <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-[#4A3728] text-white px-4 py-3 rounded-lg whitespace-nowrap shadow-xl">
                  <p className="font-bold text-sm">{brick.name}</p>
                  <p className="text-xs text-[#D4AF37]">{brick.story}</p>
                </div>
              )}
            </div>
          ))}

          <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg p-3">
            <p className="text-xs font-bold text-[#4A3728] mb-2 flex items-center">
              <Heart size={14} className="mr-1 text-[#B22222]" />
              Resilience Meter
            </p>
            <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#B22222] to-[#2E8B57] h-full transition-all duration-500"
                style={{ width: `${fundraisingMeter}%` }}
              />
            </div>
            <p className="text-xs text-[#4A3728] mt-1 font-semibold">
              {Math.round(fundraisingMeter)}% of Heritage Preservation Goal
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-[#B22222]/10 to-[#D4AF37]/10 p-6 rounded-xl border-2 border-[#B22222]">
          <div className="flex items-center mb-3">
            <div className="w-6 h-6 bg-[#B22222] rounded mr-2"></div>
            <h3 className="font-bold text-[#4A3728]">The Seedling - $25</h3>
          </div>
          <p className="text-sm text-[#4A3728]">
            A glowing brick in our Wall of Resilience + Message to the Future
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#2E8B57]/10 p-6 rounded-xl border-2 border-[#D4AF37]">
          <div className="flex items-center mb-3">
            <div className="w-6 h-6 bg-[#D4AF37] rounded mr-2"></div>
            <h3 className="font-bold text-[#4A3728]">The Cornerstone - $100</h3>
          </div>
          <p className="text-sm text-[#4A3728]">
            A dedicated plot on the map + Photo + 500-character family story
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#2E8B57]/10 to-[#B22222]/10 p-6 rounded-xl border-2 border-[#2E8B57]">
          <div className="flex items-center mb-3">
            <div className="w-6 h-6 bg-[#2E8B57] rounded mr-2"></div>
            <h3 className="font-bold text-[#4A3728]">The Guardian - $1,000+</h3>
          </div>
          <p className="text-sm text-[#4A3728]">
            A Story Hub icon + Full gallery + Audio clip (Intergenerational interview)
          </p>
        </div>
      </div>
    </div>
  );
}
