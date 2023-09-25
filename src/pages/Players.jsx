import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import videos from '../images/videoplayback.mp4'
const Players = () => {
  const navigate = useNavigate()


  return (
    <PlayContainer>
      <div className="play">
        <div className="backArrow">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video controls width="1300" height="550">
          <source src={videos} type='video/mp4' />
        </video>
      </div>
    </PlayContainer>
  )
}

const PlayContainer = styled.div`
.play{
width:100%
height:100vh;
.backArrow{
  position:absolute;
  padding:2rem;
  z-index:1;
  svg{
    font-size:3rem;
    cursor:pointer;
    color:black;
  }
}
}
`;
export default Players