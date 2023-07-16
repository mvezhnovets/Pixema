import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '~/assets/icons/pixema.svg';
import { SignInForm } from '~/features/SignInForm/SignInForm';

import signInPageStyle from './SignInStyle.module.scss';

export const SignInPage = () => {
  return (
    <>
      <Link
        to={'/'}
        className={signInPageStyle.logo}
      >
        <Logo />
      </Link>
      <div className={signInPageStyle.container}>
        <SignInForm />
      </div>
    </>
  );
};
