import React from 'react'
import styled from 'styled-components'
import './post.css'
const Container= styled.div`   
    flex:1;
    margin: 10px;
    min-width: 280px;
    height: 280px;
    border: 3px solid black;
    border-radius: 20px;
` 

const Info=styled.div`
    align-items: center;
    justify-content: center;
`
const Price= styled.div`
    align-items: center;
    justify-content: center;
`

const Post = ({item}) => {
  return (
    <Container>
        <img src={item.img} className='work' alt='' />
            <Info>
                {item.name}
            </Info>
            <Price>
                Price in Rupee {item.price}
            </Price>
        

    </Container>
  )
}

export default Post