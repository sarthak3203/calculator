import styles from './Display.module.css'
function Display({ displayValue }) {
  return (

    <input className={styles.inputDisplay} type="text" value={displayValue} readOnly />
  );


}
export default Display;