import { useContext } from "react";
import DisplayContext from "../../context/displayContext";

const UserTag2 = () => {
    const { name } = useContext(DisplayContext); 

    return (
        <>
            <span className="bg-blue-300 py-2 px-3 rounded justify-self-end">Tag for : {name}</span>
        </>
    )
}

export default UserTag2;