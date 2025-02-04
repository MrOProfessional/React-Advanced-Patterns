import { useEffect } from "react";
import UserDisplay from './userDisplay'
import DisplayProvider from "../../context/displayProvider";


// Prop is passed as an argument to the function component
const Container2 = () => {

  // On Mount ( Initialization )
  useEffect(() => {
    console.log('i am being created') // will execute when the component gets initialized
    return () => {  //Cleanup function used to execute side effects when the component is going to get destroyed
      console.log("i am about to get destroyed")
    }

  }, []);// <- empty array makes sure that this will execute on Mount and on Unmount

  return (
    <>
    <div className="flex flex-col items-center gap-5 bg-blue-300 p-8 rounded w-[400px] h-[620px]">
      <h1 className="text-[24px]">High Order Components</h1>
      <DisplayProvider>
        <UserDisplay key={2} />
      </DisplayProvider>
    </div>
    </>
  );
};

export default Container2;
