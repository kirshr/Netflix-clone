import React, { FC } from 'react'
import "./Player.scss"

import { useNavigate } from "react-router-dom";





interface PlayerProps {
  
}

const Player: FC<PlayerProps> = ({  }) => {
  return (
    <div className='player'>
        <video src="" autoPlay loop controls muted/>
    </div>
  )
}

export default Player;