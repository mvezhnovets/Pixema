import { SignInForm } from '~/features/SignInForm/SignInForm';

import signInPageStyle from './SignInStyle.module.scss';

export const SignInPage = () => {
  return (
    <div className={signInPageStyle.container}>
      <SignInForm />
    </div>
  );
};
