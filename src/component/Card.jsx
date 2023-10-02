import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { IoPlayCircleSharp } from 'react-icons/io5'
import { AiOutlinePlus } from 'react-icons/ai'
import { RiThumbUpFill } from 'react-icons/ri'
import { RiThumbDownFill } from 'react-icons/ri'
import { BiChevronDown } from 'react-icons/bi'
import { BsCheck } from 'react-icons/bs'
import video from '../images/videoplayback.mp4'
import imgs from '../images/card.jpg'

export default React.memo(function Card({movieData}){
    const [onHoverd, setOnHovered] = useState(false)
    const navigate = useNavigate()
    return (
       
        <CardContainer 
        onMouseEnter={() => setOnHovered(true)}
        onMouseLeave={() => setOnHovered(false)}
        >
            <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt="poster" onClick={()=>navigate('/player')}/>
            {onHoverd && (
                <div className="hover">
                    <div className="image-video-wrapper">
                    <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt="poster" onClick={()=>navigate('/player')}/>
                    <video src={video} autoPlay controls loop/>
                    </div>
                    <div className="info-container">
                        <h3 className='movieName' onClick={()=>navigate('/player')}>{movieData.name}</h3>
                        <div className="icons">
                            <div className="controls">
                                <IoPlayCircleSharp
                                title='play'
                                onClick={()=>navigate('/player')}
                                />
                                <RiThumbUpFill title='like'/>
                                <RiThumbDownFill title='dislike'/>
                                <BsCheck title='Remove from List'/>
                                <AiOutlinePlus title='Add to my List'/>
                            </div>
                            <div className="info">
                                <BiChevronDown title='More Info'/>
                            </div>
                        </div>
                        <div className="genre">
                        <ul>
                            {movieData.genres.map((genres)=>{
                                <li>{genres}</li>
                            })}
                        </ul>
                        </div>
                    </div>
                </div>
                )
            }
          
        </CardContainer>
    )
})
const CardContainer = styled.div`
margin-top:1rem;
width:230px;
height:100%;
cursor:pointer;
position:relative;
// background-color:red;

img{
    border-radius:0.2rem;
    width:230px;
    height:230px;
    z-index:10;
}
.hover{
    z-index:99;
    height:max-content;
    width:20rem;
    position:absolute;
    top:-18vh;
    left:0;
    border-radius:0.2rem;
    border:0.1rem solid gray;
    background-color:#181818;
    transition:0.3s ease-in-out;
    .image-video-wrapper{
        position:relative;
        height:148px;
        img{
            width:100%;
            height:150px;
            border-radius:0.3rem;
            object-fit:cover;
            top:0;
            z-index:4;
            position:absolute;
        }
        video{
            width:100%;
            height:150px;
            object-fit:cover;
            border-radius:0.3rem;
            top:0;
            z-index:4;
            position:absolute;
        }
    }
    .info-container{
        display:flex;
        flex-direction:column;
        padding:1rem;
        gap:0.5rem;
        .movieName{
            color:white;
        }
    }
    .icons{
        display:flex;
        justify-content:space-between;
        .controls{
          display:flex;
          gap:0.5rem;
        }
    
    svg{
        color:white;
        border:0.1rem solid white;
        border-radius:50%;
        font-size:1.5rem;
        transition:0.3s ease-in-out;
    }&:hover{
        color:#b8b8b8;
    }
    }
    .genre{
        display:felx;
        color:white;
        ul{
            display:flex;
            gap:1rem;
            li{
                list-style:none;
                padding-right:0.7rem;
                &:first-of-type{
                    list-style-type:none;
                }
            }
        }
    }
}

`
