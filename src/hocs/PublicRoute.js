import { Component } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'store/auth/authSelectors';

export const PublicRoute = ({
  redirected = false,
  redirectTo = '/',
  component: Component,
}) => {
  const isLoggedIn = useSelector(isLoggedIn);
  const redirect = isLoggedIn && redirected;
  return redirect ? <Navigate to={redirectTo} /> : Component;
};
