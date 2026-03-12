import React, { createContext, useContext, useState, ReactNode } from 'react';
import imgRompecorazones from 'figma:asset/79164dd453462b4c23fd069bb9828983f88cec1c.png';
import imgPecaminosa from 'figma:asset/fdc887d4f03fc8368975147f81d1bdfd38a3e3aa.png';
import imgAmante from 'figma:asset/c825a32058fda066e1552f251c111f384dcffce7.png';

interface Recipe {
  id: string;
  name: 'La Rompecorazones' | 'La Pecaminosa' | 'La Amante';
  relleno: string;
  adicion: string;
  image: string;
}

interface PlayerRecipe {
  playerName: string;
  recipe: Recipe;
}

interface GameContextType {
  numberOfPlayers: number | null;
  gameMode: 'shared' | 'secret' | null;
  players: string[];
  sharedRecipe: Recipe | null;
  assignedRecipes: PlayerRecipe[];
  setNumberOfPlayers: (num: number) => void;
  setGameMode: (mode: 'shared' | 'secret') => void;
  setPlayers: (players: string[]) => void;
  assignRecipes: () => void;
  resetGame: () => void;
}

const recipes: Recipe[] = [
  {
    id: 'rompecorazones',
    name: 'La Rompecorazones',
    relleno: 'Fresa',
    adicion: 'Chispas',
    image: imgRompecorazones
  },
  {
    id: 'pecaminosa',
    name: 'La Pecaminosa',
    relleno: 'Chocolate',
    adicion: 'Fresa',
    image: imgPecaminosa
  },
  {
    id: 'amante',
    name: 'La Amante',
    relleno: 'Arequipe',
    adicion: 'Queso',
    image: imgAmante
  }
];

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [numberOfPlayers, setNumberOfPlayersState] = useState<number | null>(null);
  const [gameMode, setGameModeState] = useState<'shared' | 'secret' | null>(null);
  const [players, setPlayersState] = useState<string[]>([]);
  const [sharedRecipe, setSharedRecipe] = useState<Recipe | null>(null);
  const [assignedRecipes, setAssignedRecipes] = useState<PlayerRecipe[]>([]);

  const setNumberOfPlayers = (num: number) => {
    setNumberOfPlayersState(num);
  };

  const setGameMode = (mode: 'shared' | 'secret') => {
    setGameModeState(mode);
  };

  const setPlayers = (playerNames: string[]) => {
    setPlayersState(playerNames);
  };

  const getRandomRecipe = (): Recipe => {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    return recipes[randomIndex];
  };

  const assignRecipes = () => {
    if (gameMode === 'shared') {
      setSharedRecipe(getRandomRecipe());
    } else if (gameMode === 'secret' && players.length > 0) {
      const assigned = players.map(playerName => ({
        playerName,
        recipe: getRandomRecipe()
      }));
      setAssignedRecipes(assigned);
    }
  };

  const resetGame = () => {
    setNumberOfPlayersState(null);
    setGameModeState(null);
    setPlayersState([]);
    setSharedRecipe(null);
    setAssignedRecipes([]);
  };

  return (
    <GameContext.Provider
      value={{
        numberOfPlayers,
        gameMode,
        players,
        sharedRecipe,
        assignedRecipes,
        setNumberOfPlayers,
        setGameMode,
        setPlayers,
        assignRecipes,
        resetGame
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}