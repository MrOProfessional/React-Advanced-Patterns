import { useContext } from 'react';
import UserTag2 from './userTag';
import CallToAction from './callToAction';
import DisplayContext from '../../context/displayContext';
import Greeting from './greeting';

const UserDisplay = () => {
  const { name, lastName } = useContext(DisplayContext);

  return (
    <>
      <Greeting />
      <div className="flex flex-col rounded p-3 gap-2 bg-stone-700 h-[300px] w-[300px] text-align center items-center">
        <h1 className="font-bold">Profile</h1>
        <p className="text-white font-semibold">Name: {name}</p>
        <p className="text-white font-semibold">Last Name: {lastName}</p>
        <UserTag2 />
      </div>
      <CallToAction />
    </>
  );
};

export default UserDisplay;