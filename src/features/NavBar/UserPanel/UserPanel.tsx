import { Button } from '~/shared/ui/Button/Button';
import { ButtonAppearance } from '~/shared/ui/Button/Button.types';

import userPanelStyle from './UserPanelStyle.module.scss';

export const UserPanel = () => {
  return (
    <div className={userPanelStyle.container}>
      <Button
        appearance={ButtonAppearance.Primary}
        text={'UN'}
      ></Button>
      <span className={userPanelStyle.text}>User Name</span>
    </div>
  );
};
