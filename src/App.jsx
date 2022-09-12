import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from 'layout/Layout';

const Home = lazy(() => import('pages/Home'));
// const Contacts = lazy(() => import('pages/Contacts/Contacts'));
// const Login = lazy(() => import('pages/Login/Login'));
const SignUp = lazy(() => import('pages/SignUp/SignUp'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/" element={<SignUp />} />
      </Route>
    </Routes>
  );
};
