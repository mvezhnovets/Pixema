import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '~/layouts/MainLayout';
import { CardPage } from '~/pages/CardPage/CardPage';
import { FavoritePage } from '~/pages/FavoritesPages/FavoritePage';
import { Home } from '~/pages/HomePages/Home';
import { SearchResultPage } from '~/pages/SearchResultPage/SearchResultPage';
import { SettingPage } from '~/pages/SettingsPages/SettingPage';
import { SignInPage } from '~/pages/SignInPage/SignInPage';
import { SignUpPage } from '~/pages/SignUpPage/SignUpPage';
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
        path: '/signIn',
        element: <SignInPage />
      },
      {
        path: '/signUp',
        element: <SignUpPage />
      },
      {
        path: '/setting',
        element: <SettingPage />
      },
      {
        path: '/search/:request',
        element: <SearchResultPage />
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
