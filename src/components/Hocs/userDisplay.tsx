import { useContext } from 'react';
import UserTag2 from './userTag';
import CallToAction from './callToAction';
import DisplayContext from '../../context/displayContext';
import Greeting from './greeting';
import withLoading from './loading';

const UserDisplay = () => {
  const { name, lastName } = useContext(DisplayContext);
  const CallToActionWithLoading = withLoading(CallToAction);
  const GreetingWithLoading = withLoading(Greeting)

  return (
    <>
      <GreetingWithLoading />
      <div className="flex flex-col rounded p-3 gap-2 bg-stone-700 h-[300px] w-[300px] text-align center items-center">
        <h1 className="font-bold">Profile</h1>
        <p className="text-white font-semibold">Name: {name}</p>
        <p className="text-white font-semibold">Last Name: {lastName}</p>
        <UserTag2 />
      </div>
      <CallToActionWithLoading />
    </>
  );
};

export default UserDisplay;