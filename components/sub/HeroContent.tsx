"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import '../main/CardStyles.css';

const textHoverEffect = {
    scale: 1.03,
    transition: { duration: 0.2 },
};
const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start">
                <motion.div
                    variants={slideInFromTop}
                    whileHover={textHoverEffect}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5"/>
                    <h1 className="Welcome-text text-[13px]">
                        About Me
                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    whileHover={textHoverEffect}
                    className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span className="text-sm md:text-base lg:text-lg xl:text-xl">
                        Hi, I'm {" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            Dhaya. 
                        </span>{" "}
                        Welcome to my Portfolio site!
                    </span>

                    {/* Introduction Heading */}
                    <motion.h2
                        variants={slideInFromLeft(0.7)}
                        whileHover={textHoverEffect}
                        className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mt-4"
                    >
                        Introduction
                    </motion.h2>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    whileHover={textHoverEffect}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    I'm a skilled Full-Stack Developer with Master's in Computer Science from SUNY Buffalo, adept in engineering scalable and robust software applications. My three years of software development experience have been focused on crafting and fine-tuning software that meets the complex needs of modern enterprises.
                </motion.p>
            </div>

            <div
                className="w-full h-full flex justify-center items-center"
            >
                <Image
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    height={650}
                    width={650}
                />
            </div>
            <div className="scroll-down">
                <div> 
                <span></span>
                <span></span>
                <span></span>
                </div>
            </div>



        </motion.div>
    );
};

export default HeroContent;
