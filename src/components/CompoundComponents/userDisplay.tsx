import { useContext } from 'react';
import UserTag2 from './userTag';
import CallToAction from './callToAction';
import DisplayContext from '../../context/displayContext';
import Greeting from './greeting';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from './dropDown';

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
        <Dropdown>
            <DropdownToggle className='text-blue p-2 rounded bg-white'>* * *</DropdownToggle>
            <DropdownMenu className='text-blue p-2 rounded bg-white'>
                <DropdownItem>Item 1</DropdownItem>
                <DropdownItem onClick={() => alert(`${ name + ' was clicked'}`)}>{name}</DropdownItem>
                <DropdownItem>Item 3</DropdownItem>
            </DropdownMenu>
        </Dropdown>
      </div>
      
      <CallToAction />
    </>
  );
};

export default UserDisplay;