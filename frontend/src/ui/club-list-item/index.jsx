import React from 'react';

export default function ClubListItem({ title, member }) {
  return (
    <div className='p-2 hover:bg-gray-100 shadow transition-all duration-500'>
      <div className='flex items-center'>
        <h2 className='flex flex-1 mr-1 cursor-pointer'>{title}</h2>
        <span className='cursor-pointer'>
          <i className='fa fa-caret-down'></i>
        </span>
      </div>
      <div className='flex flex-col'>
        <p className='flex-1 mr-1'>{`${member} members`}</p>
        <span className='shadow-md bg-green-400 hover:bg-green-600 text-white py-1 px-3 cursor-pointer mb-2 self-end rounded-md transition-all duration-500'>
          Invite
        </span>
      </div>
    </div>
  );
}
