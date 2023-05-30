import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setName, setAge } from '../redux/actions';

const Chatbot = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);

  const handleUserInput = (e) => {
    const value = e.target.value;
    if (step === 0) {
      setName(value);
    } else if (step === 1) {
      setAge(value);
    }
  };

  const handleNextStep = () => {
    if (step === 0) {
      // Dispatch action to set the name
      dispatch(setName(name));
      setStep(1);
    } else if (step === 1) {
      // Dispatch action to set the age
      dispatch(setAge(age));
      setStep(2);
    }
  };

  return (
    <div>
      {step === 0 && (
        <>
          <p>Bot: Hello, Welcome to the student info system!</p>
          <p>User: Got it!</p>
          <p>Bot: Enter your Name</p>
          <input type="text" value={name} onChange={handleUserInput} />
        </>
      )}
      {step === 1 && (
        <>
          <p>Bot: Enter your Age</p>
          <input type="text" value={age} onChange={handleUserInput} />
        </>
      )}
      {step === 2 && (
        <>
          <p>Bot: Thank you. In 5 seconds, bot will exit</p>
          <p>Countdown: {5 - step}</p>
        </>
      )}
      {step === 2 && (
        setTimeout(() => {
          setStep(3);
        }, 5000)
      )}
    </div>
  );
};

export default Chatbot;
