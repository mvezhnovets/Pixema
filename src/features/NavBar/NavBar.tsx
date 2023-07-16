import { useState } from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as Cross } from '~/assets/icons/Close.svg';
import { ReactComponent as Burger } from '~/assets/icons/Menu.svg';
import { ReactComponent as Logo } from '~/assets/icons/pixema.svg';
import { Button } from '~/shared/ui/Button/Button';

import navBarStyle from './NavBar.module.scss';
import { SearchBar } from './SearchBar/SearchBar';
import { UserPanel } from './UserPanel/UserPanel';
import { Menu } from '../Menu/Menu';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleBurger = () => {
    setIsOpen((hasBeenOpened) => !hasBeenOpened);
  };
  return (
    <div className={navBarStyle.container}>
      <Link
        className={navBarStyle.logo}
        to="/"
      >
        <Logo />
      </Link>
      <SearchBar />
      <UserPanel />
      <Button
        className={navBarStyle.burger}
        onClick={toggleBurger}
        icon={isOpen ? <Cross /> : <Burger />}
      />
      <Menu
        appearance={navBarStyle.menu}
        isOpen={isOpen}
        makeOpen={toggleBurger}
      />
    </div>
  );
};
