import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Registerform from '../../features/register-form';

export default function Register() {
  const me = useSelector((state) => state.me);
  const { user } = me;

  useEffect(() => {
    if (user) {
      <Redirect to='/login' />;
    }
  });
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <Registerform />
    </div>
  );
}
