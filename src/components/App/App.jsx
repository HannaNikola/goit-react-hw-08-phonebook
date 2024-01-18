
// import { ContactForm } from '../ContactForm/ContactForm';
// import { FilterName } from '../Filter/Filter';
// import { ContactList } from '../ContactList/ContactList';
import { Conteiner } from './App.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { fetchContactsApi } from '../../redux/contacts/reducerContactSlice';
// import { RegistrForm } from '../RegistrForm/RegistrForm';
// import { LoginForm } from '../LoginForm/LoginForm';
import { Route, Routes } from 'react-router-dom';
// import ContactPage from '../../Pages/ContactPage';
// import LoginFormPage from '../../Pages/LoginFormPage';
// import RegistrFormPage from '../../Pages/RegistrFormPage';
// import HomePage from '../../Pages/Home.page';
import { Layout } from '../Layouyt/Layout';
import { lazy } from "react";
import { refreshUser } from '../../redux/auth/operations';
import { useAuth } from 'hooks/useAuth';


const HomePage = lazy(() => import('../../pages/Home.page'));
const ContactPage = lazy(() => import('../../pages/ContactPage'));
const RegistrFormPage = lazy(() => import('../../pages/RegistrFormPage'));
const LoginFormPage = lazy(() => import('../../pages/LoginFormPage'));


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

          <Route path='/' element={<Layout />} ><Route path='/' element={<HomePage />} />
            <Route index element={<HomePage />} />
            <Route path='contacts' element={<ContactPage />} />
            <Route path='register' element={<RegistrFormPage />} />
            <Route path='login' element={<LoginFormPage />} /></Route>

        </Routes >
      </Conteiner>

    // </>
  )

}
















