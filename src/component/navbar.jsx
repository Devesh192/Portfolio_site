import React from "react";
import { useState } from "react";
import menu from "../asset/menu.svg"; // Import your image
import dev from "../asset/dev.jpg"; // Import your image
import close from "../asset/close.svg"; // Import your image
import Home from "./home";
import About from "./about";
import Resume from "./resume";
import design from "../asset/design.png";
import Contact from "./contact";

import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex 
    // bg-slate-500
     bg-teal-700 bg-opacity-70 
    ">
      <div className=' px-3 rounded-xl mx-3 my-3 flex text-right w-[90px] justify-center items-center  font-[50px] '>
        {/* <img src={design} alt="design" className="w-[90px] h-[80px] " /> */}
        <Link className=" px-3 py-3 bg-teal-600 rounded-lg hover:scale-125 ease-out  duration-300" to="/home">devesh</Link>
      </div>
      <nav
        className=" w-full flex  justify-end space-x-7 
        items-center navbar h-20 text-lg px-4"
      >
        <div className="hidden sm:flex  space-x-5 ">
          <Link className=" px-3 py-3 bg-teal-600 bg-gradient-to-tl rounded-lg hover:scale-125 ease-out  duration-300" to="/about">about</Link>
          <Link className=" px-3 py-3 bg-teal-600 rounded-lg hover:scale-125 ease-out  duration-300" to="/home">home</Link>
          <Link className=" px-3 py-3 bg-teal-600 rounded-lg hover:scale-125 ease-out  duration-300" to="/contact">contact</Link>
          <Link className=" px-3 py-3 bg-teal-600 rounded-lg hover:scale-125 ease-out  duration-300" to="/resume">resume</Link>
        </div>
        <div
          className="sm:hidden flex flex-1 justify-end
        items-center"
        >
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] hover: cursor-pointer
            object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${toggle ? "flex" : "hidden"}
              p-6 absolute top-20 right-0 
              mx-4 my-2 rounded-xl min-w-[140px]
              bg-black-gradient shadow-xl
              text-white 
              sidebar `}
          >
            <ul className="list-none flex flex-col flex-1">
              <Link to="/about">about</Link>
              <Link to="/home">home</Link>
              <Link to="/contact">contact</Link>
              <Link to="/resume">resume</Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
