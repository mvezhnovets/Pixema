import { useState } from 'react';

import { Button } from '~/shared/ui/Button/Button';
import { ButtonAppearance } from '~/shared/ui/Button/Button.types';

import { UserBar } from './UserBar/UserBar';
import userPanelStyle from './UserPanelStyle.module.scss';
import { ReactComponent as ArrowDown } from '../../../assets/icons/Arrow Down.svg';
import { ReactComponent as ArrowRight } from '../../../assets/icons/Arrow Right.svg';
import { ReactComponent as UserIcon } from '../../../assets/icons/user.svg';

export const UserPanel = () => {
  const [isOpenUserBar, setIsOpenUserBar] = useState<boolean>(false);
  const toggleUserBar = () =>
    setIsOpenUserBar((hasBeenOpened) => !hasBeenOpened);
  return (
    <div className={userPanelStyle.container}>
      <Button
        className={userPanelStyle.button}
        icon={<UserIcon />}
      ></Button>
      <span className={userPanelStyle.text}>User Name</span>
      <Button
        appearance={ButtonAppearance.IconButton}
        onClick={toggleUserBar}
        icon={isOpenUserBar ? <ArrowRight /> : <ArrowDown />}
      ></Button>
      <UserBar isOpen={isOpenUserBar} />
    </div>
  );
};
