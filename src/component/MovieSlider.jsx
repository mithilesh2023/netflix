import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const MovieSlider = ({data,title}) => {
  return (
    <div>
        <div className="slider">
            {
                data.map((movie,index)=>{
                    return <Card movieData={movie} index={index} key={movie.id}/>
                })
            }
        </div>
    </div>
  )
}
const Container=styled.div`

`
export default MovieSlider