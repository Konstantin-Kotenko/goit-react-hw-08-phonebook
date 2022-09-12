import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { PrivateRoute } from 'hocs/PrivateRoute';
import { PublicRoute } from 'hocs/PublicRoute';

const Layout = lazy(() => import('layout/Layout'));
const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Login = lazy(() => import('pages/Login/Login'));
const SignUp = lazy(() => import('pages/SignUp/SignUp'));

export const App = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            path="/"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="signUp"
            element={
              <PublicRoute restricted>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
