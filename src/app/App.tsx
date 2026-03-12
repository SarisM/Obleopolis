import { RouterProvider, createBrowserRouter, Navigate } from 'react-router';
import { GameProvider } from './context/GameContext';
import WelcomeScreen from './screens/WelcomeScreen';
import SelectPlayersScreen from './screens/SelectPlayersScreen';
import SelectModeScreen from './screens/SelectModeScreen';
import EnterNamesScreen from './screens/EnterNamesScreen';
import SharedRecipeScreen from './screens/SharedRecipeScreen';
import SecretRecipesScreen from './screens/SecretRecipesScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomeScreen />,
  },
  {
    path: '/select-players',
    element: <SelectPlayersScreen />,
  },
  {
    path: '/select-mode',
    element: <SelectModeScreen />,
  },
  {
    path: '/enter-names',
    element: <EnterNamesScreen />,
  },
  {
    path: '/shared-recipe',
    element: <SharedRecipeScreen />,
  },
  {
    path: '/secret-recipes',
    element: <SecretRecipesScreen />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

function App() {
  return (
    <GameProvider>
      <div className="min-h-screen bg-[#fffaee]">
        <div className="min-h-screen max-w-[402px] mx-auto relative overflow-y-auto">
          <RouterProvider router={router} />
        </div>
      </div>
    </GameProvider>
  );
}

export default App;