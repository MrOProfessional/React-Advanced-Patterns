// displayProvider.js
import React, { useState } from "react";
import DisplayContext from './displayContext'; 

const DisplayProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [name, setName] = useState<string>("Waiting for user Input");
  const [lastName, setLastName] = useState<string>("Waiting for user Input");

  return (
    <DisplayContext.Provider value={{ name, lastName, setName, setLastName }}>
      {children}
    </DisplayContext.Provider>
  );
};

export default DisplayProvider;