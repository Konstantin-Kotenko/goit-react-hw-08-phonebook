import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, getUserName, getLogging } from 'redux/authSlice';
import { Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const NavList = styled.ul`
  display: flex;
  margin: 0;
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
  color: white;
  font-weight: 500;
  &.active {
    color: black;
    background-color: white;
  }
`;

const Button = styled.button`
  border-radius: 4px;
  display: block;
  padding: 12px 25px;
  border: none;
  cursor: pointer;
  color: white;
  background-color: black;
  font-weight: bold;
  margin-left: 15px;
  :hover {
    color: black;
    background-color: white;
  }
`;

const User = styled.p`
  margin: 0;
`;

export const UserBar = () => {
  const name = useSelector(getUserName);
  const isLogged = useSelector(getLogging);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
    <Navigate to="/" replace />;
  };

  return (
    <>
      {isLogged ? (
        <Navigation>
          <NavItem>
            <User>Welcome: {name}</User>
          </NavItem>
          <NavItem>
            <Button type="button" onClick={logoutHandler}>
              Logout
            </Button>
          </NavItem>
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
    </>
  );
};
