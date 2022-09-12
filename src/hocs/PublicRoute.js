import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export const PublicRoute = ({ children, restricted = false }) => {
  const isLogged = useSelector(state => state.auth.isLoggedIn);

  const redirect = isLogged && restricted;

  return redirect ? <Navigate to="/" /> : children;
};
