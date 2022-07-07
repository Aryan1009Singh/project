import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import UserStore from '../store/UserStore'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #F79B26 0%, #F5A133 0.01%, rgba(157, 49, 163, 0.1) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding:20px;
    width: 25%;
    flex-direction: column;
    display: flex;
    
    justify-content: center;
    align-items: center;
`

const Title = styled.button`
    font-size: 20px;
    width: 50%;
    font-weight: 600;
    text-align: center;
    color:white;
    background-color: #0078d4;
    padding: 15px 20px;  
    border-radius:10px;
    border: none;
    cursor: pointer;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`

const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 10px 0;
    border: none;
    padding: 10px;
`

const Button = styled.button`
    width: 50%;
    border: none;
    padding: 15px 20px;    
    justify-content: center;
    background-color: teal;
    color:white;
    cursor: pointer;
`

const Icon = styled.div`
    display: flex;
    font-size: 120px ;
    text-align: center;
    
`

const Login = () => {
    const search = useLocation().search;
    const [cookies, setCookie] = useCookies(['loggedIn', 'token', 'loading']);

    useEffect(() => {
        const token = new URLSearchParams(search).get('token');
        if (token){
            setCookie('token', token, {path: '/'});
            setCookie('loading', 'true', {path: '/'});
            axios.get('http://localhost:5000/user/get?token=' + token).then((res) => {
                if (!res.data['error']){
                    console.log('logged in.');
                    setCookie('loggedIn', 'true', {path: '/'});
                }
                setCookie('loading', 'false', {path: '/'});
            });
        }
    }, []);

    const microsoft = () =>{
        window.open("http://localhost:5000/auth/microsoft", "_self");
    };

    return (
        //cookies['loggedIn'] ? <Navigate to = "/"></Navigate> :
        <Container>
            <Wrapper>
                <Icon>
                    <i class="fa-solid fa-handshake"></i>
                </Icon>
                
                <Title onClick={microsoft}>Sign In With Outlook</Title>            
            </Wrapper>
        </Container>
    );
}

export default Login