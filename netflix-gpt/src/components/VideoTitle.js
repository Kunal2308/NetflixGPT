import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[12%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold ">{title}</h1>
      <p className=" py-4 text-lg w-1/4">{overview}</p>
      <div>
        <button className=" p-2 px-8 bg-white text-black rounded-lg text-xl hover:bg-opacity-80">
          Play
        </button>
        <button className=" mx-2 p-2 px-8 bg-gray-500 text-white rounded-lg text-xl bg-opacity-50 hover:bg-opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
