import {ContactForm} from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContatctList';


export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <ContactList />
    </>
  );
};
