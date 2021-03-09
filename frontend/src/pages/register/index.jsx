import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import Registerform from '../../features/register-form';

export default function Register() {
  const me = useSelector((state) => state.me);
  const { user } = me;
  const history = useHistory();

  useEffect(() => {
    if (user) {
      history.replace('/');
    }
  });
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <Registerform />
    </div>
  );
}
