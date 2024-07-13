import { useContext } from "react";
import { Assets, SongsData } from "../assets/frontend-assets/assets.js";
import { PlayerContext } from "../context/PlayerContext.jsx";
const Player = () => {
  const {
    seekBg,
    seekBar,
    PlayStatus,
    play,
    pause,
    Track,
    Time,
    next,
    previous,
    seekSongs,
  } = useContext(PlayerContext);
  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={Track.image} alt="" />
        <div>
          <p>{Track.name}</p>
          <p>{Track.desc.slice(0, 12)}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4 ">
          <img
            className="w-4 cursor-pointer"
            src={Assets.shuffle_icon}
            alt=""
          />
          <img
            onClick={previous}
            className="w-4 cursor-pointer"
            src={Assets.prev_icon}
            alt=""
          />
          {PlayStatus ? (
            <img
              onClick={pause}
              className="w-4 cursor-pointer"
              src={Assets.pause_icon}
              alt=""
            />
          ) : (
            <img
              onClick={play}
              className="w-4 cursor-pointer"
              src={Assets.play_icon}
              alt=""
            />
          )}

          <img
            onClick={next}
            className="w-4 cursor-pointer"
            src={Assets.next_icon}
            alt=""
          />
          <img className="w-4 cursor-pointer" src={Assets.loop_icon} alt="" />
        </div>
        <div className="flex items-center gap-5 ">
          <p>
            {Time.currentTime.minute}:{Time.currentTime.second}
          </p>
          <div
            ref={seekBg}
            onClick={seekSongs}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            />
          </div>
          <p>
            {Time.totalTime.minute}:{Time.totalTime.second}
          </p>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-3 opacity-75 ">
        <img className="w-4" src={Assets.plays_icon} alt="" />
        <img className="w-4" src={Assets.mic_icon} alt="" />
        <img className="w-4" src={Assets.queue_icon} alt="" />
        <img className="w-4" src={Assets.speaker_icon} alt="" />
        <img className="w-4" src={Assets.volume_icon} alt="" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img className="w-4" src={Assets.mini_player_icon} alt="" />
        <img className="w-4" src={Assets.zoom_icon} alt="" />
      </div>
    </div>
  );
};

export default Player;
