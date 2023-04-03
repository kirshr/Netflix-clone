import React, { FC } from 'react'
import "./Navbar.scss"
import logo from "/NetflixLogo.webp"
import { Link } from "react-router-dom";
import { firebaseAuth } from '../../utils/firebase-config';
import SearchIcon from '../icons/SearchIcon';
import { useState } from 'react'
import { signOut } from "firebase/auth";
import SignOutIcon from '../icons/SignOutIcon';
import { onAuthStateChanged} from 'firebase/auth';
import {useNavigate} from 'react-router-dom'

interface NavbarProps {
    isScrolled: boolean
}

const Navbar: FC<NavbarProps> = ({ isScrolled }) => {
    const links = [
        { name: 'Home', link: '/' },
        { name: 'TV Shows', link: '/tv' },
        { name: 'Movies', link: '/movies' },
        { name: 'My List', link: '/mylist' },
    ]
    const [showSearch, setShowSearch] = useState(false)
    const [inputHover, setInputHover] = useState(false)
    const navigate = useNavigate();


    onAuthStateChanged(firebaseAuth, (currentUser) => { 
        if (!currentUser) navigate('/login')
      })
  return (
      <nav className={`${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-left-side">
            <div className="nav-logo">
                <img src={logo} alt="Netflix Logo" />
            </div>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.link}>{link.name}</Link>
                    </li>
                ))}
            </ul> 
        </div>
        <div className="nav-right-side">
            <div className={`search ${showSearch ? "show-search" : ""}`}>
                <button
                    onFocus={() => setShowSearch(true)}
                    onBlur={() => {
                        if (!inputHover) {
                            setShowSearch(false)
                        }
                    }}
                >
                    <SearchIcon />
                  </button>
                  <input type="text" placeholder='Search' onMouseEnter={() => setInputHover(true)}
                      onMouseLeave={() => setInputHover(false)}
                      onBlur={() => {
                          setShowSearch(false);
                          setInputHover(false);
                      }}
                  />
              </div>
              <button onClick={()=> signOut(firebaseAuth)}>
                  <SignOutIcon/>
              </button>
        </div>
              
    </nav>
  )
}

export default Navbar;