import { useContext } from "react";
import DisplayContext from "../../context/displayContext";

const CallToAction = () => {
    const { setName, setLastName } = useContext(DisplayContext);

    return (
        <>
            <button onClick={() => { setName('Pedro'); setLastName('Aguilar') }} className="shadow-lg p-4 bg-white hover:bg-amber-300 text-center  rounded cursor-pointer font-semibold">Change Name to Pedro</button>
            <button onClick={() => { setName('Carlos'); setLastName('Romero') }} className="shadow-lg p-4 bg-white hover:bg-amber-300 text-center  rounded cursor-pointer font-semibold">Change Name to Carlos</button>    </>
    )

}

export default CallToAction;