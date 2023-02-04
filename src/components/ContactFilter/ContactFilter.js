import styles from './ContactFilter.module.css';

export const Filter = ( {value, onChange}) => (
  <label className={styles.filter__label}>
    Find contacts by name
    <input
      className={styles.filter__input}
      type='text'
      value={value}
      onChange={onChange}/>
  </label>
)
