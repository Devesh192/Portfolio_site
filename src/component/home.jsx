// import React from "react";
import a from "../asset/a.png";
import b from "../asset/b.png";
import styles from "../styles";
import design from "../asset/design.png";
import Header from "./navbar";
import Footer from "./footer";
import Sidebar from "./sidebar";
import TypewriterEffect from "../asset/type_writer/type";

import logo from "../logo.svg";

import { motion } from "framer-motion";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <div className="flex w-screen h-[580px] ">
        <div className="my-12">
          <Sidebar />
        </div>

        <div className="flex justify-between w-full">
          <div className="text-5xl font-bold  py-12 px-5 flex flex-col ">
            <h1 className="mb-4">Coding Maestro Sculpting Solutions for Tomorrow's Challenges</h1>
            <TypewriterEffect className = "text-left items-start" text={'Hello World!'} />
          </div>
          <div className="rounded-full shadow-xl w-[300px] h-[400px] hidden sm:flex justify-end items-center">
            <img
              src={b}
              alt="profile-pic"
              className="border rounded-full max-w-full max-h-full"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
