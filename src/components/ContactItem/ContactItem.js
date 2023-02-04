import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsSlice';

export const ContactItem = ( { contact: { id, name, number } } ) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id))
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button type='button' onClick={handleDelete}>Delete</button>
    </li>
  )
}