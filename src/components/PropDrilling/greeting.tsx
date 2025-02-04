type Props = {
    name: string,
    lastName: string
}
const Greeting = ({ name, lastName }: Props) => {
    return (
        <>
            <h1>Hello, {name + ' ' + lastName}</h1>
        </>
    )
}


export default Greeting;