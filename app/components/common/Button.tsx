'use client'
import React from 'react'
import { Button } from 'antd'
import { SizeType } from 'antd/es/config-provider/SizeContext';

type Props = {
  type?:
    | 'link' 
    | 'text'
    | 'ghost'
    | 'default'
    | 'primary'
    | 'dashed'
    | undefined;
  size: SizeType;
  onClickFunction: () => void;
  children: React.ReactNode;
};

const CustomButton: React.FC <Props> = ({type, size,onClickFunction,children}) => {
  return (
    <Button type={type} size={size} onClick={onClickFunction}>{children}</Button>
  )
}

export default CustomButton