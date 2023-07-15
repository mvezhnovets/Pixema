import { Outlet } from 'react-router-dom';

import { Footer } from '~/features/Footer/Footer';
import { Menu } from '~/features/Menu/Menu';
import { NavBar } from '~/features/NavBar/NavBar';

import mainLayoutStyle from './MainLayouts.module.scss';

export const MainLayout = () => {
  return (
    <>
      <div className={mainLayoutStyle.wrapper}>
        <div className={mainLayoutStyle.container}>
          <NavBar />
          <main className={mainLayoutStyle.main}>
            <Menu appearance={mainLayoutStyle.menu} />
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};
