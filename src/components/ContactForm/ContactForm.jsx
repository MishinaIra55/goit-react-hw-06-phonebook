import styles from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import {addContact} from '../../redux/contacts/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    // console.log(event.currentTarget.elements.name.value)
    // console.log(event.currentTarget.elements.number.value)
    dispatch(addContact(form.elements.number.value))
    dispatch(addContact(form.elements.name.value));
    form.reset();
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>

        <label>
          Name
          <input

            className={styles.input}
            type='text'
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required


          />
        </label>

        <label>
          Number
          <input

            className={styles.input}
            type='tel'
            name='number'
            pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
            title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            required

          />
        </label>

        <button type='submit'>Add contact</button>
      </form>
    </>
  )
}
