import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './pages/components/Footer'
import Navbar from './pages/components/Navbar'
import Slider from './pages/components/Slider'

const Name= styled.h1`
    
`
const Email= styled.h1`
    
`
const Roll= styled.h1`
    
`
const Container =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
`


const Chat = () =>{
    return (
        <>
        <Navbar />
        <Slider />
        <Container>
            
            
            <Name>Name of the Person</Name>

            <Email>Notifications</Email>

            <Roll>roll number</Roll>

        </Container>
        <Footer />
        
        </>
        
        

    )
}

export default Chat;