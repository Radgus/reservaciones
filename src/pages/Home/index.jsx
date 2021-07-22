import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Restaurants from './components/Restaurants';
import Filters from './components/Filters';
import Sections from './components/Sections';

 

const Home = () => {
  const [restaurant, setRestaurant] = useState('norte');
  const [date, setDate] = useState('2021-07-22');
  const [hour, setHour] = useState('13:00');

  useEffect(() => {
    console.log('Se actualizó date o hour');
  }, [date, hour])

  const restaurants = {
    norte: {
      ventana: [1,2,3,4,5],
      pasillo: [6,7,8,9,10,11,12],
      jardin: [13,14,15],
    },
    centro: {
      ventana: [1,2,3,4,5,6,7],
      pasillo: [8,9,10,11],
      jardin: [12,13,14,15],
    },
    sur: {
      ventana: [10,11,12,13,14,15],
      pasillo: [4,5,6,7,8,9],
      jardin: [1,2,3],
    },
  }
  const handleRestaurant = (restaurant) => {
    setRestaurant(restaurant);
  }
  const handleDate = (e) => {
    console.log('e.target.value, Date: ', e.target.value)
    setDate(e.target.value);
  }
  const handleHour = (e) => {
    console.log('e.target.value, Hour: ', e.target.value)
    setHour(e.target.value);
  }
  
  return (
    <>
      <Header />
      <Restaurants onClick={(value)=>{handleRestaurant(value)}}/>
      <Filters 
        handleDate={handleDate} 
        valueDate={date}
        handleHour={handleHour}
      />
      <Sections 
        section='Ventana' 
        mesas={restaurants[restaurant] && restaurants[restaurant].ventana}
      />
      <Sections 
        section='Pasillo' 
        mesas={restaurants[restaurant] && restaurants[restaurant].pasillo}
      />
      <Sections 
        section='Jardin' 
        mesas={restaurants[restaurant] && restaurants[restaurant].jardin}
      />
    </>
  )
}

export default Home;
