import React from 'react';
import { formatDistanceToNowStrict, parseISO } from 'date-fns';

export default function MessageListItem({ firstname, lastname, date, text }) {
  return (
    <div className='flex flex-col p-3 bg-gray-50 rounded-xl my-3 mx-auto w-11/12'>
      <div className='flex items-center'>
        <h2 className='mr-3 text-gray-600 font-bold cursor-pointer flex-1'>{`${firstname} ${lastname}`}</h2>
        <span className='italic text-xs self-end'>
          {formatDistanceToNowStrict(parseISO(date))}
        </span>
      </div>
      <p className='p-2 text-sm'>{text}</p>
    </div>
  );
}
