import { Navigation } from './common/Navigation/Navigation';
import { UserBar } from './common/UserBar/UserBar';
import { Container } from '../components/UI/Container';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  top: 0px;
  left: 0px;
  z-index: 1100;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 8px 16px;
  margin-bottom: 16px;
  color: rgb(255, 255, 255);
  background-color: rgb(63, 81, 181);
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  > nav {
    display: flex;
  }
`;

const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Navigation />
          <UserBar />
        </nav>
      </Header>

      <div>
        <Outlet />
      </div>
    </Container>
  );
};

export default Layout;
