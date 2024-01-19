import { ContactForm } from '../components/ContactForm/ContactForm';
import { FilterName } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { fetchContactsApi } from '../redux/contacts/reducerContactSlice';
import { useEffect } from 'react';


export default function ContactPage() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchContactsApi());
         })

    return (
        <>
            
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <FilterName />
            <ContactList />
        </>
    )
}


