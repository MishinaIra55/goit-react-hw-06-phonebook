import styles from './ContactFilter.module.css';
import { useDispatch } from 'react-redux';

export const Filter = ( {value, onChange}) => (

// const dispatch = useDispatch();

  <label className={styles.filter__label}>
    Find contacts by name
    <input
      className={styles.filter__input}
      type='text'
      value={value}
      onChange={onChange}/>
  </label>
)
