import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const isLogged = useSelector(state => state.auth.isLogged);

  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {isLogged && (
        <li>
          <NavLink to="contacts">Contacts</NavLink>
        </li>
      )}
    </ul>
  );
};
