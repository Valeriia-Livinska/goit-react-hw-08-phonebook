import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { HeaderNavLink } from './Navigation.styled';
import { Box } from 'components/Box';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <Box gridGap={4}>
        <HeaderNavLink to="/">Home</HeaderNavLink>
        {isLoggedIn && <HeaderNavLink to="/contacts">Contacts</HeaderNavLink>}
      </Box>
    </nav>
  );
};
