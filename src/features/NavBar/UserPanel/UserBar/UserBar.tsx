import { Link } from 'react-router-dom';

import userBarStyle from './UserBar.module.scss';

export const UserBar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      data-open={isOpen}
      className={userBarStyle.container}
    >
      <Link
        className={userBarStyle.link}
        to="/sing-in"
      >
        Sing In
      </Link>
      <Link
        className={userBarStyle.link}
        to="/sing-up"
      >
        Sing Up
      </Link>
    </div>
  );
};
