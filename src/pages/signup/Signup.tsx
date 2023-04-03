import React, { FC } from 'react'
import './signup.scss'
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage'
import { useState } from 'react';
import Header from '../../components/header/Header'
import { firebaseAuth } from '../../utils/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import {useNavigate} from 'react-router-dom'
interface SignupProps {
  formValues?: [string, string]
}

const Signup: FC<SignupProps> = ({ }) => {
  const navigate = useNavigate();
  const handleSigning = async() => { 
    // handle signing up
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password)
    } catch (err) {
      console.log(err);
    }
  }
  onAuthStateChanged(firebaseAuth, (currentUser) => { 
    if (currentUser) navigate('/')
  })
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({ email: "", password: '' });

  return (
    <div className='signup'>
        <BackgroundImage />
        <Header loginOrSignup={true}/>
          <div className='home-headings'>
            <h1>Unlimeted movies, TV shows and more!</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>Ready to watch? Sign up or Login</h6>
          </div>
          <div className="form">
          <input type="email" name='email' placeholder='Email' value={formValues.email} onChange={(e)=> setFormValues({ ...formValues, [e.target.name]: e.target.value })} />

        {showPassword && (
              <input type="password" name='password' placeholder='Password' value={formValues.password} onChange={(e)=> setFormValues({ ...formValues, [e.target.name]: e.target.value })}/>
        )}
        {!showPassword && (
              <button onClick={()=> setShowPassword(true)}>Get Started</button>
        )}         
          </div>
          <button className='home-login-btn' onClick={handleSigning}>Sign Up</button>
    </div>
  )
}

export default Signup;