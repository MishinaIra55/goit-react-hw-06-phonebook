import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList =()=> {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state);

  // getfilteredlist = () => {
  //
  //   if (filter === ''){
  // return contacts;
// } else {
//   const normalizeFilter = filter.toLowerCase();
//   return contacts.filter(sdfsdfsdf);
// }
 // }

  return (

  <ul >

    {getfilteredlist().map(item  => (

      <ContactItem key={item.id} contact={item}/>

    ))}

  </ul>
)
}
