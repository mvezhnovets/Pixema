import { Outlet } from 'react-router-dom';

import { Footer } from '~/features/Footer/Footer';
import { Menu } from '~/features/Menu/Menu';
import { NavBar } from '~/features/NavBar/NavBar';

import MainStyles from './MainPageStyles.module.scss';

export const MainPage = () => {
  return (
    <>
      <div className={MainStyles.wrapper}>
        <div className={MainStyles.container}>
          <NavBar />
          <main className={MainStyles.main}>
            <Menu appearance={MainStyles.menu} />
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};