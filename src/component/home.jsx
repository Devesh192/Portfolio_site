
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
      <div className="my-10 flex flex-col-reverse sm:flex-row">
        <div className=" sm:w-1/4">
          <Sidebar />
        </div>

        <div className="p-3 flex flex-col sm:flex-row justify-between max-w-full">
          <div className=" sm:w-3/4 p-2">
            <h1 className="text-5xl font-bold mb-4">
              Coding Maestro Sculpting Solutions for Tomorrow's Challenges
            </h1>

            <div className="flex justify-start text-2xl overflow-hidden">
              <TypewriterEffect text={"Hi! My name is Devesh"} />
            </div>
          </div>
          {/* <div className="rounded-full w-[300px] h-[400px] mx-auto sm:mx-0">
            <img
              src={b}
              alt="profile-pic"
              className="border rounded-full shadow-xl max-w-full max-h-full"
            />
          </div> */}

          <div className="rounded-full w-[300px] h-[400px] mx-auto sm:mx-0 hidden sm:block">
            <img
              src={b}
              alt="profile-pic"
              className="border rounded-full shadow-xl max-w-full max-h-full"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
