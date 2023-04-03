import React, { FC } from 'react'
import "/home.webp"
interface NetflixBgProps {
  
}

const NetflixBg: FC<NetflixBgProps> = ({  }) => {
  return (
    <div className='backgroundImg-container'>
     <img src="/home.webp" alt="Home Background image" className='login-background-img'/>
    </div>
  )
}

export default NetflixBg;