import React from 'react'
import Image from 'next/image'


interface Size {
  width: number,
   height: number,
   className?: string,
}

const MyImage = ({width, height, className} : Size) => {
  return (
    <div>
       <Image src='/images/cv-img.jpg' 
            alt="myPhoto"
            width={width}
            height={height}
            className={className}
            />
            
    </div>
  )
}

export default MyImage