import React, { FC } from 'react'
import './login.scss'
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage'
import { useState } from 'react';
import Header from '../../components/header/Header'
import { firebaseAuth } from '../../utils/firebase-config';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from 'react-router-dom'
interface LoginProps {
  formValues?: [string, string]
}

const Login: FC<LoginProps> = ({ }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async() => { 
    // handle login
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password)
    } catch (err) {
      console.log(err);
    }
  }
  onAuthStateChanged(firebaseAuth, (currentUser) => { 
    if (currentUser) navigate('/')
  })

  return (
    <div className='Login'>
        <BackgroundImage />
      <Header loginOrSignup={true} />
      <form action="">
        <h2>Login</h2>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>      
  )
}

export default Login;