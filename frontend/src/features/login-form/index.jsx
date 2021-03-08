import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from '../../ui/button';
import TextField from '../../ui/text-field';
import { Link } from 'react-router-dom';
import login from '../../redux/actions/user/login';

const defaultValue = {
  email: '',
  password: '',
};

export default function Loginform() {
  const [value, setValue] = useState(defaultValue);

  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login);
  const { loading, error } = loginState;
  const me = useSelector((state) => state.me);
  const { user } = me;

  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(value));
  };
  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (user !== null) {
      history.replace('./');
    }
  }, [user, history]);

  return (
    <div className='shadow-md rounded-md bg-white w-4/5 lg:w-1/2 p-4'>
      <h1 className='py-2 font-bold text-xl block text-center'>Login</h1>
      <form onSubmit={onSubmit}>
        <TextField
          id='login-email'
          name='email'
          placeholder='Enter email'
          label='Email'
          value={value.email}
          onChange={onChange}
          error={error && error.message}
        />
        <TextField
          id='login-password'
          name='password'
          placeholder='Enter password'
          label='Password'
          type='password'
          value={value.password}
          onChange={onChange}
          error={error && error.message}
        />
        <Button
          type='submit'
          value='Login'
          disable={loading && loading ? true : false}
        />
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
