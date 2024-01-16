import { ContactForm } from '../components/ContactForm/ContactForm';
import { FilterName } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';

export default function ContactPage() {
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