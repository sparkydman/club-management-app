import React from 'react';
import Button from '../../ui/button';
import TextField from '../../ui/text-field';
import { Link } from 'react-router-dom';

export default function Loginform() {
  return (
    <div className='shadow-md rounded-md bg-white w-4/5 lg:w-1/2 p-4'>
      <h1 className='py-2 font-bold text-xl block text-center'>Login</h1>
      <form>
        <TextField
          id='login-email'
          name='email'
          placeholder='Enter email'
          label='Email'
          type='email'
        />
        <TextField
          id='login-password'
          name='password'
          placeholder='Enter password'
          label='Password'
          type='password'
        />
        <Button value='Login' />
        <p className='pt-1 pb-4 block text-right w-full'>
          Don't have an account yet?
          <Link to='/register'>
            <span className='cursor-pointer hover:underline text-blue-400 pl-2'>
              Register
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
}
