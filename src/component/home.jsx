import React from "react";
import a from "../asset/a.png";
import b from "../asset/b.png";
import styles from "../styles";
import design from "../asset/design.png";
import Header from "./navbar";
import Footer from "./footer";
import Sidebar from "./sidebar";

import logo from "../logo.svg";

import {motion} from "framer-motion";

const Home = () => {
  return (
    <div className="flex  w-screen">
      <div className="">
        <Sidebar />
      </div>
        {/* <motion.div whileHover={{scale : 2}}>
          <div className="bg-white  mx-96 shadow-xl h-20 w-20">
            <h1>devesh kumar</h1>
          </div> 
        </motion.div> */}
      <div className="">
        <div
          className={`
                flex justify-between w-full`}
        >
          <div
            className="text-5xl font-bold feature-card 
                    justify-start  text-left py-8"
          >
            <h1>Coding Maestro Sculpting Solutions for Tomorrow's Challenges</h1>
          </div>
          <div className="overflow-clip w-[400px] px-5 py-5 hidden md:flex min justify-end animate">

            {/* <motion.div whileHover={{ scale: 2 }}> */}
              <img
                src={b}
                alt="profile-pic"
                className="fixed rounded-lg  w-[200px] h-[300px] "
              />
            {/* </motion.div> */}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
