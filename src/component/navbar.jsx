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
import { useEffect ,useRef} from "react";

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
const toggleButtonRef = useRef(null); // Store reference to menu icon element

useEffect(() => {
  const handleOutsideClick = (event) => {
    if (
      !event.target.closest('.sidebar') &&
      event.target !== toggleButtonRef.current
    ) {
      setToggle(false);
    }
  };

  if (toggle) {
    window.addEventListener('click', handleOutsideClick);
  }

  return () => {
    window.removeEventListener('click', handleOutsideClick);
    // setToggle(false); // Ensure state is updated on cleanup
  };
}, [toggle]);


  return (
    <div className="flex bg-teal-900">
      <div className=' px-3 rounded-xl mx-3 my-3 flex  w-[90px] justify-center items-center  font-[50px] '>
        <Link className=" px-3 py-3 bg-teal-600 rounded-lg hover:scale-125 ease-out  duration-300" to="/home">
          <i class="fa-solid fa-house fa-xl"></i>
          Devesh
        </Link>
      </div>
      <nav
        className=" w-full flex  justify-end space-x-7
        items-center navbar h-20 text-lg px-4"
      >
        <div className="hidden sm:flex  space-x-5 ">
          <Link className=" px-3 py-3 bg-teal-600 bg-gradient-to-tl rounded-lg hover:scale-125 ease-out  duration-300" to="/about">About</Link>
          {/* <Link className=" px-3 py-3 bg-teal-600 rounded-lg hover:scale-125 ease-out  duration-300" to="/home">home</Link> */}
          <Link className=" px-3 py-3 bg-teal-600 rounded-lg hover:scale-125 ease-out  duration-300" to="/skills">Skills</Link>
          <Link className=" px-3 py-3 bg-teal-600 rounded-lg hover:scale-125 ease-out  duration-300" to="/contact">Contact me</Link>
          <Link className=" px-3 py-3 bg-teal-600 rounded-lg hover:scale-125 ease-out  duration-300" to="/resume">Resume</Link>

        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] hover: cursor-pointer
            object-contain"
            onClick={() => setToggle((prev) => !prev)}
            ref={toggleButtonRef} // Assign ref to menu icon
          />
          <div
            className={`${toggle ? "flex" : "hidden"}
              p-6 absolute top-20 right-0
              mx-4 my-2 rounded-xl min-w-[140px]
              bg-black-gradient shadow-xl
              text-white
              sidebar `}
          >
            <ul className="list-none flex flex-col flex-1 p-3 px-7 space-y-3 hover:scale-125 ease-out ">
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/resume">Resume</Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};




export default Header;
