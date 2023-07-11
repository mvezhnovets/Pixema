import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { FavoritePage } from '~/pages/FavoritesPages/FavoritePage';
import { MainPage } from '~/pages/MainPages/MainPage';
import { SettingPage } from '~/pages/SettingsPages/SettingPage';
import { TrendsPage } from '~/pages/TrendsPages/TrendsPage';

export const routerSchema = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: '/trends',
        element: <TrendsPage />
      },
      {
        path: '/favorites',
        element: <FavoritePage />
      },
      {
        path: '/setting',
        element: <SettingPage />
      },
      {
        path: '*',
        element: <div>Not found</div>
      }
    ]
  }
]);

export const AppRouter = () => {
  return <RouterProvider router={routerSchema} />;
};
