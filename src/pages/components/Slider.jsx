import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container =styled.div`
    width: 100%;
    height: 2vh;
    display: flex;
    color: black;
    justify-content: right;
    padding: 10px 0;  
    cursor: pointer; 
    
`


const Slider = () => {
  return (
    <Container>
        <Link to="/login"><i class="fa-solid fa-arrow-up-left-from-circle">Logout</i></Link>
    </Container>
  )
}

export default Slider
