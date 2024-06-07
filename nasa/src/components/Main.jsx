import React from 'react';
import { useState, useEffect } from 'react';
import IFrameVideo from './IFrameVideo';
export default function Main(props) {
  const { data } = props;
  const [toggleImage, setToggleImage] = useState(false);

  
  useEffect(() => {
    if (
      data.hdurl.indexOf('image') > -1
    ) {
      setToggleImage(toggleImage => !toggleImage)
    }
  }, [data])
  return (
    <div className="imgContainer">
    {toggleImage ? <IFrameVideo data={data}/> : <img className="bgImage" src={data.hdurl} alt={data.title || 'bg-img'} />}
      
    </div>
  );
}
