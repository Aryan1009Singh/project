import axios from 'axios';
import React from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container =styled.div`
    width: 100%;
    height: 2vh;
    display: flex;
    font-size: large;
    margin: 30px 0px;
    color: black;
    justify-content: space-evenly;
    padding: 10px 0;    
`;

const LinkText = styled.span`
  &:hover{
    cursor: pointer;
  }
`;

const Slider = () => {
  const [cookies, setCookie] = useCookies(['token', 'loading', 'loggedIn']);

  const clickHandler = () => {
    setCookie('loading', true, {path: '/'});
    axios.get('http://localhost:5000/user/logout?token=' + cookies['token']).then(
      (res) => {
        setCookie('loading', 'false', {path: '/'});
        setCookie('loggedIn', 'false', {path: '/'});
        setCookie('token', '', {path: '/'});
      }
    );
  };

  return (
    <Container>
        <Link to="/chat"><i class="fa-solid fa-arrow-up-left-from-circle">CHAT</i></Link>
        <i class="fa-solid fa-arrow-up-left-from-circle" onClick={clickHandler}><LinkText>Logout</LinkText></i>
    </Container>
  )
}

export default Slider
