import { useState, useEffect } from 'react';
import * as Img from 'next/image';

export default function ProgressiveImage({ placeholderSrc, src, ...props }) {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  useEffect(() => {
    const img = new Image();
    img.src = import('../components/high-res.jpg');
    img.onload = () => {
      console.log('image loaded');
      setImgSrc(src);
    };
  }, [src]);

  return (
    <>
      <Img
        {...{ src: imgSrc, ...props }}
        alt={props.alt || ''}
        className='image'
      />
      <img src={placeholderSrc} alt='' />
    </>
  );
}
