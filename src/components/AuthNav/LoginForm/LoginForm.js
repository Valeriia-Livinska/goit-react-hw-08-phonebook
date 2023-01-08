import { Box } from 'components/Box';
import {
  Form,
  SubmitButton,
} from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authOperations';
import { InputReg, LabelReg } from '../RegisterForm/RegisterForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      loginUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Box gridGap={6}>
          <LabelReg>
            Email
            <InputReg type="email" name="email" />
          </LabelReg>

          <LabelReg>
            Password
            <InputReg type="password" name="password" />
          </LabelReg>
        </Box>
        <SubmitButton type="submit">Log In</SubmitButton>
      </Form>
    </>
  );
};
