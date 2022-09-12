import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './common/AppBar/AppBar';
import { Container } from '../components/UI/Container';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Container>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </Container>
    </Container>
  );
};
