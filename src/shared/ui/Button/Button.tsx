import { type ButtonHTMLAttributes, type ReactElement } from 'react';

import classNames from 'classnames';

import buttonStyles from '~/shared/ui/Button/Button.module.scss';
import {
  ButtonAppearance,
  type ButtonAppearances
} from '~/shared/ui/Button/Button.types';

export const Button = ({
  text = null,
  appearance = ButtonAppearance.Primary,
  icon = null,
  ...passThroughProperties
}: {
  text?: string | number | null;
  appearance?: ButtonAppearances;
  icon?: ReactElement | null;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...passThroughProperties}
      className={`${passThroughProperties.className || ''} ${classNames({
        [buttonStyles.button]: true,
        [buttonStyles[appearance]]: true
      })}`}
    >
      {icon && <>{icon}</>}
      {text}
    </button>
  );
};
