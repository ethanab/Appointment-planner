import React from "react";

export const Tile = ({data}) => {

  return (
    <div className="tile-container">
      {Object.values(data).map((element, index) => (
        <p key={index} className={`${index===0 ? 'tile-title' : ''} tile`}>{element}</p>
      ))}      
    </div>
  );
};
