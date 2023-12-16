import React, { useState } from "react";
import Layout from "./Layout";
import "./skills.css";

function Skills() {
    const [hoveredCard1, setHoveredCard1] = useState(false);
    const [hoveredCard2, setHoveredCard2] = useState(false);
    const [hoveredCard3, setHoveredCard3] = useState(false);
    const [hoveredCard4, setHoveredCard4] = useState(false);

    return (
        <Layout>
            <div className="my-20 flex flex-wrap justify-center">
                <div
                    className={`${hoveredCard1
                        ? "transform translate ease-out scale-110 shadow-md"
                        : "hover:translate ease-out hover:scale-110 shadow-md"
                        } w-80 h-64 m-4 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 rounded-md flex items-center justify-center font-bold text-black`}
                    onMouseEnter={() => setHoveredCard1(true)}
                    onMouseLeave={() => setHoveredCard1(false)}
                >
                    {hoveredCard1 ? (
                        <div className="parent flex flex-col shadow-md  justify-between h-full ">
                            <div className="flex items-center justify-center align-top mt-3">
                                Compitive Programming
                            </div>
                            <div className="animat  bg-blue-200 w-80 h-40  opacity-30">
                                maximum rating 3 star
                                <br />
                                codeforces
                                <br />
                                codechef
                            </div>
                        </div>
                    ) : (
                            <>
                                <div className="flex flex-col justify-between items-center overflow-hidden h-full">
                                    <div></div>
                                    <div className="flex ">
                                        Compitive Programming
                                    </div>
                                    <div className="flex w-16 h-16 bg-white justify-center p-6 rounded-full align-baseline translate-y-1/2 ">
                                        <i class="fa-solid fa-arrow-up fa-xl fa-bounce"></i>
                                    </div>
                                </div>
                            </>
                    )}
                </div>

                <div
                    className={`${hoveredCard2
                            ? "transform translate ease-out scale-110 shadow-md"
                            : "hover:translate ease-out hover:scale-110 shadow-md"
                        } w-80 h-64 m-4 bg-gradient-to-r from-green-300 via-green-500 to-green-700 rounded-md flex items-center justify-center font-bold text-black`}
                    onMouseEnter={() => setHoveredCard2(true)}
                    onMouseLeave={() => setHoveredCard2(false)}
                >
                    {hoveredCard2 ? (
                        <>
                            <div className="parent flex flex-col shadow-md  justify-between h-full ">
                                <div className="flex items-center justify-center align-top mt-3">
                                    Web Development
                                </div>
                                <div className="animat rounded-lg bg-green-200 w-80 h-40 p-3">
                                    maximum rating 3 star
                                    <br />
                                    codeforces
                                    <br />
                                    codechef
                                </div>
                            </div>
                        </>
                    ) : (
                            <>
                                <div className="flex flex-col justify-between items-center overflow-hidden h-full">
                                    <div></div>
                                    <div className="flex ">
                                        Web Development
                                    </div>
                                    <div className="flex w-16 h-16 bg-white justify-center p-6 rounded-full align-baseline translate-y-1/2 ">
                                        <i class="fa-solid fa-arrow-up fa-xl fa-bounce"></i>
                                    </div>
                                </div>
                            </>
                    )}
                </div>
                <div
                    className={`${hoveredCard3
                            ? "transform translate ease-out scale-110 shadow-md"
                            : "hover:translate ease-out hover:scale-110 shadow-md"
                        } w-80 h-64 m-4 bg-gradient-to-r from-red-300 via-red-500 to-red-700 rounded-md flex items-center justify-center font-bold text-black`}
                    onMouseEnter={() => setHoveredCard3(true)}
                    onMouseLeave={() => setHoveredCard3(false)}
                >
                    {hoveredCard3 ? (
                        <div className="parent flex flex-col shadow-md  justify-between h-full ">
                            <div className="flex items-center justify-center align-top mt-3">
                                Web Development
                            </div>
                            <div className="animat rounded-lg bg-red-200 w-80 h-40 p-3">
                                maximum rating 3 star
                                <br />
                                codeforces
                                <br />
                                codechef
                            </div>
                        </div>
                    ) : (
                            <>
                                <div className="flex flex-col justify-between items-center overflow-hidden h-full">
                                    <div></div>
                                    <div className="flex ">
                                        Data Structure and Algorithm
                                    </div>
                                    <div className="flex w-16 h-16 bg-white justify-center p-6 rounded-full align-baseline translate-y-1/2 ">
                                        <i class="fa-solid fa-arrow-up fa-xl fa-bounce"></i>
                                    </div>
                                </div>
                            </>
                    )}
                </div>
                <div
                    className={`${hoveredCard4
                            ? "transform translate ease-out scale-110 shadow-md"
                            : "hover:translate ease-out hover:scale-110 shadow-md"
                        } w-80 h-64 m-4 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 rounded-md flex items-center justify-center font-bold text-black`}
                    onMouseEnter={() => setHoveredCard4(true)}
                    onMouseLeave={() => setHoveredCard4(false)}
                >
                    {hoveredCard4 ? (
                        <div className="parent flex flex-col shadow-md  justify-between h-full ">
                            <div className="flex items-center justify-center align-top mt-3">
                                Web Development
                            </div>
                            <div className="animat rounded-lg bg-yellow-200 w-80 h-40 p-3">
                                C++ [proficient]
                                <br />
                                C [proficient]
                                <br />
                                Java Script [proficient]
                                <br />
                                python [intermediate]
                            </div>
                        </div>
                    ) : (
                            <>
                                <div className="flex flex-col justify-between items-center overflow-hidden h-full">
                                    <div></div>
                                    <div className="flex ">
                                        Programming Languages
                                    </div>
                                    <div className="flex w-16 h-16 bg-white justify-center p-6 rounded-full align-baseline translate-y-1/2 ">
                                        <i class="fa-solid fa-arrow-up fa-xl fa-bounce"></i>
                                    </div>
                                </div>
                            </>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default Skills;
