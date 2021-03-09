import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Loginform from '../../features/login-form';

export default function Login() {
  const me = useSelector((state) => state.me);
  const { user } = me;

  useEffect(() => {
    if (user) {
      <Redirect to='/login' />;
    }
  });
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <Loginform />
    </div>
  );
}
