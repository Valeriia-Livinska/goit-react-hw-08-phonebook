import { Box } from 'components/Box';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authOperations';
import { InputReg, LabelReg } from './RegisterForm.styled';
import { Form, SubmitButton } from 'components/ContactForm/ContactForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      registerUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Box gridGap={5}>
          <LabelReg>
            Name
            <InputReg
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </LabelReg>

          <LabelReg>
            Email
            <InputReg type="email" name="email" />
          </LabelReg>

          <LabelReg>
            Password
            <InputReg type="password" name="password" />
          </LabelReg>
        </Box>
        <SubmitButton type="submit">Register</SubmitButton>
      </Form>
    </>
  );
};
