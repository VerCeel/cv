import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation';

const MyImage = ({className} : {className?: string}) => {
  const params = usePathname();
  return (
    <div>{
      params === "/en" ? 
      <Image src='/images/cv-img.jpg' 
            alt="myPhoto"
            width={693}
            height={693}
            className={className}
            /> :
            <Image src='/images/cv-img-fr.jpg' 
            alt="myPhoto"
            width={693}
            height={693}
            className={className}
            />
      }
       
            
    </div>
  )
}

export default MyImage