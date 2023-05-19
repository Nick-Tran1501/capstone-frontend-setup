'use client'
import React, { ReactNode } from 'react'
import {notification} from 'antd';

type Props = {
  NotificationType: 'success' | 'info' | 'warning' | 'error';
  message?: ReactNode;
  description?: ReactNode;
};

const PopUpNotification: React.FC <Props> = ({NotificationType, message, description}) => {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = () => api[NotificationType]({
      message: message,
      description: description,
  }); 
  console.log('1')
  const callMessage = () => {
    console.log('????')
  } 
  return (
    <>
    {console.log('2')}
    {contextHolder}
    {/* {openNotificationWithIcon()} */}
    {api[NotificationType]({
      message: message,
      description: description,
    })}
    </>
    
    // <React.Fragment>
    //   {contextHolder}
    // </React.Fragment>
  ) 
  // const [api, contextHolder] = notification.useNotification();

  // const openNotificationWithIcon = (type: typeof NotificationType) => {
  //   api[type]({
  //     message: message,
  //     description:description,
  //   });
  // }
  // openNotificationWithIcon(NotificationType);
  // return (
  //   <React.Fragment>
  //     {contextHolder}
  //   </React.Fragment>
  //   )
}


export default PopUpNotification