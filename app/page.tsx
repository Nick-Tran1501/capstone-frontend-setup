import React from 'react';
import NavBar from './components/NavBar';
import FootballModel from './assets/images/Football.png';
import ImageComponent from './components/common/ImageComponent';
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
