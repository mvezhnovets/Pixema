import { Link } from 'react-router-dom';

import { Button } from '~/shared/ui/Button/Button';
import { Input } from '~/shared/ui/Input/Input';

import signUpStyle from './SignUpForm.module.scss';

export const SignUpForm = () => {
  return (
    <form className={signUpStyle.container}>
      <h2 className={signUpStyle.text}>Sign Up</h2>
      <div className={signUpStyle.input}>
        <Input
          label="Name"
          placeholder="Enter name"
        ></Input>
        <Input
          label="Email"
          placeholder="Enter email"
        ></Input>
        <Input
          label="Password"
          placeholder="Enter password"
        ></Input>
        <Input
          label="Confirm Password"
          placeholder="Confirm password"
        ></Input>
      </div>
      <Button
        className={signUpStyle.button}
        text="Sign Up"
      ></Button>
      <p>
        {' '}
        Already have an account? <Link to={'/signIn'}>Sign In</Link>
      </p>
    </form>
  );
};
