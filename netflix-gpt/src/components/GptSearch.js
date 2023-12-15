import React from "react";
import GptsearchBar from "./GptsearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className=" absolute -z-10">
        <img src={BG_URL} alt="bg-img" />
      </div>
      <GptsearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
