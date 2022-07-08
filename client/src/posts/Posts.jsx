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
    min-height: 400px;
       
`

const Heading= styled.p`
    text-align: center;
    font-size: 50px;
    
`
const H1 = styled.h1`
    
`

const Posts = (props) => {
  return (
    <>
    <Heading>Fresh Recommendations</Heading>
    <Container>
        {props.popular.length == 0 ? <H1> Nothing to show..</H1> : props.popular.map(item =>(
            <Post item={item} key={item._id}/> 
        ))}
    </Container>
    </>
  )
}

export default Posts