import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from '../../ui/button';
import TextField from '../../ui/text-field';
import { Link } from 'react-router-dom';

import register from '../../redux/actions/user/register';
import { getErrorMsg } from '../../utils/get-err-msg';

const defaultValue = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
};

export default function Registerform() {
  const [value, setValue] = useState(defaultValue);

  const dispatch = useDispatch();
  const registerState = useSelector((state) => state.register);
  const { loading, error } = registerState;
  const me = useSelector((state) => state.me);
  const { user } = me;

  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register(value));
  };
  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (user !== null) {
      history.replace('/');
    }
  }, [user, history]);

  return (
    <div className='shadow-md rounded-md bg-white w-4/5 lg:w-1/2 p-4'>
      <h1 className='py-2 font-bold text-xl block text-center'>Register</h1>
      <form onSubmit={onSubmit}>
        <TextField
          id='register-firstname'
          name='firstname'
          placeholder='Enter firstname'
          label='First name'
          value={value.firstname}
          onChange={onChange}
          error={error && getErrorMsg(error.path, 'firstname', error.message)}
        />
        <TextField
          id='register-lastname'
          name='lastname'
          placeholder='Enter lastname'
          label='Last name'
          value={value.lastname}
          onChange={onChange}
          error={error && getErrorMsg(error.path, 'lastname', error.message)}
        />
        <TextField
          id='register-email'
          name='email'
          placeholder='Enter email'
          label='Email'
          value={value.email}
          onChange={onChange}
          error={error && getErrorMsg(error.path, 'email', error.message)}
        />
        <TextField
          id='register-password'
          name='password'
          placeholder='Enter password'
          label='Password'
          type='password'
          value={value.password}
          onChange={onChange}
          error={error && getErrorMsg(error.path, 'password', error.message)}
        />
        <Button
          disable={loading && loading ? true : false}
          type='submit'
          value='Register'
        />
        <p className='pt-1 pb-4 block text-right w-full'>
          Already have an account?
          <Link to='/login'>
            <span className='cursor-pointer hover:underline text-blue-400 pl-2'>
              Login
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
}
