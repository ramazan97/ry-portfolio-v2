"use client";
import ParticlesContainer from "../../components/ParticlesContainer";

import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import Avatar from "../../components/Avatar";
import ProjectsBtn from "@/app/components/ProjectsBtn";


const Page = () => {
  return (
    <div className="bg-gray-800 h-full z-50">
      <div className="w-full h-full bg-gradient-to-r from-bg-gray-800 via-black">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 font-sofia tracking-wider"
          >
            Hi, my name is Ramazan <br /> I'm {"  "}
            <span className="text-accent">Frontend-Developer</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm font-fasthand xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have s
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
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
