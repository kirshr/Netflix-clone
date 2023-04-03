import React, { FC } from 'react'
import logo from "/NetflixLogo.webp"
import './header.scss'
import {useNavigate} from 'react-router-dom'
interface headerProps {
  loginOrSignup: boolean;
}

const Header: FC<headerProps> = ({loginOrSignup}) => {
    const navigate = useNavigate();
  return (
    <div className='header'>
          <div className="logo">
              <img src={logo} alt="Netflix Logo" />
          </div>
          <button onClick={() => navigate(loginOrSignup ? "/login" : "/signup")}>
              {loginOrSignup ? "Log in" : "Sign up"}
          </button>
    </div>
  )
}

export default Header;