import React, { useState } from 'react'

import { signInWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase-config'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'


import Header from '../component/Header'
import { BackgroundImage } from '../component/BackgroundImage'


const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const navigate=useNavigate()

  const handleLogin=async()=>{
    try{
    await signInWithEmailAndPassword(firebaseAuth,email,password)
    }catch(err){
      console.log(err)
    }
  }

  onAuthStateChanged(firebaseAuth,(currentUser)=>{
      if(currentUser) navigate('/')
  })

  return (
    <Wrapper>
      <BackgroundImage/>
      <div className="LoginContent">
        <Header/>
        <div className="form-wrapper">
        <div className="form">
          <div className="title">
            <h1>login</h1>
          </div>
          <div className="container">
            <input type="email"
             placeholder='Email' 
             name="email"
             onChange={(e)=>setEmail(e.target.value)}
             value={email}
             />
            <input type="password"
             placeholder='Password'  
             name="password"
             onChange={(e)=>setPassword(e.target.value)}
             value={password} />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
        </div>
    </Wrapper>
  )
}
const Wrapper=styled.div`{
  position:relative;
}
.LoginContent{
  position:absolute;
  top:0;
  left:0;
  background-color:rgba(0,0,0,0.6);
  width:100%;
  height:100vh;
  grid-template-column:15vh 85vh;
}
.form-wrapper{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:2rem;
  height:85vh;
}

.form{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:2rem;
  background-color:#000000b0;
  height:70vg;
  padding:2rem;
  color:white;
  border-radius:0.4rem;
  
  .container{
    display:flex;
    flex-direction:column;
    gap:2rem;
    input{
      border-radius:0.4rem;
      padding:0.5rem 1rem;
      width:25rem;
      height:3.4rem;
    }
    button{
      padding:0.5rem;
      background-color:red;
      border:none;
      border-radius:0.4rem;
      height:3.4rem;
      color:white;
      font-size:1.05rem;
      font-weidth:bolder;
  }
}

`

export default Login