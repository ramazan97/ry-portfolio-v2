"use client";
import ParticlesContainer from "../../components/ParticlesContainer";

import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import Avatar from "../../components/Avatar";
import ProjectsBtn from "@/app/components/ProjectsBtn";

const Page = () => {
  return (
    <div className="bg-gray-900 pt-4 h-full ">
      <div className="gradient-02" />
      <div className="w-full h-full  bg-gradient-to-r from-bg-gray-800 via-black">
        <div className="text-center flex flex-col sm:pt-16 justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1  font-fugaz bg-red-500 tracking-wider"
          >
            Hi, my name is <br />
            Ramazan I'm {"  "}
            <br />
            <span className="text-accent">Frontend-Developer</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm font-fasthand xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Hello! I am Ramazan. My own story with design and technology I'm
            telling. Electrical and Electronics during my university education I
            worked in the field, I developed autonomous drones. web development
            now I specialize in. React, Next.js, TypeScript and Tailwind CSS I
            produce creative projects with technologies such as In this site I
            share my work and projects. from contacting don't hesitate. Together
            we can sign great projects! Thanks!
          </motion.p>
          <div className="flex relative z-50  justify-center xl:hidden ">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden mb-16 -mt-10 xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0 ">
        {/* bgimage */}
        <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right
xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0
"
        ></div>
        {/* Particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] 
  absolute -bottom-32 lg:bottom-0 lg:right-[0] lg:z-0 "
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
