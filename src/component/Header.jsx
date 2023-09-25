import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
const Header = (props) => {
  const navigate=useNavigate();
  return (
    <HeaderContainer>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <button onClick={()=>navigate(props.login?"/login":"/signup")}>{props.login?"Log In":"Sign In"}</button>
    </HeaderContainer>
  )
}
const HeaderContainer=styled.div`
  display:flex;
  justify-content:space-between;
  align-item:center;
  padding:0.5rem 4rem;
  .logo{
    img{
      height:3rem;
      cursor:pointer;
    }
  }
  button{
    width:100px;
    background-color:red;
    border:none;
    cursor:poiner;
    color:white;
    height:40px;
    border-radius:5px;
    font-size:1.2rem;
  }

`
export default Header