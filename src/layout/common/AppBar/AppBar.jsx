import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Header } from 'components/UI/Header';

export const AppBar = () => {
  return (
    <Header>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </Header>
  );
};
