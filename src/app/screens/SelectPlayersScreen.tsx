import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useGame } from '../context/GameContext';
import svgPaths from "../../imports/svg-xtm555ag4e";
import imgImg12214 from "figma:asset/a712da6d76e76df0888ce8bf9d97a6c56d2341dc.png";
import { imgImg12215 } from "../../imports/svg-3kbzy";

function Group() {
  return (
    <div className="-translate-x-1/2 absolute h-[0.508px] left-1/2 top-[63px] w-[199.999px]">
      <div className="absolute inset-[-1477.5%_-5.75%_-3053.51%_-5.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 222.999 23.5076">
          <g filter="url(#filter0_d_1_1460)" id="Group 35">
            <path d="M11.5 8.00761L211.499 7.5" id="Vector 1" stroke="var(--stroke-0, #EADAAF)" strokeLinecap="round" strokeWidth="15" />
            <path d={svgPaths.p3c900e80} id="Vector 2" stroke="var(--stroke-0, #FA58A7)" strokeLinecap="round" strokeWidth="15" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.5076" id="filter0_d_1_1460" width="222.999" x="-4.76837e-07" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.437876 0 0 0 0 0.335349 0 0 0 0 0.0509846 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1460" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1460" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[75px] top-[47.55px]" data-name="Mask group">
      <div className="absolute h-[113px] left-[74.41px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.587px_23.624px] mask-size-[74.726px_91.612px] top-[23.93px] w-[83px]" data-name="IMG_1221 5" style={{ maskImage: `url('${imgImg12215}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[111.43%] left-[-8.48%] max-w-none top-[-11.43%] w-[108.53%]" src={imgImg12214} />
        </div>
      </div>
    </div>
  );
}

function Frame1({ count, subtitle }: { count: number; subtitle: string }) {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[2px] items-start left-[166px] not-italic top-[calc(50%+0.5px)]">
      <p className="font-['Jetsy_Trial:Regular',sans-serif] leading-[0] relative shrink-0 text-[#fb58a7] text-[0px] w-[172px]">
        <span className="font-['Mochiy_Pop_P_One:Regular',sans-serif] leading-[normal] text-[22px]">{count}</span>
        <span className="font-['Mochiy_Pop_One:Regular',sans-serif] leading-[normal] text-[25px]">{` `}</span>
        <span className="leading-[normal] text-[25px]">cocineros</span>
      </p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] relative shrink-0 text-[15px] text-white w-[158px]">{subtitle}</p>
    </div>
  );
}

function Frame7({ selected, onClick }: { selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#f4b5de] h-[136px] overflow-clip relative rounded-[10px] shadow-[0px_4px_4px_0px_rgba(77,61,18,0.1)] shrink-0 w-full cursor-pointer transition-all hover:scale-[1.02] ${
        selected ? 'ring-4 ring-[#fb58a7]' : ''
      }`}
    >
      <div className="absolute h-[135.551px] left-[-11px] top-0 w-[107.795px]" data-name="IMG_1221 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[111.43%] left-[-0.04%] max-w-none top-[-11.43%] w-[100.09%]" src={imgImg12214} />
        </div>
      </div>
      <MaskGroup />
      <Frame1 count={2} subtitle="Duelo Dulce" />
    </button>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-[75px] top-[46.55px]" data-name="Mask group">
      <div className="absolute h-[113px] left-[74.41px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.587px_23.624px] mask-size-[74.726px_91.612px] top-[22.93px] w-[83px]" data-name="IMG_1221 5" style={{ maskImage: `url('${imgImg12215}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[111.43%] left-[-8.48%] max-w-none top-[-11.43%] w-[108.53%]" src={imgImg12214} />
        </div>
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents left-[5px] top-[46px]" data-name="Mask group">
      <div className="absolute flex h-[113px] items-center justify-center left-[-2.69px] top-[22.38px] w-[83px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[113px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[7.687px_23.624px] mask-size-[74.726px_91.612px] relative w-[83px]" data-name="IMG_1221 5" style={{ maskImage: `url('${imgImg12215}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[111.43%] left-[-8.48%] max-w-none top-[-11.43%] w-[108.53%]" src={imgImg12214} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[5px] top-0">
      <div className="absolute bg-[#7573ac] h-[21px] left-[67px] top-[86px] w-[22px]" />
      <div className="absolute h-[87px] left-[45px] top-0 w-[69px]" data-name="IMG_1221 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[111.43%] left-[-0.04%] max-w-none top-[-11.43%] w-[100.09%]" src={imgImg12214} />
        </div>
      </div>
      <MaskGroup1 />
      <MaskGroup2 />
    </div>
  );
}

function Frame2({ count, subtitle }: { count: number; subtitle: string }) {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[2px] items-start left-[166px] not-italic top-[calc(50%+0.5px)]">
      <p className="font-['Jetsy_Trial:Regular',sans-serif] leading-[0] relative shrink-0 text-[#fb58a7] text-[25px] w-[172px]">
        <span className="font-['Mochiy_Pop_One:Regular',sans-serif] leading-[normal]">{`${count} `}</span>
        <span className="leading-[normal]">cocineros</span>
      </p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] relative shrink-0 text-[15px] text-white w-[158px]">{subtitle}</p>
    </div>
  );
}

function Frame5({ selected, onClick }: { selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#f4b5de] h-[136px] overflow-clip relative rounded-[10px] shadow-[0px_4px_4px_0px_rgba(77,61,18,0.1)] shrink-0 w-full cursor-pointer transition-all hover:scale-[1.02] ${
        selected ? 'ring-4 ring-[#fb58a7]' : ''
      }`}
    >
      <Group1 />
      <Frame2 count={3} subtitle="Triángulo Azucarado" />
    </button>
  );
}

function MaskGroup3() {
  return (
    <div className="absolute contents left-[70px] top-[47px]" data-name="Mask group">
      <div className="absolute h-[113px] left-[69.41px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.587px_23.624px] mask-size-[74.726px_91.612px] top-[23.38px] w-[83px]" data-name="IMG_1221 5" style={{ maskImage: `url('${imgImg12215}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[111.43%] left-[-8.48%] max-w-none top-[-11.43%] w-[108.53%]" src={imgImg12214} />
        </div>
      </div>
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="absolute contents left-0 top-[48px]" data-name="Mask group">
      <div className="absolute h-[32px] left-[6px] top-[76px] w-[2.422px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.4224 32">
          <path d={svgPaths.p6874900} fill="var(--fill-0, #37588A)" id="Rectangle 27" />
        </svg>
      </div>
      <div className="absolute h-[32px] left-px top-[76px] w-[2.422px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.4224 32">
          <path d={svgPaths.p6874900} fill="var(--fill-0, #37588A)" id="Rectangle 27" />
        </svg>
      </div>
      <div className="absolute flex h-[113px] items-center justify-center left-[-7.69px] top-[24.38px] w-[83px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[113px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[7.687px_23.624px] mask-size-[74.726px_91.612px] relative w-[83px]" data-name="IMG_1221 6" style={{ maskImage: `url('${imgImg12215}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[111.43%] left-[-8.48%] max-w-none top-[-11.43%] w-[108.53%]" src={imgImg12214} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[-14px] top-[-11px]">
      <div className="absolute bg-[#7573ac] h-[54px] left-[47px] top-[86px] w-[43px]" />
      <div className="absolute bg-[#7573ac] h-[69px] left-0 top-[71px] w-[23px]" />
      <div className="absolute h-[87px] left-[40px] top-0 w-[69px]" data-name="IMG_1221 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[111.43%] left-[-0.04%] max-w-none top-[-11.43%] w-[100.09%]" src={imgImg12214} />
        </div>
      </div>
      <div className="absolute h-[87px] left-[-14px] top-[-11px] w-[69px]" data-name="IMG_1221 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[111.43%] left-[-0.04%] max-w-none top-[-11.43%] w-[100.09%]" src={imgImg12214} />
        </div>
      </div>
      <MaskGroup3 />
      <MaskGroup4 />
    </div>
  );
}

function Frame3({ count, subtitle }: { count: number; subtitle: string }) {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[2px] items-start left-[166px] not-italic top-[calc(50%+0.5px)]">
      <p className="font-['Jetsy_Trial:Regular',sans-serif] leading-[0] relative shrink-0 text-[#fb58a7] text-[25px] w-[172px]">
        <span className="font-['Mochiy_Pop_One:Regular',sans-serif] leading-[normal]">{`${count} `}</span>
        <span className="leading-[normal]">cocineros</span>
      </p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] relative shrink-0 text-[15px] text-white w-[158px]">{subtitle}</p>
    </div>
  );
}

function Frame6({ selected, onClick }: { selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#f4b5de] h-[136px] overflow-clip relative rounded-[10px] shadow-[0px_4px_4px_0px_rgba(112,86,13,0.1)] shrink-0 w-full cursor-pointer transition-all hover:scale-[1.02] ${
        selected ? 'ring-4 ring-[#fb58a7]' : ''
      }`}
    >
      <Group2 />
      <Frame3 count={4} subtitle="Caos en la cocina" />
      <div className="absolute bg-[#373e87] h-[32px] left-0 top-[76px] w-px" />
    </button>
  );
}

function Frame4({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="h-[35px] relative shrink-0 w-[31px] cursor-pointer hover:opacity-90 transition-opacity"
    >
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 35">
        <g id="Frame 19">
          <rect fill="var(--fill-0, #FB58A7)" height="35" rx="8" width="31" />
          <path d="M21 8.5L10 17.7368L21 26.5" id="Vector 3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="3" />
        </g>
      </svg>
    </button>
  );
}

export default function SelectPlayersScreen() {
  const navigate = useNavigate();
  const { setNumberOfPlayers } = useGame();
  const [selectedCount, setSelectedCount] = useState<number | null>(null);

  const handleSelect = (count: number) => {
    setSelectedCount(count);
    setNumberOfPlayers(count);
  };

  const handleContinue = () => {
    if (selectedCount !== null) {
      navigate('/select-mode');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="bg-[#fffaee] relative min-h-screen pb-24" data-name="Selección de Número de Jugadores">
      <Group />
      
      <div className="-translate-x-1/2 absolute content-stretch flex gap-[10px] items-start left-1/2 top-[111px] w-[352px]">
        <Frame4 onClick={handleBack} />
        <p className="flex-[1_0_0] font-['Poppins:ExtraBold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#614e1e] text-[22px]">¿Cuántos cocineros compiten hoy?</p>
      </div>

      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[30px] items-start left-[calc(50%+0.5px)] top-[213px] w-[351px]">
        <Frame7
          selected={selectedCount === 2}
          onClick={() => handleSelect(2)}
        />
        <Frame5
          selected={selectedCount === 3}
          onClick={() => handleSelect(3)}
        />
        <Frame6
          selected={selectedCount === 4}
          onClick={() => handleSelect(4)}
        />
      </div>

      <button
        onClick={handleContinue}
        disabled={selectedCount === null}
        className="-translate-x-1/2 fixed bg-[#fb58a7] content-stretch flex h-[56px] items-center justify-center left-1/2 max-w-[352px] w-[calc(100%-48px)] p-[10px] rounded-[55px] bottom-4 cursor-pointer hover:bg-[#e94a98] transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#fb58a7] z-10"
      >
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Continuar</p>
      </button>
    </div>
  );
}