import { useNavigate } from 'react-router';
import imgBienvenida from "figma:asset/fa63ba440b568f961ea580fbfc1a15c9dd9e0019.png";
import imgImg12001 from "figma:asset/70abedbfc83871454fa9dea9f40b10464fb81e3c.png";
import logoObleopolis from "figma:asset/7fba84cc666b37848fad53f7b9279c390c0f8f89.png";

export default function WelcomeScreen() {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/select-players');
  };

  return (
    <div className="bg-size-[auto_auto,1024px_1024px,auto_auto] bg-top-left relative min-h-screen pb-24" data-name="Bienvenida" style={{ backgroundImage: `linear-gradient(90deg, rgb(244, 181, 222) 0%, rgb(244, 181, 222) 100%), url('${imgBienvenida}'), linear-gradient(90deg, rgb(244, 182, 223) 0%, rgb(244, 182, 223) 100%)` }}>
      <div className="-translate-x-1/2 absolute h-[564px] left-[calc(50%-0.5px)] top-[353px] w-[403px]" data-name="IMG_1200 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg12001} />
      </div>
      <div className="absolute left-[62px] top-[85px] w-[278.61px]">
        <img src={logoObleopolis} alt="Obleopolis" className="w-full h-auto" />
      </div>
      <button
        onClick={handleStartGame}
        className="-translate-x-1/2 fixed bg-[#fb58a7] content-stretch flex h-[56px] items-center justify-center left-1/2 max-w-[352px] w-[calc(100%-48px)] p-[10px] rounded-[55px] bottom-4 cursor-pointer hover:bg-[#e94a98] transition-colors z-10"
      >
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">¡Empezar a Jugar!</p>
      </button>
    </div>
  );
}