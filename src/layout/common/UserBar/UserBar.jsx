import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/authSlice';
import { Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const UserBar = () => {
  const name = useSelector(state => state.auth.user.name);
  const isLogged = useSelector(state => state.auth.isLogged);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
    <Navigate to="/" replace={true} />;
  };

  return (
    <>
      {isLogged ? (
        <div>
          <p>You are logged in as:{name}</p>
          <button type="button" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      ) : (
        <ul>
          <li>
            <NavLink to="signUp">SignUp</NavLink>
          </li>
          <li>
            <NavLink to="login">login</NavLink>
          </li>
        </ul>
      )}
    </>
  );
};
