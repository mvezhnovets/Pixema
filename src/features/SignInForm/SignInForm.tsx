import { Link } from 'react-router-dom';

import { Button } from '~/shared/ui/Button/Button';
import { Input } from '~/shared/ui/Input/Input';

import signInStyle from './SignInForm.module.scss';

export const SignInForm = () => {
  return (
    <form className={signInStyle.container}>
      <h2 className={signInStyle.text}>Sign In</h2>
      <div className={signInStyle.input}>
        <Input
          label="Email"
          placeholder="Enter your email"
        ></Input>
        <Input
          label="Password"
          placeholder="Enter your email"
        ></Input>
        <Button
          className={signInStyle.button}
          text="Sign In"
        ></Button>
        <p>
          Don`t have an account? <Link to={'/signUp'}>Sign Up</Link>
        </p>
      </div>
    </form>
  );
};
