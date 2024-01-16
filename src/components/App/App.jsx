
// import { ContactForm } from '../ContactForm/ContactForm';
// import { FilterName } from '../Filter/Filter';
// import { ContactList } from '../ContactList/ContactList';
import { Conteiner } from './App.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContactsApi } from 'store/reducerContactSlice';
// import { RegistrForm } from '../RegistrForm/RegistrForm';
// import { LoginForm } from '../LoginForm/LoginForm';
import { NavLink, Route, Routes } from 'react-router-dom';
import ContactPage from '../../Pages/ContactPage';
import LoginFormPage from '../../Pages/LoginFormPage';
import RegistrFormPage from '../../Pages/RegistrFormPage';
import HomePage from '../../Pages/Home.page';





export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContactsApi());
   
  })
 


  return (
    <>
      <Conteiner>
        <header>
          <naw>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/contacts'>Contacts</NavLink>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/login'>Log In</NavLink>
          </naw>
        </header>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contacts' element={<ContactPage />} />
          <Route path='/register' element={<RegistrFormPage/>} />
          <Route path='/login' element={<LoginFormPage/>} />
          
        </Routes>
        {/* <RegistrForm /> */}
        {/* <LoginForm/> */}
        {/* <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <FilterName />
        <ContactList /> */}
      </Conteiner>
    </>
  )

}
















