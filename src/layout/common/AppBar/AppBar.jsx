import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  return (
    <header>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  );
};
