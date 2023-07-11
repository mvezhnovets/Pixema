import { useState } from 'react';

import { ReactComponent as Cross } from '~/assets/icons/Close.svg';
import { ReactComponent as Burger } from '~/assets/icons/Menu.svg';
import { ReactComponent as Logo } from '~/assets/icons/pixema.svg';
import { Button } from '~/shared/ui/Button/Button';

import navBarStyle from './NavBar.module.scss';
import { SearchBar } from './SearchBar/SearchBar';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleBurger = () => {
    setIsOpen((hasBeenOpened) => !hasBeenOpened);
  };
  return (
    <div className={navBarStyle.container}>
      <Logo />
      <SearchBar />
      <Button
        className={navBarStyle.burger}
        onClick={toggleBurger}
        icon={isOpen ? <Cross /> : <Burger />}
      />
    </div>
  );
};
