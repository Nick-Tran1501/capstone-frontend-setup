import React from 'react';
import NavBar from './layout/NavigationBar/NavBar';
import FootballModel from './assets/images/Football.png';
import ImageComponent from './components/ImageComponent';
const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
        <ImageComponent
          key={'Football.png'}
          src={FootballModel}
          alt="Football Model"
          width={500}
          height={500}
        />
    </React.Fragment>
  );
};

export default Home;
