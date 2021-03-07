import React from 'react';

export default function ClubHeader({ title, member }) {
  return (
    <div className='w-full py-2 pl-4 pr-2 shadow flex items-center'>
      <div className='flex-1 flex flex-col'>
        <h2 className='font-bold pb-2'>{title}</h2>
        <p className='text-gray-600 text-sm'>{`${member} active members are in this club`}</p>
      </div>
      <span className='rounded-md px-4 py-2 cursor-pointer bg-gray-100 text-gray-800'>
        <i className='fa fa-bars'></i>
      </span>
    </div>
  );
}
