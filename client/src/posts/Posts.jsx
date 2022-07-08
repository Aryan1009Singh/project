import axios from 'axios'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Slider from '../pages/components/Slider.jsx'
//import { popular } from './data.js'
import Post from './Post'
import { useState } from 'react'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex:1;
    flex-wrap: wrap;
       
`

const Heading= styled.p`
    text-align: center;
    font-size: 50px;
    
`
const Posts = (props) => {
  return (
    <>
    <Heading>Fresh Recommendations</Heading>
    <Container>
        
        {props.popular.map(item =>(
            <Post item={item} key={item._id}/> 
        ))}
    </Container>
    </>
  )
}

export default Posts