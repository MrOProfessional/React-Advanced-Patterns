import { useContext } from "react"
import DisplayContext from "../../context/displayContext"

const Greeting = () => {
    const { name, lastName } = useContext(DisplayContext);

    return (
        <>
            <h1>Hello, {name + ' ' + lastName}</h1>
        </>
    )
}


export default Greeting;