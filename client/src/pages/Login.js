import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


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

    const microsoft = () =>{
        window.open("http://localhost:5000/auth/microsoft", "_self")
    };

  return (
    <Container>
        <Wrapper>
            <Icon>
                <Link to="/"><i class="fa-solid fa-handshake"></i></Link>  
            </Icon>
             
            <Title onClick={microsoft}>Sign In With Outlook</Title>            
        </Wrapper>
    </Container>
  )
}

export default Login