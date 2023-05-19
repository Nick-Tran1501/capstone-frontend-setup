'use client'
import React from 'react';
import NavBar from './components/NavBar';
import FootballModel from './assets/images/Football.png';
import ImageComponent from './components/common/ImageComponent';
import PopUpNotification from './components/common/PopUpNotification';
import CustomButton from './components/common/Button';

type NotiType = "success" | "info" | "warning" | "error";

const Home = () => {
  const HandleNoti = (NotificationType:  NotiType, message: string, description : string) => {
    <PopUpNotification
      NotificationType={NotificationType}
      message={message}
      description={description}
    />
  }
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
      
      <CustomButton
        size= "large"
        onClickFunction={()=> {
          console.log('3');
        <PopUpNotification
          NotificationType={'success'}
          message={'Nhu Loz'}
          description={'Va'}
        />
        console.log('4');
      }
      }
      >Sucess</CustomButton>
    </React.Fragment>
  );
};

export default Home;
