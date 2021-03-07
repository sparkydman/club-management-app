import React from 'react';
import ClubHeader from '../../ui/club-header';
import ClubListItem from '../../ui/club-list-item';
import MessageListItem from '../../ui/message-list-item';
import MessageForm from '../../features/message-form';

export default function Home() {
  return (
    <div className='relative w-full h-full'>
      <div
        className='absolute max-w-screen-lg w-11/12 mx-auto my-auto shadow-lg rounded-md bg-white top-1/2 left-1/2 transform -translate-x-1/2 translate-y-8'
        style={{ height: '80vh' }}
      >
        <ClubHeader />
        <div className='flex' style={{ minHeight: 'calc(80vh - 56px)' }}>
          <aside
            className='min-h-full overflow-y-scroll shadow-md'
            style={{ width: '30%' }}
          >
            {clubs.map((club) => (
              <ClubListItem
                key={`club-list-item-key-${club.id}`}
                title={club.name}
                member={club.members.length}
              />
            ))}
          </aside>
          <main className='min-h-full overflow-y-scroll relative flex-1'>
            {messages.map((msg) => (
              <MessageListItem
                key={`club-msg-list-item-key-${msg.id}`}
                date={msg.createdAt}
                firstname={msg.commentBy.firstname}
                lastname={msg.commentBy.lastname}
                text={msg.text}
              />
            ))}
            <MessageForm />
          </main>
          {/* <aside>
                    
            </aside> */}
        </div>
      </div>
    </div>
  );
}

const clubs = [
  {
    id: 1,
    name: 'Club one',
    members: [
      {
        id: 1,
        firstname: 'John',
        lastname: 'Doe',
        email: 'Johndoe@gmail.com',
        createdAt: '2021-03-06T09:48:33.632Z',
      },
      {
        id: 2,
        firstname: 'Sarah',
        lastname: 'Jane',
        email: 'Sarah@gmail.com',
        createdAt: '2021-03-05T09:48:33.632Z',
      },
    ],
  },
  {
    id: 2,
    name: 'Club two',
    members: [
      {
        id: 1,
        firstname: 'Kenny',
        lastname: 'Green',
        email: 'Kenny@gmail.com',
        createdAt: '2021-03-07T09:48:33.632Z',
      },
      {
        id: 2,
        firstname: 'Kate',
        lastname: 'Juliet',
        email: 'Kate@gmail.com',
        createdAt: '2021-03-06T09:48:33.632Z',
      },
    ],
  },
];

const messages = [
  {
    id: 1,
    commentBy: {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
    },
    text: 'Hello club',
    createdAt: '2021-03-07T09:48:33.632Z',
  },
  {
    id: 1,
    commentBy: {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
    },
    text: 'Hi club',
    createdAt: '2021-03-07T09:50:33.632Z',
  },
];
