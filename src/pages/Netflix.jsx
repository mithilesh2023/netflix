import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import home from '../images/home.jpg'
import TopNav from '../component/TopNav'
import {AiOutlineInfoCircle} from 'react-icons/ai';
import {FaPlay} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Card from '../component/Card';
import {useDispatch, useSelector} from 'react-redux'
import {fetchMoives,getGeres } from '../store';
import SliderContainer from '../component/SliderContainer';

const Netflix = () => {
  const[isScrolled,setIsScrolled]=useState(false)

  const navigate=useNavigate()
  const dispatch=useDispatch()

  const movies=useSelector((state)=>state.netflix.movies)

  const generesLoaded=useSelector((state)=>state.netflix.generesLoaded);

  useEffect(()=>{
    dispatch(getGeres())
      },[])

  useEffect(()=>{
      if(generesLoaded){
        dispatch(fetchMoives({type:"all"}))
      }
  });

  window.onscroll=()=>{
    setIsScrolled(window.scrollY===0 ? false:true)
    return ()=>(window.onscroll=null)
  }
  // console.log(isScrolled)
  // console.log(movies)


  return (

    <HeroContainer>
      <TopNav isScrolled={isScrolled} />
      <div className="hero">
        <img className='backgroundImage' src={home} alt="" />
        <div className="container">
          <div className="title">
            <h1>Super man</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus doloremque dolorem dicta eum aliquid, dolor fuga officia iure eius maiores amet esse officiis. Eum dolor asperiores nostrum sunt deserunt quis!</p>
          </div>
          <div className="button">
            <button className='palyBtn' onClick={()=>navigate('/player')}>Play</button>
            <button className='more'>More</button>
          </div>
        </div>
        </div>
    <SliderContainer movies={movies}/>
    </HeroContainer>
  )
}

const HeroContainer=styled.div`
.hero{
img{
  width:100%;
  height:100vh;
}
.backgroundImage{
   filter:brightness(30%)

}
.container{
  position:absolute;
  bottom:1rem;
  .title{
    h1{
      margin-left:5rem;
      text-transform:uppercase;
      font-size:60px;
      color:white;
    }
    p{
      margin-bottom:50px;
      width:640px;
      margin-left:5rem;
      color:white;
    }
  }
  .button{
    display:flex;
    margin:5rem;
    gap:2rem;
  }
  .palyBtn,.more{
    display:flex;
    align-items:center;
    justify-content:center;
    color:red;
    border-radius:1rem;
    font-size:1.4rem;
    gap:1rem;
    padding:0.9rem;
    padding-left:2rem;
    padding-right:2rem;
    border:none;
    cursor:pointer;

  }
  .more{
  background-color:black;
  border:2px solid white;
  color:white;
  }
}
}
`;

export default Netflix