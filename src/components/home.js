import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setName } from '../redux/actions';
import Chatbot from './Chatbot'

const Page1 = () => {
  const dispatch = useDispatch();
  const [showChatbot, setShowChatbot] = useState(false);

  const handleEnrollNow = () => {
    // Dispatch action to set the name
    dispatch(setName(''));
    setShowChatbot(true);
  };

  return (
    <div>
      {showChatbot ? (
        <Chatbot />
      ) : (
        <>
          <h1>Enter into Student Info System</h1>
          <button onClick={handleEnrollNow}>Enroll Now!</button>
        </>
      )}
    </div>
  );
};

export default Page1;
