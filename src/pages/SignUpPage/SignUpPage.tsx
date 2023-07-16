import { SignUpForm } from '~/features/SignUpForm/SignUpForm';

import signUpPageStyle from './SignUpStyle.module.scss';

export const SignUpPage = () => {
  return (
    <div className={signUpPageStyle.container}>
      <SignUpForm />
    </div>
  );
};
