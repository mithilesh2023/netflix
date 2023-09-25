import React from 'react'

import {firebaseAuth} from '../utils/firebase-config'
import { onAuthStateChanged,signOut } from 'firebase/auth'
import {Link,useNavigate} from 'react-router-dom'

import {LuLogOut} from 'react-icons/lu'
import styled from 'styled-components'
import logo from '../images/logo.png'

const TopNav = ({isScrolled}) => {
    const navlinks=[
        {name:"Home",link:'/'},
        {name:"Tv Show",link:'/tv'},
        {name:"My List",link:'/mylist'}, 
        {name:"Movies",link:'/movies'}
    ]
    const navigate=useNavigate()

    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        if(!currentUser) navigate('/login')
    })

  return (
    <NavContainer>
        <nav className={`${isScrolled?"scrolled":"notScroll"}`}>

        <div className="leftside">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul className='links'>
                {
                    navlinks.map(({name, link})=>{
                        return(
                            <li key={name}>
                                <Link to={link}>{name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        <div className="rightside">
            <button onClick={()=>signOut(firebaseAuth)}>
            <LuLogOut/>
            </button>
        </div>
        </nav>
    </NavContainer>
  )
}
const NavContainer=styled.div`
.notScroll{
    display:flex;
}
.scrolled{
    display:flex;
    background-color:black;
}
nav{
    position:sticky;
    top:0;
    height:4rem;
    width:100%;
    justify-content:space-between;
    position:fixed;
    z-index:2;
    padding:0.4rem;
    align-items:center;
    transition:0.3s ease-in-out;
    .leftside{
        display:flex;
        align-items:center;
        gap:2rem;
        margin-left:3.4rem;
    }
    .logo{
        display:flex;
        justify-content:center;
        align-items:center;
    }
    img{
        width:13rem;
        height:2rem;
    }
}
.links{
    display:flex;
    li{
        list-style:none;
        list-style-type:none;
       padding:13px;
        a{
            color:white;
            text-decoration:none;
            
        }
    }
}
.rightside{
   
   button{
    margin-right:10px;
    border-radius:50%;
    padding:5px;
    align-items:center;
    font-size:1.3rem;
    background-color:red;
    border:none;
    color:white;
    cursor:pointer;
   }
}

`
export default TopNav