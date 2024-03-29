import { Title } from 'App.styled';
import { LoginForm } from 'components/AuthNav/LoginForm/LoginForm';
import { Box } from 'components/Box';

export default function Login() {
  return (
    <Box flexDirection="column" alignItems="center" mt={5}>
      <Title>Login</Title>
      <LoginForm />
    </Box>
  );
}
