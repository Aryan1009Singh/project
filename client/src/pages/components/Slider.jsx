import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container =styled.div`
    width: 100%;
    height: 2vh;
    display: flex;
    font-size: large;
    margin: 30px 0px;
    color: black;
    justify-content: space-evenly;
    padding: 10px 0;  
        
`


const Slider = () => {
  return (
    <Container>
        <Link to="/chat"><i class="fa-solid fa-arrow-up-left-from-circle">CHAT</i></Link>
        <Link to="/login"><i class="fa-solid fa-arrow-up-left-from-circle">Logout</i></Link>
    </Container>
  )
}

export default Slider
