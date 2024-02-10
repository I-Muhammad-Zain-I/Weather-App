import React, { useState } from 'react'

const useInput = (validateValue) => {

  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched


  const valueChangeHandler = (value) => {
    setEnteredValue(value);
  }
  const inputBlurHandler = () => {
    setIsTouched(true);
  }

  return ({
    value: enteredValue,
    valueIsValid,
    hasError,
    isTouched,
    valueChangeHandler,
    inputBlurHandler,
  });
}

export default useInput