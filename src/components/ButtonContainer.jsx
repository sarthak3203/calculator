import styles from './ButtonContainer.module.css'
function ButtonContainer({ onButtonClicked }) {

  const buttonName = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']
  return (
    <div className={styles.buttonContainer}>
      {buttonName.map((buttonName) =>
        <button className={styles.button} onClick={() => onButtonClicked(buttonName)}/*passes buttonName to onButtonClicked when a button is clicked and onButtonClicked in APP.jsx takes buttonName in buttonText and uses it, ARROW FUNC inside child mostly used to pass any data from child to parent*/ >{buttonName}</button>)}
    </div>
  );

}
export default ButtonContainer;