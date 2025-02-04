import { useContext } from "react";
import DisplayContext from "../../context/displayContext";
import { useUserChange } from "../../hooks/userChange";

const CallToAction = () => {
    const { setName, setLastName } = useContext(DisplayContext);
    const { isBottonPressed, toggleButtonPress } = useUserChange();

    return (
        <>
            <p>{isBottonPressed ? "Button was pressed!" : "No button press yet."}</p>

            <button onClick={() => {
                setName('Pedro');
                setLastName('Aguilar');
                toggleButtonPress();
            }} className="shadow-lg p-4 bg-white hover:bg-blue-300 text-center  rounded cursor-pointer font-semibold">Change Name to Pedro</button>
            <button onClick={() => {
                setName('Carlos');
                setLastName('Romero');
                toggleButtonPress();
            }} className="shadow-lg p-4 bg-white hover:bg-blue-300 text-center  rounded cursor-pointer font-semibold">Change Name to Carlos</button>    </>
    )

}

export default CallToAction;