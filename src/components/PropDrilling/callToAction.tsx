import { useUserChange } from "../../hooks/userChange";
import { Props } from "../../types/user";

const CallToAction = ({ setName, setLastName }: Props) => {
    const { isBottonPressed, toggleButtonPress } = useUserChange();

    return (
        <>
            <p>{isBottonPressed ? "Button was pressed!" : "No button press yet."}</p>
            <button
                onClick={() => {
                    setName("Elvis");
                    setLastName("Presley");
                    toggleButtonPress();
                }}
                className="shadow-lg p-4 bg-white hover:bg-blue-300 text-center  rounded cursor-pointer font-semibold shadow-lg"            >
                Change Name to Elvis
            </button>
            <button
                onClick={() => {
                    setName("Tony");
                    setLastName("Soprano");
                    toggleButtonPress();
                }}
                className="shadow-lg p-4 bg-white hover:bg-blue-300 text-center  rounded cursor-pointer font-semibold shadow-lg"            >
                Change Name to Tony
            </button>
        </>
    );
};

export default CallToAction;
