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

// const Home = () => {
//   return (
//     <Layout>
//       <div className="flex  w-screen h-[580px]">
//         <div className="">
//           <Sidebar />
//         </div>

//         <div className="flex justify-between w-full">
//           <div className="text-5xl font-bold  justify-start text-left py-8 px-5">
//             <h1>Coding Maestro Sculpting Solutions for Tomorrow's Challenges</h1>
//             <TypewriterEffect text={'Hello World!'} />
//           </div>
//           <div className=" rounded-full shadow-xl w-[200px] h-[300px] hidden md:flex justify-end">
//             <img
//               src={b}
//               alt="profile-pic"
//             />
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Home;

// import React from "react";
// import b from "../asset/b.png";
// import TypewriterEffect from "../asset/type_writer/type";
// import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <div className="flex w-screen h-[580px]">
        <div className="">
          <Sidebar />
        </div>

        <div className="flex justify-between w-full">
          <div className="text-5xl font-bold justify-start text-left py-8 px-5 flex flex-col items-start">
            <h1 className="mb-4">Coding Maestro Sculpting Solutions for Tomorrow's Challenges</h1>
            <TypewriterEffect text={'Hello World!'} />
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
