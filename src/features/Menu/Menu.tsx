import { NavLink } from 'react-router-dom';

import { ReactComponent as FavoriteIcon } from '~/assets/icons/Favorites.svg';
import { ReactComponent as HomeIcon } from '~/assets/icons/Home.svg';
import { ReactComponent as SettingsIcon } from '~/assets/icons/Setting.svg';
import { ReactComponent as TrendIcon } from '~/assets/icons/Trends.svg';

import menuStyles from './Menu.module.scss';
import { NavLinks } from '../NavBar/NavBar.constants';

export const Menu = ({
  appearance = menuStyles.container,
  isOpen,
  makeOpen
}: {
  appearance?: string;
  isOpen?: boolean;
  makeOpen?: () => void;
}) => {
  return (
    <div
      className={appearance}
      data-open={isOpen}
      onClick={makeOpen}
    >
      {NavLinks.map((link) => (
        <NavLink
          className={menuStyles.link}
          to={link.path}
          key={link.path}
        >
          {link.title === 'Home' ? (
            <HomeIcon />
          ) : link.title === 'Trends' ? (
            <TrendIcon />
          ) : link.title === 'Favorites' ? (
            <FavoriteIcon />
          ) : link.title === 'Setting' ? (
            <SettingsIcon />
          ) : null}
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};
