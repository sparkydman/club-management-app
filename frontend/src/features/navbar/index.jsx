import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const me = useSelector((state) => state.me);
  const { user } = me;
  return (
    <div className='w-full bg-white shadow-md sticky top-0 left-0 z-index-50 text-blue-900'>
      <div className='w-11/12 mx-auto py-3 flex items-center'>
        <Link to='/'>
          <h1 className='font-bold text-lg'>Logo</h1>
        </Link>
        {user === null ? <RegularMenu /> : <AuthMenu />}
      </div>
    </div>
  );
}

const RegularMenu = () => {
  return (
    <ul className='flex flex-1 justify-self-end justify-end'>
      <li className='mx-2 curssor-pointer hover:underline'>
        <Link to='/login'>Login</Link>
      </li>
      <li className='mx-2 curssor-pointer hover:underline'>
        <Link to='/register'>Register</Link>
      </li>
    </ul>
  );
};
const AuthMenu = () => {
  return (
    <ul className='flex flex-1 justify-self-end justify-end'>
      <li className='mx-2 curssor-pointer hover:underline'>
        <Link to='/'>Home</Link>
      </li>
      <li className='mx-2 curssor-pointer hover:underline'>
        <Link to='/profile'>Profile</Link>
      </li>
      <li className='mx-2 curssor-pointer hover:underline'>
        <Link to='/logout'>Logout</Link>
      </li>
    </ul>
  );
};
