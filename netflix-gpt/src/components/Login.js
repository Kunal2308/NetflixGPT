import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSighInForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className=" absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg-img"
        />
      </div>
      <form className=" bg-black w-1/3 absolute p-14 my-36 mx-auto right-0 left-0 text-white opacity-80 rounded-sm">
        <h1 className=" text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-4 my-4 bg-gray-700 w-full rounded-sm"
            type="text"
            placeholder="Full Name"
          ></input>
        )}
        <input
          className="p-4 my-4 bg-gray-700 w-full rounded-sm"
          type="text"
          placeholder="Email or phone number"
        ></input>
        <input
          className="p-4 my-4 bg-gray-700 w-full rounded-sm"
          type="text"
          placeholder="Password"
        ></input>
        <button className=" p-4 my-6 bg-red-600 w-full rounded-md text-lg">
          {isSignInForm ? " Sign In" : " Sign Up"}
        </button>
        <p className=" py-4">
          <span className=" opacity-50">
            {!isSignInForm ? "Already Registered?" : "New to Netflix?"}
          </span>
          <button
            className=" hover:underline px-2"
            onClick={(e) => toggleSighInForm(e)}
          >
            {!isSignInForm ? "Sign In now" : "Sign Up now"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
