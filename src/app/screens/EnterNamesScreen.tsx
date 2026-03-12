import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useGame } from '../context/GameContext';
import { ChevronLeft } from 'lucide-react';
import imgBackground from "figma:asset/904c702c662300f8f74320b0596b0610af37708c.png";

export default function EnterNamesScreen() {
  const navigate = useNavigate();
  const { numberOfPlayers, setPlayers: setGamePlayers, assignRecipes } = useGame();
  const [playerNames, setPlayerNames] = useState<string[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [globalError, setGlobalError] = useState<string>('');

  useEffect(() => {
    if (numberOfPlayers) {
      setPlayerNames(Array(numberOfPlayers).fill(''));
      setErrors(Array(numberOfPlayers).fill(''));
    }
  }, [numberOfPlayers]);

  const handleNameChange = (index: number, value: string) => {
    const newNames = [...playerNames];
    newNames[index] = value;
    setPlayerNames(newNames);
    setGlobalError('');
  };

  const validateNames = (): boolean => {
    const newErrors = Array(numberOfPlayers!).fill('');
    let hasError = false;

    // Check for empty names
    playerNames.forEach((name, index) => {
      if (name.trim() === '') {
        newErrors[index] = 'Este campo es obligatorio';
        hasError = true;
      }
    });

    // Check for duplicate names
    const nameSet = new Set<string>();
    playerNames.forEach((name, index) => {
      const trimmedName = name.trim().toLowerCase();
      if (trimmedName && nameSet.has(trimmedName)) {
        newErrors[index] = 'Este nombre ya existe';
        hasError = true;
      }
      nameSet.add(trimmedName);
    });

    setErrors(newErrors);

    if (hasError) {
      setGlobalError('Por favor corrige los errores antes de continuar');
    }

    return !hasError;
  };

  const handleContinue = () => {
    if (validateNames()) {
      setGamePlayers(playerNames);
      assignRecipes();
      navigate('/secret-recipes');
    }
  };

  const handleBack = () => {
    navigate('/select-mode');
  };

  const canContinue = playerNames.every(name => name.trim() !== '') && playerNames.length === numberOfPlayers;

  return (
    <div 
      className="relative min-h-screen overflow-y-auto bg-cover bg-center bg-no-repeat pb-24" 
      data-name="Ingreso de Nombres"
      style={{ backgroundImage: `url('${imgBackground}')` }}
    >
      <div className="-translate-x-1/2 absolute flex h-[0.508px] items-center justify-center left-1/2 top-[63.49px] w-[199.999px]">
        <div className="flex-none rotate-[-0.15deg]">
          <div className="h-0 relative w-[200px]">
            <div className="absolute inset-[-7.5px_-5.75%_-15.5px_-5.75%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 223 23">
                <g filter="url(#filter0_d_names)">
                  <path d="M11.5 7.5H211.5" stroke="#EADAAF" strokeLinecap="round" strokeWidth="15" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23" id="filter0_d_names" width="223" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.437876 0 0 0 0 0.335349 0 0 0 0 0.0509846 0 0 0 0.1 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_names" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_names" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[0.254px] items-center justify-center left-[calc(50%-25px)] top-[63.75px] w-[150px]">
        <div className="flex-none rotate-[-0.15deg]">
          <div className="h-0 relative w-[150px]">
            <div className="absolute inset-[-7.5px_-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 165 15">
                <path d="M7.5 7.5H157.5" stroke="#FA58A7" strokeLinecap="round" strokeWidth="15" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleBack}
        className="absolute left-[25px] top-[111px] h-[35px] w-[31px] bg-[#fb58a7] rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#e94a98] transition-colors z-10"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>

      <p className="absolute font-['Poppins:ExtraBold',sans-serif] leading-[normal] left-[66px] not-italic text-[#614e1e] text-[22px] top-[111px] w-[311px]">¿Quiénes se atreven a cocinar en este caos?</p>

      <div className="absolute left-[25px] top-[190px] w-[352px] flex flex-col gap-[20px]">
        {playerNames.map((name, index) => (
          <div key={index} className="flex flex-col gap-[8px]">
            <label className="font-['Poppins:SemiBold',sans-serif] text-[#614e1e] text-[16px]">
              Cocinero {index + 1}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => handleNameChange(index, e.target.value)}
              placeholder="Nombre"
              className={`h-[48px] px-[16px] rounded-[8px] border-2 font-['Poppins:Regular',sans-serif] text-[16px] outline-none transition-colors ${
                errors[index]
                  ? 'border-red-500 bg-red-50 placeholder-red-300'
                  : 'border-[#eadaaf] bg-[#fffef8] placeholder-[#b8a97c]'
              } focus:border-[#fb58a7]`}
            />
            {errors[index] && (
              <p className="font-['Poppins:Regular',sans-serif] text-red-500 text-[14px]">{errors[index]}</p>
            )}
          </div>
        ))}
      </div>

      {globalError && (
        <p className="absolute left-[25px] top-[calc(190px+${numberOfPlayers! * 96}px)] font-['Poppins:Medium',sans-serif] text-red-500 text-[14px] w-[352px]">
          {globalError}
        </p>
      )}

      <button
        onClick={handleContinue}
        disabled={!canContinue}
        className="-translate-x-1/2 fixed bg-[#fb58a7] content-stretch flex h-[56px] items-center justify-center left-1/2 max-w-[352px] w-[calc(100%-48px)] p-[10px] rounded-[55px] bottom-4 cursor-pointer hover:bg-[#e94a98] transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#fb58a7] z-10"
      >
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Iniciar partida</p>
      </button>
    </div>
  );
}