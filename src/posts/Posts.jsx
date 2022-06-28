import React from 'react'
import styled from 'styled-components'
import { popular } from './data.js'
import Post from './Post'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex:1;
       
`
const Posts = () => {
  return (
    <Container>
        {popular.map(item =>(
            <Post item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Posts