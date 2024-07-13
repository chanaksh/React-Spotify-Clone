import React, { useContext } from "react";
import Sidebar from "../src/component/Sidebar";
import Player from "./component/Player";
import Display from "./component/Display";
import { PlayerContext } from "./context/PlayerContext";
const App = () => {
  const { audioRef, Track } = useContext(PlayerContext);
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={Track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
