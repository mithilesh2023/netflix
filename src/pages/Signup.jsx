import React, { useState } from 'react'

import styled from 'styled-components'
import {firebaseAuth} from '../utils/firebase-config'
import { createUserWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth'

import Header from '../component/Header'
import { BackgroundImage } from '../component/BackgroundImage'
import {useNavigate } from 'react-router-dom'

const Signup = () => {
    const[showPassword,setShowPassword]=useState(false);
    const[formValues,setFormValues]=useState({email:"",password:""})

    const navigate=useNavigate();

const handleSignIn=async()=>{
    try{
        const {email,password}=formValues;
        await createUserWithEmailAndPassword(firebaseAuth,email,password)

    }
    catch(err){
        console.log(err)
    }

}

onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) navigate('/')
})
    return (
        <Container>
            <BackgroundImage />
            <div className="content">
                <Header login />
                <div className="body">
                    <div className="text">
                        <h1>Unlimited Movies, Tv shows and more</h1>
                        <h4>watch anywhere, Cancel Anytime</h4>
                        <h6>Ready to watch? Enter your email to create or restart membership</h6>
                    </div>
                    <div className="form">
                    {
                     showPassword ?(
                        <input type="password" placeholder='Password'name="password"  value={formValues.password} onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value})}/>
                        ):(
                            <input type="email" placeholder='Email' name="email" value={formValues.email}  onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value})} />
                       )}
                       {
                        !showPassword ?(
                            <button onClick={()=>setShowPassword(true)}>Get Started</button> 
                        ):( <button onClick={handleSignIn}>Sign Up</button>)
                       }
                       
                    </div>
                   
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
position:relative;
.content{
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.7);
    width:100%;
    height:100vh;
    grid-template-column:15vh 85vh;
    .body{
        text-align:center;
        color:white;
        font-size:25px;
        font-width:400;
        position:relative;
        top:12%;

    }
   .text{
    width:60%;
    margin:auto;
    h1{
        padding:10px;
    }
    h4{
        padding:5px;
    }
    h6{
        padding:10px;
    }
   }
   .form{
    width:60%;
    margin:auto;
    align-items:center;
    grid-template-column:${({showPassword})=>showPassword?"1fr 1fr":"2fr 1fr"};

    input{
        width:60%;
        font-size:16px;
        padding:15px;
        &:focus{
            outline:none;
        }
    }
           button{
            background-color:red;
            border:none;
            border-radius:5px;
            color:white;
            cursor:pointer;
            font-size:20px;
            padding:13px;
         }
    
   }
 
}
`
export default Signup