
type PropsType = {
name:string
}
const UserTag = ({name} :PropsType) => {
    return (
        <>
            <span className="bg-blue-300 py-2 px-3 rounded justify-self-end">Tag for : {name}</span>
        </>
    )
}

export default UserTag;