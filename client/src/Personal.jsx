import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './pages/components/Footer'
import Navbar from './pages/components/Navbar'
import Slider from './pages/components/Slider'
import { popular } from './posts/data.js'
import Post from './posts/Post'
import axios from 'axios';

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

const Personal = () =>{
    const [user, setUser] = useState("");
    useEffect(() => {
        setUser(axios.get('http://localhost:5000/user/get'));
    }, []);

    return (
        <>
        <Navbar />
        <Slider />
        <Container>
            
            
            <Name>{user}</Name>

            <Email>Email of the person</Email>

            <Roll>roll number</Roll>

            




            

        </Container>
        <Footer />
        
        </>
        
        

    )
}

export default Personal;