'use client'
import { Space } from 'antd'
import React from 'react'
import color from '../theme/color'

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <Space 
      style={{
        width:'100vw',
        height:'100vh',
        backgroundColor: color['blue-1'],
        display:'grid',
        placeItems:'center',
        margin:'auto',
      }}>
        <Space
          direction='vertical' 
          style={{
            width:"550px",
            backgroundColor:'red'
          }}
        >
wqer
        </Space>
    </Space>
  )
}

export default LoginPage