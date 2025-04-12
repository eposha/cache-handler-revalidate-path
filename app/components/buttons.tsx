'use client';

import { pathRevalidate, unstableRevalidate } from './action';

const Buttons = () => {
  return (
    <div className='flex flex-col gap-4'>
      <button onClick={() => unstableRevalidate('test')}>
        Unstable revalidate
      </button>
      <button onClick={() => pathRevalidate('/')}>Path revalidate</button>
    </div>
  );
};

export default Buttons;

// get data {
//   kind: 'FETCH',
//   data: { headers: {}, body: '1744393751961', status: 200, url: '' },
//   revalidate: 31536000
// }

// {
//   value: {
//     kind: 'FETCH',
//     data: { headers: {}, body: '1744394022803', status: 200, url: '' },
//     revalidate: 31536000
//   },
//   lastModified: 1744394022804,
//   tags: [ 'test' ]
// }
