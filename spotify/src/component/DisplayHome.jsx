import React from "react";
import Navbar from "./Navbar";
import { albumsData, SongsData } from "../assets/frontend-assets/assets";
import AlbumItem from "./AlbumItem";
import Songitem from "./Songitem";
const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto ]">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              id={item.id}
              desc={item.desc}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits </h1>
        <div className="flex overflow-auto ]">
          {SongsData.map((item, index) => (
            <Songitem
              key={index}
              name={item.name}
              image={item.image}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
