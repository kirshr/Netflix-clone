import React, { FC } from 'react'
import "./BackgroundImage.scss"
interface BackgroundImageProps {
  
}

const BackgroundImage: FC<BackgroundImageProps> = ({  }) => {
  return (
    <div className='backgroundImg-container'>
     <img src="/login.webp" alt="login" className='login-background-img'/>
    </div>
  )
}

export default BackgroundImage;