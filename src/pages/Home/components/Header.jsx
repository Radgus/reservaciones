import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid black;
  h1 {
    text-align: center;
  }
`;

const Header = () => {

  return(
    <Container>
      <h1>Reservación de restaurantes</h1>
    </Container>
  )
}

export default Header;
