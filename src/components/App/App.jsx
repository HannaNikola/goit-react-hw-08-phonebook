
// import { ContactForm } from '../ContactForm/ContactForm';
// import { FilterName } from '../Filter/Filter';
// import { ContactList } from '../ContactList/ContactList';
import { Conteiner } from './App.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContactsApi } from 'store/reducerContactSlice';
// import { RegistrForm } from '../RegistrForm/RegistrForm';
// import { LoginForm } from '../LoginForm/LoginForm';
import {  Route, Routes } from 'react-router-dom';
// import ContactPage from '../../Pages/ContactPage';
// import LoginFormPage from '../../Pages/LoginFormPage';
// import RegistrFormPage from '../../Pages/RegistrFormPage';
// import HomePage from '../../Pages/Home.page';
import { Layout } from '../Layouyt/Layout';
import { lazy } from "react";


const HomePage = lazy(() => import('../../Pages/Home.page'));
const ContactPage = lazy(() => import('../../Pages/ContactPage'));
const RegistrFormPage = lazy(() => import('../../Pages/RegistrFormPage'));
const LoginFormPage = lazy(() => import('../../Pages/LoginFormPage'));


export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContactsApi());
   
  })
 


  return (
    <>
      
      <Conteiner>
        <Routes>

          <Route path='/' element={<Layout />} ><Route path='/' element={<HomePage />} />
            <Route index element={<HomePage />} />
            <Route path='contacts' element={<ContactPage />} />
            <Route path='register' element={<RegistrFormPage />} />
            <Route path='login' element={<LoginFormPage />} /></Route>
          
    </Routes >
        </Conteiner>
     
    </>
  )

}
















