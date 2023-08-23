import React, { createContext, useState } from 'react';

const ExcerciseContext = createContext();


const ExcerciseContextProvider = ({ children }) => {
    const [excercise, setExcercise] = useState([]);
  
  
    return (
      <ExcerciseContext.Provider value={{ excercise, setExcercise }}>
        {children}
      </ExcerciseContext.Provider>
    );
  };
  
  export { ExcerciseContext, ExcerciseContextProvider };
  