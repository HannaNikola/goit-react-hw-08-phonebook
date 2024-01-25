
import { Conteiner } from './AppBar/App.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy } from "react";
import { refreshUser } from './redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { PrivateRoute } from './PrivateRoute';
import { GuardRoute } from './GuardRoute';
import NotFoundPage from 'pages/NotFoundPage';


const HomePage = lazy(() => import('./pages/Home.page'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const RegistrFormPage = lazy(() => import('./pages/RegistrFormPage'));
const LoginFormPage = lazy(() => import('./pages/LoginFormPage'));


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);



  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (

      <Conteiner>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <GuardRoute redirectTo="/contacts" component={<RegistrFormPage />} />
            }
          />
          <Route
            path="/login"
            element={
              <GuardRoute redirectTo="/contacts" component={<LoginFormPage />} />
            }
          />
          <Route
              path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactPage />} />
            }
          />
          </Route>
          <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
      </Conteiner>
  )

}
















