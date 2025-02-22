import styles from './App.module.css'
import Display from './components/Display';
import ButtonContainer from './components/ButtonContainer';
import { useState } from 'react';

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClicked = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal("")

    } else if (buttonText === '=') {
      const result = eval(calVal); //calculate the current string inside calval
      setCalVal(result);

    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }

  }

  return (
    <center>
      <div className={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonContainer onButtonClicked={onButtonClicked}></ButtonContainer>

      </div>
    </center>
  );
}

export default App
