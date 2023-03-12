import { useSelector, useDispatch } from 'react-redux';
import { getState } from '../redux/selectors';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { refreshUser } from '../redux/operations';
import PrivateRoute from './PrivatRouter/PrivatRouter';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';

const Main = lazy(() => import('../pages/Main/Main'));
const Contacts = lazy(() => import('../pages/Contacts/Contacs'));
const Header = lazy(() => import('./Header/Header'));
const RegisterUser = lazy(() => import('../pages/Register/Register'));
const LoginUser = lazy(() => import('../pages/Login/Login'));

export const App = () => {
  const { error } = useSelector(getState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Main />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterUser />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginUser />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
            {error && <p>Somithing went wrong</p>}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};