import React from 'react';

export default function TextField({
  id,
  label,
  type = 'text',
  name,
  placeholder = '',
  ...rest
}) {
  return (
    <div className='w-full p-3'>
      <label className='block mb-2' htmlFor={id}>
        {label}
      </label>
      <input
        className='block py-3 px-1 border border-solid border-blue-900 rounded-md outline-none w-full'
        type={type}
        name={name}
        placeholder={placeholder}
        {...rest}
        id={id}
      />
    </div>
  );
}
