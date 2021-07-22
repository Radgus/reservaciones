import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 15px 10px;
`;

const RestaurantCard = Styled.div`
  width: 28%;
  height: 100px;
  background-color: pink;
  border: 5px solid white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
  h4 {
    text-align: center;
    margin: 0;
  }
  &: hover {
    border: 5px solid red;
  }
`;

const Restaurants = () => {

  return(
    <Container>
      <RestaurantCard>
        <h4>Restaurante</h4>
        <h4>Norte</h4>
      </RestaurantCard>
      <RestaurantCard>
        <h4>Restaurante</h4>
        <h4>Centro</h4>
      </RestaurantCard>
      <RestaurantCard>
        <h4>Restaurante</h4>
        <h4>Sur</h4>
      </RestaurantCard>
    </Container>
  )
}

export default Restaurants;
