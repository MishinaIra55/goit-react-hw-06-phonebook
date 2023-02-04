import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList =()=> {
 const contacts = useSelector(state => state.contacts.contacts);

  return (

  <ul >

    {contacts.map(item  => (

      <ContactItem key={item.id} contact={item}/>

    ))}

  </ul>
)
}
