import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLogging } from 'redux/authSlice';

export const PrivateRoute = ({ children }) => {
  const isLogged = useSelector(getLogging);

  return !isLogged ? <Navigate to="/" /> : children;
};
