import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useGame } from '../context/GameContext';

export default function SharedRecipeScreen() {
  const navigate = useNavigate();
  const { sharedRecipe, assignRecipes, resetGame } = useGame();

  useEffect(() => {
    if (!sharedRecipe) {
      assignRecipes();
    }
  }, [sharedRecipe, assignRecipes]);

  const handleRestart = () => {
    resetGame();
    navigate('/');
  };

  if (!sharedRecipe) {
    return <div className="bg-[#fffaee] relative min-h-screen flex items-center justify-center">
      <p className="font-['Poppins:Medium',sans-serif] text-[#614e1e] text-[18px]">Cargando...</p>
    </div>;
  }

  return (
    <div className="bg-[#fffaee] relative min-h-screen pb-24" data-name="Caso A Modo Clásico">
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[25px] not-italic text-[#614e1e] top-[60px] w-[352px]">
        <p className="font-['Poppins:ExtraBold',sans-serif] h-[42px] leading-[normal] relative shrink-0 text-[28px] w-full">¡A cocinar!</p>
        <p className="font-['Poppins:Medium',sans-serif] leading-[normal] relative shrink-0 text-[14px] w-full">
          Comienzan a armar sus obleas, ensuciar la de los otros cocineros y que el más sucio gane!
        </p>
      </div>

      <div className="absolute left-[25px] top-[180px] w-[352px] bg-[#fffef8] rounded-[16px] p-[24px] border-2 border-[#eadaaf] shadow-[0px_4px_8px_0px_rgba(112,86,13,0.1)]">
        <p className="font-['Jetsy_Trial:Regular',sans-serif] leading-[normal] text-[#614e1e] text-[32px] mb-[24px]">
          {sharedRecipe.name}
        </p>

        <div className="flex flex-col gap-[16px]">
          <div className="bg-[#fffaee] rounded-[10px] p-[16px]">
            <p className="font-['Poppins:SemiBold',sans-serif] text-[#614e1e] text-[16px] mb-[4px]">Relleno:</p>
            <p className="font-['Poppins:Regular',sans-serif] text-[#614e1e] text-[16px]">{sharedRecipe.relleno}</p>
          </div>

          <div className="bg-[#fffaee] rounded-[10px] p-[16px]">
            <p className="font-['Poppins:SemiBold',sans-serif] text-[#614e1e] text-[16px] mb-[4px]">Adición:</p>
            <p className="font-['Poppins:Regular',sans-serif] text-[#614e1e] text-[16px]">{sharedRecipe.adicion}</p>
          </div>
        </div>

        <div className="mt-[24px] w-full h-[200px] bg-gradient-to-br from-[#f4b5de] to-[#fb58a7] rounded-[12px] flex items-center justify-center">
          <img 
            src={sharedRecipe.image} 
            alt={sharedRecipe.name} 
            className="w-full h-full object-cover rounded-[12px]"
          />
        </div>
      </div>

      <button
        onClick={handleRestart}
        className="-translate-x-1/2 fixed bg-[#fb58a7] content-stretch flex h-[56px] items-center justify-center left-1/2 max-w-[352px] w-[calc(100%-48px)] p-[10px] rounded-[55px] bottom-4 cursor-pointer hover:bg-[#e94a98] transition-colors z-10"
      >
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Reiniciar partida</p>
      </button>
    </div>
  );
}