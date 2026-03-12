import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useGame } from '../context/GameContext';
import { X } from 'lucide-react';

interface PlayerCardProps {
  playerName: string;
  recipeName: string;
  relleno: string;
  adicion: string;
  color: string;
  darkColor: string;
  textColor: string;
  onClick: () => void;
}

function PlayerCard({ playerName, recipeName, relleno, adicion, color, darkColor, textColor, onClick }: PlayerCardProps) {
  return (
    <button
      onClick={onClick}
      className="h-[229px] overflow-clip relative rounded-[17.465px] shadow-[0px_4px_4px_0px_rgba(112,86,13,0.1)] shrink-0 w-[166px] cursor-pointer hover:scale-105 transition-transform"
      style={{ backgroundColor: color }}
    >
      <p className="-translate-x-1/2 absolute font-['Jetsy_Trial:Regular',sans-serif] leading-[normal] left-[calc(50%+0.5px)] not-italic text-[94.167px] text-center top-[41.88px] w-[113px]" style={{ color: darkColor }}>¿?</p>
      <div className="-translate-x-1/2 absolute content-stretch flex h-[34px] items-center justify-center left-1/2 p-[10px] rounded-[55px] top-[156.88px] w-[120px]" style={{ backgroundColor: darkColor }}>
        <p className="font-['Jetsy_Trial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] whitespace-nowrap" style={{ color: textColor }}>{playerName}</p>
      </div>
    </button>
  );
}

interface RecipeModalProps {
  playerName: string;
  recipeName: string;
  relleno: string;
  adicion: string;
  recipeImage: string;
  onClose: () => void;
}

function RecipeModal({ playerName, recipeName, relleno, adicion, recipeImage, onClose }: RecipeModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)]" onClick={onClose}>
      <div 
        className="bg-[#fffef8] rounded-[20px] p-[32px] w-[352px] max-h-[90vh] overflow-y-auto relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-[16px] top-[16px] w-[40px] h-[40px] bg-[#fb58a7] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#e94a98] transition-colors"
        >
          <X className="text-white" size={24} />
        </button>

        <p className="font-['Jetsy_Trial:Regular',sans-serif] text-[#614e1e] text-[32px] mb-[24px]">
          {playerName}
        </p>

        <p className="font-['Poppins:Bold',sans-serif] text-[#614e1e] text-[20px] mb-[16px]">
          {recipeName}
        </p>

        <div className="flex flex-col gap-[16px]">
          <div className="bg-[#fffaee] rounded-[10px] p-[16px]">
            <p className="font-['Poppins:SemiBold',sans-serif] text-[#614e1e] text-[16px] mb-[4px]">Relleno:</p>
            <p className="font-['Poppins:Regular',sans-serif] text-[#614e1e] text-[16px]">{relleno}</p>
          </div>

          <div className="bg-[#fffaee] rounded-[10px] p-[16px]">
            <p className="font-['Poppins:SemiBold',sans-serif] text-[#614e1e] text-[16px] mb-[4px]">Adición:</p>
            <p className="font-['Poppins:Regular',sans-serif] text-[#614e1e] text-[16px]">{adicion}</p>
          </div>
        </div>

        <div className="mt-[24px] w-full h-[200px] bg-gradient-to-br from-[#f4b5de] to-[#fb58a7] rounded-[12px] flex items-center justify-center">
          <img 
            src={recipeImage} 
            alt={recipeName} 
            className="w-full h-full object-cover rounded-[12px]"
          />
        </div>

        <button
          onClick={onClose}
          className="w-full mt-[24px] bg-[#fb58a7] h-[56px] rounded-[55px] flex items-center justify-center cursor-pointer hover:bg-[#e94a98] transition-colors"
        >
          <p className="font-['Poppins:SemiBold',sans-serif] text-white text-[18px]">Cerrar</p>
        </button>
      </div>
    </div>
  );
}

const PLAYER_COLORS = [
  { bg: '#f4b5de', dark: '#fb58a7', text: '#ffe1f4' },
  { bg: '#03e29d', dark: '#008663', text: '#e3fff6' },
  { bg: '#927fff', dark: '#3f22ec', text: '#d9d3ff' },
  { bg: '#e3f441', dark: '#adbe10', text: '#f8ffb9' },
];

export default function SecretRecipesScreen() {
  const navigate = useNavigate();
  const { assignedRecipes, assignRecipes, resetGame } = useGame();
  const [selectedPlayer, setSelectedPlayer] = useState<number | null>(null);

  useEffect(() => {
    if (assignedRecipes.length === 0) {
      assignRecipes();
    }
  }, [assignedRecipes, assignRecipes]);

  const handleRestart = () => {
    resetGame();
    navigate('/');
  };

  if (assignedRecipes.length === 0) {
    return <div className="bg-[#fffaee] relative min-h-screen flex items-center justify-center">
      <p className="font-['Poppins:Medium',sans-serif] text-[#614e1e] text-[18px]">Cargando...</p>
    </div>;
  }

  return (
    <div className="bg-[#fffaee] relative min-h-screen overflow-y-auto pb-24" data-name="Caso B: Recetas Secretas">
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[25px] not-italic text-[#614e1e] top-[60px] w-[352px]">
        <p className="font-['Poppins:ExtraBold',sans-serif] h-[42px] leading-[normal] relative shrink-0 text-[28px] w-full">¡A cocinar!</p>
        <p className="font-['Poppins:Medium',sans-serif] leading-[0] relative shrink-0 text-[14px] w-full">
          <span className="leading-[normal]">Nadie sabe qué estás armando. Y eso es poder... Dale click en </span>
          <span className="font-['Poppins:Bold',sans-serif] leading-[normal]">tu nombre</span>
          <span className="leading-[normal]"> para ver cual es tu receta</span>
        </p>
      </div>

      <div className="absolute left-[25px] top-[208px] w-[352px] grid grid-cols-2 gap-[20px]">
        {assignedRecipes.map((assignment, index) => {
          const colors = PLAYER_COLORS[index % PLAYER_COLORS.length];
          return (
            <PlayerCard
              key={index}
              playerName={assignment.playerName}
              recipeName={assignment.recipe.name}
              relleno={assignment.recipe.relleno}
              adicion={assignment.recipe.adicion}
              color={colors.bg}
              darkColor={colors.dark}
              textColor={colors.text}
              onClick={() => setSelectedPlayer(index)}
            />
          );
        })}
      </div>

      <button
        onClick={handleRestart}
        className="-translate-x-1/2 fixed bg-[#fb58a7] content-stretch flex h-[56px] items-center justify-center left-1/2 max-w-[352px] w-[calc(100%-48px)] p-[10px] rounded-[55px] bottom-4 cursor-pointer hover:bg-[#e94a98] transition-colors z-10"
      >
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Reiniciar juego</p>
      </button>

      {selectedPlayer !== null && (
        <RecipeModal
          playerName={assignedRecipes[selectedPlayer].playerName}
          recipeName={assignedRecipes[selectedPlayer].recipe.name}
          relleno={assignedRecipes[selectedPlayer].recipe.relleno}
          adicion={assignedRecipes[selectedPlayer].recipe.adicion}
          recipeImage={assignedRecipes[selectedPlayer].recipe.image}
          onClose={() => setSelectedPlayer(null)}
        />
      )}
    </div>
  );
}