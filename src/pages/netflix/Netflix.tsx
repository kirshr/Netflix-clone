import React, { FC } from 'react'
import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NetflixBg from '../../components/BackgroundImage/NetflixBg'
import InfoIcon from '../../components/icons/InfoIcon'
import PlayIcon from '../../components/icons/PlayIcon'
import "./Netflix.scss"



interface NetflixProps {
  
}

const Netflix: FC<NetflixProps> = ({ }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  return (
    <section className='Netflix-home'>
      <Navbar isScrolled={isScrolled} />
      <div className="hero-container">
        <NetflixBg />
        <img src="/homeTitle.webp" alt="" />
        <div className="media-controls">
          <button className='play-btn'>
            <PlayIcon />
            Play
          </button>
          <button className='info-btn'>
            <InfoIcon />
            More Info
          </button>
        </div>
      </div>
    </section>
  )
}

export default Netflix;