import { useEffect, useState } from "react";
import UserDisplay from './userDisplay'
import Greeting from "./greeting";
import CallToAction from "./callToAction";

// Prop is passed as an argument to the function component
const Container1 = () => {

  //Propiedades
  const [userName, setName] = useState<string>('Waiting for user Input'); // useState works as a getter/setter for state handling (principle of inmutability)
  const [userLastName, setLastName] = useState<string>('Waiting for user Input');
   // Life cycle hooks --> explicar concepto
  // On Mount ( Initialization )
    useEffect(() => {
      console.log('i am being created') // will execute when the component gets initialized
      return () => {  //Cleanup function used to execute side effects when the component is going to get destroyed
          console.log("i am about to get destroyed")
      }

    },[]);// <- empty array makes sure that this will execute on Mount and on Unmount

    // template 
  return (
    <div className="flex flex-col items-center gap-5 bg-gray-300 p-8 rounded w-[400px] h-[620px]">
      <h1 className="text-[24px]">Prop Drilling / Custom Hooks</h1>
      <Greeting name={userName} lastName={userLastName}></Greeting>
      <UserDisplay name={userName} lastName={userLastName} key={2}/>
      <CallToAction
        setLastName={setLastName}
        setName={setName}
        name={userName}
        lastName={userName}
      />
     
    </div>

  );
};

export default Container1;
