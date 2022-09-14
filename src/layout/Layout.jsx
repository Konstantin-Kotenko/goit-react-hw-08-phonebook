import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/authSlice';
import { Navigation } from './common/Navigation/Navigation';
import { UserBar } from './common/UserBar/UserBar';
import { Container } from '../components/UI/Container';
import { Header } from './common/Header';

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Header>
        <Navigation />
        <UserBar />
      </Header>
      <Outlet />
    </Container>
  );
};

export default Layout;
