import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useGame } from '../context/GameContext';
import imgSingleWaffle from "figma:asset/91722e510dfb15998b84a5dd30e341287764a821.png";
import imgMultipleWaffles from "figma:asset/a0c31d41e170d41403e1bb6dd4fb86875062e908.png";
import { ChevronLeft } from 'lucide-react';

interface ModeCardProps {
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
  image: string;
}

function ModeCard({ title, description, selected, onClick, image }: ModeCardProps) {
  const isFirst = title === "Misma receta";
  
  return (
    <button
      onClick={onClick}
      className={`bg-[#f4b5de] h-[182px] overflow-clip relative rounded-[10px] shadow-[0px_4px_4px_0px_rgba(77,61,18,0.1)] shrink-0 w-full cursor-pointer transition-all hover:scale-[1.02] ${
        selected ? 'ring-4 ring-[#fb58a7]' : ''
      }`}
    >
      <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[2px] items-start leading-[normal] left-[132px] not-italic top-[calc(50%+${isFirst ? '-1.5px' : '7px'})]">
        <p className="font-['Jetsy_Trial:Regular',sans-serif] relative shrink-0 text-[#fb58a7] text-[20px] w-[172px] text-left">{title}</p>
        <p className="font-['Poppins:Medium',sans-serif] relative shrink-0 text-[15px] text-white w-[180px] text-left">{description}</p>
      </div>
      
      <div className="-translate-y-1/2 absolute h-[150px] left-[12px] overflow-clip rounded-[10.545px] top-[calc(50%+${isFirst ? '-1px' : '0'})] w-[107px]">
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover rounded-[10.545px]"
        />
      </div>
    </button>
  );
}

export default function SelectModeScreen() {
  const navigate = useNavigate();
  const { setGameMode } = useGame();
  const [selectedMode, setSelectedMode] = useState<'shared' | 'secret' | null>(null);

  const handleSelect = (mode: 'shared' | 'secret') => {
    setSelectedMode(mode);
    setGameMode(mode);
  };

  const handleContinue = () => {
    if (selectedMode === 'shared') {
      navigate('/shared-recipe');
    } else if (selectedMode === 'secret') {
      navigate('/enter-names');
    }
  };

  const handleBack = () => {
    navigate('/select-players');
  };

  return (
    <div className="bg-[#fffaee] relative min-h-screen pb-24" data-name="Selección de Modo de Receta">
      <div className="-translate-x-1/2 absolute flex h-[0.508px] items-center justify-center left-1/2 top-[63.49px] w-[199.999px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-0.15deg]">
          <div className="h-0 relative w-[200px]">
            <div className="absolute inset-[-7.5px_-5.75%_-15.5px_-5.75%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 223 23">
                <g filter="url(#filter0_d_1_1527)">
                  <path d="M11.5 7.5H211.5" stroke="#EADAAF" strokeLinecap="round" strokeWidth="15" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23" id="filter0_d_1_1527" width="223" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.437876 0 0 0 0 0.335349 0 0 0 0 0.0509846 0 0 0 0.1 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1527" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1527" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[0.254px] items-center justify-center left-[calc(37.5%+0.25px)] top-[63.75px] w-[100px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-0.15deg]">
          <div className="h-0 relative w-[100px]">
            <div className="absolute inset-[-7.5px_-7.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115 15">
                <path d="M7.5 7.5H107.5" stroke="#FA58A7" strokeLinecap="round" strokeWidth="15" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleBack}
        className="absolute left-[25px] top-[111px] h-[35px] w-[31px] bg-[#fb58a7] rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#e94a98] transition-colors"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>

      <p className="absolute font-['Poppins:ExtraBold',sans-serif] leading-[normal] left-[66px] not-italic text-[#614e1e] text-[22px] top-[111px] w-[311px]">¿Cómo quieren sobrevivir al caos?</p>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[25px] not-italic text-[#614e1e] text-[18px] top-[187px] w-[226px]">Elijan su modo de juego</p>

      <div className="absolute content-stretch flex flex-col gap-[30px] items-start left-[26px] top-[274px] w-[351px]">
        <ModeCard
          title="Misma receta"
          description="Todos arman la misma oblea. Que gane el más rápido… o el más sucio."
          selected={selectedMode === 'shared'}
          onClick={() => handleSelect('shared')}
          image={imgSingleWaffle}
        />
        <ModeCard
          title="Recetas Secretas"
          description="Cada uno cocina en silencio… y conspira en secreto"
          selected={selectedMode === 'secret'}
          onClick={() => handleSelect('secret')}
          image={imgMultipleWaffles}
        />
      </div>

      <button
        onClick={handleContinue}
        disabled={selectedMode === null}
        className="-translate-x-1/2 fixed bg-[#fb58a7] content-stretch flex h-[56px] items-center justify-center left-1/2 max-w-[352px] w-[calc(100%-48px)] p-[10px] rounded-[55px] shadow-[0px_4px_4px_0px_rgba(112,86,13,0.1)] bottom-4 cursor-pointer hover:bg-[#e94a98] transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#fb58a7] z-10"
      >
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Continuar</p>
      </button>
    </div>
  );
}