import React from 'react';
import format from 'date-fns/format';

export default function MemberListItem({ firstname, lastname, date }) {
  return (
    <div className='flex flex-col p-3 shadow hover:bg-gray-100'>
      <h2 className='text-gray-600 font-bold cursor-pointer'>{`${firstname} ${lastname}`}</h2>
      <span className='italic'>{`Joined ${format(
        new Date(date),
        'dd MMM, yyyy'
      )}`}</span>
      <span className='shadow bg-red-400 hover:bg-red-600 text-white cursor-pointer self-end mt-2'>
        Remove
      </span>
    </div>
  );
}
