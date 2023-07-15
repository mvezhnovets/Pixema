import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '~/layouts/MainLayout';
import { CardPage } from '~/pages/CardPage/CardPage';
import { FavoritePage } from '~/pages/FavoritesPages/FavoritePage';
import { Home } from '~/pages/HomePages/Home';
import { SettingPage } from '~/pages/SettingsPages/SettingPage';
import { TrendsPage } from '~/pages/TrendsPages/TrendsPage';

export const routerSchema = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/card/:id',
        element: <CardPage />
      },
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
