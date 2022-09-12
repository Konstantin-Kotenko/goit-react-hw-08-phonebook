import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLogging } from 'redux/authSlice';

export const PublicRoute = ({ children, restricted = false }) => {
  const isLogged = useSelector(getLogging);

  const redirect = isLogged && restricted;

  return redirect ? <Navigate to="/" /> : children;
};
