import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <NavLink to="/signUp">SignUp</NavLink>
      <NavLink to="/login">Login</NavLink>
    </>
  );
};
