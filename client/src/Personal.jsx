import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './pages/components/Footer'
import Navbar from './pages/components/Navbar'
import Slider from './pages/components/Slider'
import { popular } from './posts/data.js'
import Post from './posts/Post'
import axios from 'axios';
import UserStore from './store/UserStore';

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
    const [user, setUser] = useState({name: 'loading..', mail: 'loading..', roll: 'loading..'});
    useEffect(() => {
        if (UserStore.isLoggedIn){
            axios.get('http://localhost:5000/user/get?token=' + UserStore.token).then((res) => {
                setUser(res.data);
            });
        }
    }, []);
    return (
        <>
        <Navbar />
        <Slider />
        <Container>
            
            
            <Name>{user.name}</Name>

            <Email>{user.mail}</Email>

            <Roll>{user.roll}</Roll>

            




            

        </Container>
        <Footer />
        
        </>
        
        

    );
};

export default Personal;