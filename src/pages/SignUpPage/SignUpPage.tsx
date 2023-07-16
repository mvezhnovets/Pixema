import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '~/assets/icons/pixema.svg';
import { SignUpForm } from '~/features/SignUpForm/SignUpForm';

import signUpPageStyle from './SignUpStyle.module.scss';

export const SignUpPage = () => {
  return (
    <>
      <Link
        to={'/'}
        className={signUpPageStyle.logo}
      >
        <Logo />
      </Link>
      <div className={signUpPageStyle.container}>
        <SignUpForm />
      </div>
    </>
  );
};
