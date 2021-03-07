import React from 'react';

export default function MessageForm() {
  return (
    <div className='absolute bottom-0 left-0 py-2 px-4  w-full'>
      <form className='flex rounded-2xl bg-gray-100 w-full overflow-hidden'>
        <input
          className='p-3 bg-gray-100 text-gray-700 outline-none'
          type='text'
          name='message'
          id='message'
          placeholder='Type your message...'
          style={{ width: '95%' }}
        />
        {/* <div className=""> */}
        <button
          className='bg-blue-400 text-white py-3 px-5 h-full text-center px-3 outline-none cursor-pointer'
          type='submit'
          style={{ outline: 'none' }}
        >
          <i className='fa fa-paper-plane'></i>
        </button>
        {/* </div> */}
      </form>
    </div>
  );
}
