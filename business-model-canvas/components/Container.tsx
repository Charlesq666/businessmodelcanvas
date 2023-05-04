import React from 'react'

type Props = {
  children: React.ReactNode;
}

const Container = ( { children } : Props) => {

  return ( 
    <div className='text-sm text-black'>
      <div className='flex gap-1 items-center justify-between'>
        <input className='basic max-w-[80%]' type='text' placeholder='Enter text here' />
        <button className='basic'>+</button>
      </div>
    </div>
  );
}

export default Container