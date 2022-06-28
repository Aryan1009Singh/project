import React from 'react'
import styled from 'styled-components'
const Container= styled.div`   
    flex:1;
    size: 100px;
` 
const Image=styled.image`
    width: 50;
    height: 50;
    z-index: 2;
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
        <Image src={item.imgUrl}>
            <Info>
                {item.name}
            </Info>
            <Price>
                Price is Rupee {item.price}
            </Price>
        </Image>

    </Container>
  )
}

export default Post