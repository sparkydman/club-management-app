import React from 'react';

export default function TextField({
  id,
  label,
  type = 'text',
  name,
  placeholder = '',
  error = '',
  ...rest
}) {
  return (
    <div className='w-full p-3'>
      <label className='block mb-2' htmlFor={id}>
        {label}
      </label>
      <input
        className={`block py-3 px-1 border border-solid rounded-md outline-none w-full ${
          error ? 'border-red-400' : 'border-blue-900'
        }`}
        type={type}
        name={name}
        placeholder={placeholder}
        {...rest}
        id={id}
      />
      {error && <span className='pt-1 text-red-400 text-sm'>{error}</span>}
    </div>
  );
}
