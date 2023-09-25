import React from 'react'
import styled from 'styled-components'
import background from '../images/login.jpg'
export const BackgroundImage = () => {
  return (
    <Container>
        <img src={background} alt="background" />
    </Container>
  )
}
const Container=styled.div`
height:100vh;
width:100%;
img{
  height:100vh;
  width:100%;
}
`
