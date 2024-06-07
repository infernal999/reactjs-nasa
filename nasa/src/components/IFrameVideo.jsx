import React from 'react';

export default function IFrameVideo(props) {
    const {data} = props;
    
  return (
    <iframe
      width="100%"
      height="90%"
      src={(data.hdurl.slice(0, 23) + '/embed/' + data.hdurl.slice(32))}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  );
}
