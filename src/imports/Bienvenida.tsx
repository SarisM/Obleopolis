import imgBienvenida from "figma:asset/fa63ba440b568f961ea580fbfc1a15c9dd9e0019.png";
import imgImg12001 from "figma:asset/70abedbfc83871454fa9dea9f40b10464fb81e3c.png";

function Ver() {
  return (
    <div className="absolute h-[180.916px] left-[62px] overflow-clip top-[85px] w-[278.61px]" data-name="ver1">
      <div className="absolute bg-white h-[99.503px] left-[56.08px] top-[23.52px] w-[103.121px]" />
      <p className="-translate-x-1/2 absolute font-['Jetsy_Trial:Regular',sans-serif] leading-[0.996] left-[140.21px] not-italic text-[#fa58a7] text-[94.076px] text-center top-[74.18px] whitespace-nowrap">polis</p>
      <p className="-translate-x-1/2 absolute bg-clip-text font-['Jetsy_Trial:Regular',sans-serif] leading-[0.996] left-[138.9px] not-italic text-[75.985px] text-[transparent] text-center top-[14.47px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(104.587deg, rgb(250, 88, 167) 3.8363%, rgb(244, 181, 222) 59.559%)" }}>
        Obleo
      </p>
      <p className="-translate-x-1/2 absolute font-['Jetsy_Trial:Regular',sans-serif] leading-[0.996] left-[193.8px] not-italic text-[#fa58a7] text-[94.076px] text-center top-[74.18px] whitespace-nowrap">i</p>
      <p className="-translate-x-1/2 absolute font-['Jetsy_Trial:Regular',sans-serif] leading-[0.996] left-[51.71px] not-italic text-[#fa58a7] text-[94.076px] text-center top-[74.18px] whitespace-nowrap">p</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#fb58a7] content-stretch flex h-[56px] items-center justify-center left-1/2 p-[10px] rounded-[55px] top-[763px] w-[352px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fffdf4] text-[18px] whitespace-nowrap">Iniciar partida</p>
    </div>
  );
}

export default function Bienvenida() {
  return (
    <div className="bg-size-[auto_auto,1024px_1024px,auto_auto] bg-top-left relative size-full" data-name="Bienvenida" style={{ backgroundImage: `linear-gradient(90deg, rgb(244, 181, 222) 0%, rgb(244, 181, 222) 100%), url('${imgBienvenida}'), linear-gradient(90deg, rgb(244, 182, 223) 0%, rgb(244, 182, 223) 100%)` }}>
      <div className="-translate-x-1/2 absolute h-[564px] left-[calc(50%-0.5px)] top-[353px] w-[403px]" data-name="IMG_1200 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg12001} />
      </div>
      <Ver />
      <div className="absolute bg-gradient-to-b from-[rgba(244,181,222,0)] h-[201px] left-0 to-[#e99dce] top-[673px] w-[402px]" />
      <Frame />
      <p className="absolute font-['Jetsy_Trial:Regular',sans-serif] leading-[normal] left-[calc(50%-158px)] not-italic text-[#733924] text-[22.4px] top-[292px] w-[316.96px]">Donde el dulce caos reina</p>
    </div>
  );
}