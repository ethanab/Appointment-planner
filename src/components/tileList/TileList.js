import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({tile}) => {
  return (
    <div>
      {tile.map((data, index) =>(
        <Tile data={data} key={index} />
      ))}
      
    </div>
  );
};
