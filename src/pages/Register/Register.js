import { Title } from 'components/App.styled';
import { RegisterForm } from 'components/AuthNav/RegisterForm/RegisterForm';
import { Box } from 'components/Box';

export default function Register() {
  return (
    <Box flexDirection="column" alignItems="center" mt={5}>
      <Title>Registration</Title>
      <RegisterForm />
    </Box>
  );
}
