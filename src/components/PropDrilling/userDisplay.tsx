import UserTag from './userTag';


type PropsType = {
    name: string;
    lastName: string;
  };
  
  const UserDisplay = ({ name, lastName }: PropsType) => {
    return (
      <div className="flex flex-col rounded p-3 bg-stone-700 h-[300px] gap-2 w-[300px] text-align center items-center">
        <h1 className="font-bold">Profile</h1>
        <p className="text-white font-semibold">Name: {name}</p>
        <p className="text-white font-semibold">Last Name: {lastName}</p>
        <UserTag name={name}/>
      </div>
    );
  };
  
  export default UserDisplay;