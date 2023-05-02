'use -client'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
type Props = {
  key: React.Key
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
};
 
const ImageComponent: React.FC<Props> = ({src, alt, width, height}) => {
  return <Image  src={src} alt={alt} width={width} height={height} priority={true} />;
}

export default ImageComponent