import React from 'react'

type Props = {
  colSpan?: number;
  rowSpan?: number;
  bgColor?: string;
  children: React.ReactNode;
  colStart?: number;
  colEnd?: number;
}

const Container = ( { colSpan, rowSpan, bgColor='bg-gray-300', children, colStart, colEnd } : Props) => {
  let containerClass = `p-4 ${bgColor} rounded-md`

  if (colSpan) {
    containerClass += ` col-span-${colSpan}` 
  }

  if (rowSpan) {
    containerClass += ` row-span-${rowSpan}`
  }

  if (colStart) {
    containerClass += ` col-start-${colStart}`
  }

  if (colEnd) {
    containerClass += ` col-end-${colEnd}` 
  }

  return ( 
    <div className={containerClass}>
      {children}
    </div>
  );
}

export default Container