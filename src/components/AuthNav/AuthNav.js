import { Box } from "components/Box";
import { HeaderNavLink } from "components/Navigation/Navigation.styled";

export const AuthNav = () => {
  return (
    <Box gridGap={4}>
      <HeaderNavLink to="/register">Register</HeaderNavLink>
      <HeaderNavLink to="/login">Log In</HeaderNavLink>
    </Box>
  );
};
