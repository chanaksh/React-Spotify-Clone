import { useNavigate } from "react-router-dom";
import { Assets } from "../assets/frontend-assets/assets.js";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[25%] flex-col h-full p-2 gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="items-center gap-3 pl-8 cursor-pointer flex "
        >
          <img className="w-6" src={Assets.home_icon} alt="" />
          <p className="font-bold">Home</p>
        </div>
        <div className="items-center gap-3 pl-8 cursor-pointer flex ">
          <img className="w-6" src={Assets.search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      <div className="bg-[#121212] h-[85%] rounded">
        <div className="flex p-4 items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={Assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={Assets.arrow_icon} alt="" />
            <img className="w-5" src={Assets.plus_icon} alt="" />
          </div>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col item-start justify-start gap-1 pl-4">
          <h1>Create your first playlist</h1>
          <p className="font-light">it's easy we will help you</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            create playlist
          </button>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col item-start justify-start gap-1 pl-4">
          <h1>Let find some podcast to follow</h1>
          <p className="font-light">we' ll keep your update on new episodes</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Browse podcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
