import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './post.css'
const Container= styled.div`   
    padding: 20px;
    margin: 10px;
    min-width: 300px;
    height: 280px;
    border: 3px solid black;
    border-radius: 20px;
    cursor: pointer;
    
` 


const Info=styled.div`
    align-items: right;
    justify-content: center;
    font-weight:500;
    text-align: center;
`
const Price= styled.div`
    align-items: center;
    justify-content: center;
    text-align: center;
`

const Post = ({item}) => {
  return (
    <Link to={"/product/:" + item._id}><Container>
        <img src={item.image} className='work' alt='' />
            <Info>
                {item.name}
            </Info>
            <Price>
                Price in Rupee {item.price}
            </Price>
        

    </Container></Link>
  )
}

export default Post