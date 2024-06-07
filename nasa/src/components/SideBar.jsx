import React from 'react';

export default function SideBar(props) {
  const { handleToggleModal, data } = props;

  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay" ></div>
      <div className="sidebarContents">
        <h2><a className='titleLink' href='https://apod.nasa.gov/apod/'>{data?.title}</a></h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
