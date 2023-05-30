import React from 'react';
import { useSelector } from 'react-redux';

const Page3 = () => {
  const { name, age } = useSelector((state) => state);

  return (
    <div>
      {name && age && (
        <>
          <h2>Your name {name} aged {age} has been added to the student system. You may now exit.</h2>
         
        </>
      )}
    </div>
  );
};

export default Page3;
