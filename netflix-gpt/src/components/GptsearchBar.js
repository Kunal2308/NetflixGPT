import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptsearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className=" p-[8%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input
          className=" p-2 m-4 col-span-9 rounded-md"
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button className=" col-span-3 m-4 px-4 py-2 bg-red-600 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptsearchBar;
