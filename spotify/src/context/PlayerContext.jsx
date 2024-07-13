import { createContext, useEffect, useRef, useState } from "react";
import { SongsData } from "../assets/frontend-assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();

  const seekBg = useRef();

  const seekBar = useRef();

  const [Track, setTrack] = useState(SongsData[2]);

  const [PlayStatus, setPlayStatus] = useState(false);

  const [Time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const PlaywithId = async (id) => {
    await setTrack(SongsData[id]);
    await audioRef.current.play();
    PlayStatus(true);
  };

  const previous = async () => {
    if (Track.id > 0) {
      await setTrack(SongsData[Track.id - 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const next = async () => {
    if (Track.id < SongsData.length - 1) {
      await setTrack(SongsData[Track.id + 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const seekSongs = async (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    Track,
    setTrack,
    PlayStatus,
    setPlayStatus,
    Time,
    setTime,
    play,
    pause,
    PlaywithId,
    next,
    previous,
    seekSongs,
  };

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [audioRef]);

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;