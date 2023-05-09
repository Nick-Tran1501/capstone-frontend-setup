'use client'
import React, { CSSProperties } from 'react'
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
  size?: SizeType;
  onClickFunction?: () => void;
  children: React.ReactNode;
  href?: string;
  target?: string;
  style?: CSSProperties;
};

const CustomButton: React.FC <Props> = ({type, size,onClickFunction,children, href,target, style}) => {
  return (
    <Button type={type} size={size} onClick={onClickFunction} href={href} target={target} style={style}>{children}</Button>
  )
}

export default CustomButton