import { AuthNav } from "components/AuthNav/AuthNav"
import { UserMenu } from "components/UserMenu/UserMenu";
import { Navigation } from 'components/Navigation/Navigation';
import { Header } from "./AppBar.styled";
import { selectIsLoggedIn } from "redux/auth/authSelectors";
import { useSelector } from "react-redux";

export const AppBar = () => { 
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
    return (
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
    );
}