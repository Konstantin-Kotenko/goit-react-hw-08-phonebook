import { Navigation } from './common/Navigation/Navigation';
import { UserBar } from './common/UserBar/UserBar';
import { Container } from '../components/UI/Container';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 8px 16px;
  margin-bottom: 16px;
  color: rgb(255, 255, 255);
  background-color: rgb(63, 81, 181);
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
`;

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
        <UserBar />
      </Header>
      <ul>
        <Outlet />
      </ul>
    </Container>
  );
};

export default Layout;
