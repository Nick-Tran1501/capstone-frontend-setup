'use -client'
import React,{ CSSProperties }  from 'react'
import Image, { StaticImageData } from 'next/image'
type Props = {
  key: React.Key
  src: StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  objectFit?: string;
  style?: CSSProperties;
};
 
const ImageComponent: React.FC<Props> = ({src, alt, width, height, style}) => {
  return <Image  src={src} alt={alt} width={width} height={height} priority={true} style={style}/>;
}

export default ImageComponent