import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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

const NavList = styled.ul`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;

const NavItem = styled.li`
  cursor: pointer;
  justify-content: space-between;
  list-style: none;
  :not(:first-child) {
    margin-left: auto;
  }
`;

export const Navigation = () => {
  const isLogged = useSelector(state => state.auth.isLogged);

  return (
    <NavList>
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      {isLogged && (
        <NavItem>
          <Link to="contacts">Contacts</Link>
        </NavItem>
      )}
    </NavList>
  );
};
