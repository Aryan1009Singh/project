import styled from 'styled-components'

const Container = styled.div`
    height: 65px;;
    background-color: #80e1ca;
    
`

const Wrapper = styled.div`
    padding : 10px 20px;
    display: flex;
    justify-content: space-between;
    
`
const Left = styled.div`
    flex:1;
    font-size: 50px;
    display: flex;
    cursor: pointer;
    margin-left: 70px;
    
`
const Center = styled.div`
    flex:2;
    display: flex;
    gap: 20px;

`
const Input =styled.input`
    width: 370px;   
    height: 25px;
    font-size: larger;
    border: none;
    background-color: #80e1ca ;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    font-size: 50px;
    cursor: pointer;
    gap: 100px;
`
const SearchContainer= styled.div`
    width: 400px;
    height: 30px;
    border: 2px solid lightyellow;
    align-items: center;
    border-radius: 10px;
    padding: 5px;  
    
`
const But= styled.button`
    width: 150px;
    border-radius: 10px;
    background-color: #ce9ac5e4;
    font-size: larger;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    cursor: pointer;
    
`


export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <i class="fa-solid fa-handshake"></i>                
                </Left>
                <Center>
                    <SearchContainer>                        
                        <Input />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </SearchContainer>
                    <But>Categories</But>
                </Center>
                <Right>
                    <i class="fa-brands fa-sellcast"></i>
                    <i class="fa-solid fa-user"></i>
                </Right>
            </Wrapper>
        </Container>
    )
}
