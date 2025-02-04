import { createContext } from "react";

interface DisplayContextType {
  name: string;
  lastName: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
}

const DisplayContext = createContext<DisplayContextType>({ 
  name: 'User', 
  lastName: 'Lastname', 
  setName: () => {}, 
  setLastName: () => {} 
});

export default DisplayContext;