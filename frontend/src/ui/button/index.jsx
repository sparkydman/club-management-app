import React from 'react';

export default function Button({ type = 'button', value, ...rest }) {
  return (
    <button
      type={type}
      {...rest}
      className='block py-3 outline-none cursor-pointer text-white text-center bg-blue-900 my-4 w-4/5 mx-auto'
      style={{ outline: 'none' }}
    >
      {value}
    </button>
  );
}
