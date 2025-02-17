import React from "react";
import AboutImage from "../assets/cyber-warriors.jpg";

const About = () => {
    return (
        <div className="bg-black text-white py-20" id="about">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">About me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <img src={AboutImage} alt="Profile" className="w-72 h-80 rounded object-cover mb-8 md:mb-0" />
                    <div className="flex-1">
                        <p className="text-lg mb-8 ">
                            I am a full stack web developer with experience in building modern
                            web applications using technologies like React, Node.js, and
                            MongoDB. I enjoy solving complex problems and creating efficient,
                            scalable solutions.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-2/12">HTML & CSS</label>
                                <div className="grow bg-gray-800 rounded-full h-2.5 transform transition-transform duration-300 hover:scale-105">
                                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-10/12"></div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-2/12">HTML & CSS</label>
                                <div className="grow bg-gray-800 rounded-full h-2.5 transform transition-transform duration-300 hover:scale-105">
                                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-10/12"></div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-2/12">HTML & CSS</label>
                                <div className="grow bg-gray-800 rounded-full h-2.5 transform transition-transform duration-300 hover:scale-105">
                                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-10/12"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
