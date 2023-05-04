import React from 'react'

type Props = {
  children: React.ReactNode;
}

const Container = ( { children } : Props) => {

  return ( 
    <div className='text-sm text-green-100'>
      {children}
    </div>
  );
}

export default Container