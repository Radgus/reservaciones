import React from 'react';
import Header from './components/Header';
import Restaurants from './components/Restaurants';
import Filters from './components/Filters';
import Sections from './components/Sections';


const Home = () => {

  const ventana = [1,2,3,4,5];
  const pasillo = [6,7,8,9,10,11,12];
  const jardin = [13,14,15];
  
  return (
    <>
      <Header />
      <Restaurants />
      <Filters />
      <Sections section='Ventana' mesas={ventana}/>
      <Sections section='Pasillo' mesas={pasillo}/>
      <Sections section='Jardin' mesas={jardin}/>
    </>
  )
}

export default Home;
