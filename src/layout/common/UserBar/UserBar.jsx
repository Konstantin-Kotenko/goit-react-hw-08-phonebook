import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/authSlice';
import { Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const Div = styled.div`
  justify-content: space-between;
  width: 100%;
`;

const Navigation = styled.div`
  display: flex;
  margin-left: auto;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled.li`
  cursor: pointer;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: black;
    background-color: white;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: black;
    background-color: white;
  }
`;

export const UserBar = () => {
  const name = useSelector(state => state.auth.user.name);
  const isLogged = useSelector(state => state.auth.isLogged);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
    <Navigate to="/" replace />;
  };

  return (
    <Div>
      {isLogged ? (
        <Navigation>
          <p>{name.toUpperCase()}</p>
          <Button type="button" onClick={logoutHandler}>
            Logout
          </Button>
        </Navigation>
      ) : (
        <NavList>
          <NavItem>
            <Link to="signUp">SignUp</Link>
          </NavItem>
          <NavItem>
            <Link to="login">Login</Link>
          </NavItem>
        </NavList>
      )}
    </Div>
  );
};
