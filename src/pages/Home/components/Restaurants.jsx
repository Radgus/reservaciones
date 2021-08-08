import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1.5rem 1.0rem;
`;

const RestaurantCard = Styled.div`
  width: 30%;
  height: 7rem;
  background-color: pink;
  border: 0.5rem solid white;
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
  font-size: 1.6rem;
  h4 {
    text-align: center;
    margin: 0;
  }
  &: hover {
    border: 0.5rem solid red;
  }
`;

const Title = Styled.div`
  h2 {
    text-align: center;
    margin-top: 1rem;
  }
`;

const Restaurants = ({onClick}) => {

  return(
  <>
    <Title><h2>Restaurants</h2></Title>
    <Container>
      <RestaurantCard onClick={()=>onClick('norte')}>
        <h4>Norte</h4>
      </RestaurantCard>
      <RestaurantCard onClick={()=>onClick('centro')}>
        <h4>Centro</h4>
      </RestaurantCard>
      <RestaurantCard onClick={()=>onClick('sur')}>
        <h4>Sur</h4>
      </RestaurantCard>
    </Container>
  </>
  )
}

export default Restaurants;
