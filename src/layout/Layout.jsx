import { Navigation } from './common/Navigation/Navigation';
import { UserBar } from './common/UserBar/UserBar';
import { Container } from '../components/UI/Container';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Container>
      <nav>
        <Navigation />
        <UserBar />
      </nav>
      <div>
        <Outlet />
      </div>
    </Container>
  );
};

export default Layout;
