import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/authSlice';
import { Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  :last-child {
    padding-right: 20px;
  }
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
  border-radius: 4px;
  display: block;
  padding: 12px 25px;
  border: none;
  cursor: pointer;
  color: black;
  background-color: white;
  font-weight: bold;
  margin-left: 15px;
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
    <>
      {isLogged ? (
        <Navigation>
          <NavItem>
            <p>Welcome {name}</p>
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
