'use client';
import React from 'react';
import { Layout } from 'antd';
import { blue } from '@ant-design/colors';
import CustomButton from './common/Button';

type Props = {};
const { Header } = Layout;
const NavBar: React.FC = (props: Props) => {
  const buttonClicked = () => {
    console.log('Button Clicked');
  };
  return (
    <Layout>
      <Header
        style={{
          backgroundColor: blue[10],
          color: blue[1],
        }}
      >
        <CustomButton
          type="primary"
          size="large"
          onClickFunction={() => buttonClicked()}
        >
          Clicked Me !!
        </CustomButton>
      </Header>
    </Layout>
  );
};

export default NavBar;
