import { Box } from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import { LogoutBtn } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box gridGap={4} alignItems='baseline'>
      <p>Welcome, {user.name}</p>
      <LogoutBtn type="button" onClick={() => dispatch(logoutUser())}>
        Logout
      </LogoutBtn>
    </Box>
  );
};
