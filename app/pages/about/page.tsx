//  data
"use client";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
        ],
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "Kontrol Mühendisi - HAVELSAN",
        stage: "2020 - 2021",
      },
    ],
  },
  {
    title: "Üniversite",
    info: [
      {
        title:
          "Elektrik-Elektronik Mühendisliği - Karabük üniversitesi - Karabük",
        stage: "2021",
      },
      {
        title:
          "Endüstriel Bakım Onarım - Gazi Teknik ve Anadolu Meslek Lisesi - Kırıkkale",
        stage: "2015",
      },
    ],
  },
];

import Avatar from "../../components/Avatar2";
// import Circles from "../../components/Circles";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./../../../variants";
import Countup from "react-countup";
const Page = () => {
  const [index, setIndex] = useState(0);
  return (
    <div
      style={{ overflowY: "scroll", height: "102vh" }}
      className=" h-screen  bg-gray-900 py-32 text-center xl:text-left"
    >
      {/* <Circles /> */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-32 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container relative z-0 mx-auto mt-6  h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* about */}

        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 flex flex-col justify-center"
        >
          <motion.h2
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-white font-fugaz text-xl lg:text-2xl    "
          >
            Great <span className="text-accent ">stories</span> fascinating
            forms the basis of designs
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px ]  font-fasthand mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 "
          >
            Studies in the field of Electrical and Electronics during my
            university education I did it and developed an autonomous drone in
            my graduation project. UAV team I worked with Autonomous software
            for 2 years and was supported by the state. I continued to improve
            myself by taking Udemy courses with courses. Currently, I'm focused
            on web development and React, Next.js, Projects using technologies
            like TypeScript and Tailwind CSS I am developing.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-8  "
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* PROJECT */}
              <div className="relaative text-gray-200 flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after: right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <Countup start={0} end={20} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Finished Project
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* skils */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full  xl:mt-20 xl:max-w-[48%] h-[480px]  "
        >
          <div className="flex gap-x-3 text-gray-200  md:mt-8 xl:mt-1 xl:gap-x-4 mx-auto xl:mx-0 mb-4">
            <div
              className={` hover:text-accent duration-75 cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white hover:after:bg-red-500 after:absolute after:-bottom-1 after:left-0`}
            >
              Skils
            </div>
          </div>
          <div className="py-2 xl:py-4 flex flex-col gap-y-2 xl:gap-y-1 items-center xl:items-start ">
            <div className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
              <div className="font-light mb-2 md:mb-0">Web Development</div>
              <div className="hidden md:flex">-</div>
              <div className="flex gap-x-4 text-2xl text-white">
                <FaHtml5 />
                <FaCss3 />
                <FaJs />
                <FaReact />
                <SiNextdotjs />
              </div>
            </div>
          </div>
          <div className="flex gap-x-3 text-gray-200  md:mt-4 xl:mt-1 xl:gap-x-4 mx-auto xl:mx-0 mb-4">
            <div
              className={` hover:text-accent duration-75 cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white hover:after:bg-red-500 after:absolute after:-bottom-1 after:left-0`}
            >
              experience
            </div>
          </div>
          <div className="py-2 xl:py-4 flex flex-col gap-y-2 xl:gap-y-1 items-center xl:items-start ">
            <div className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
              <div className="font-light mb-2 md:mb-0">
                Control Engineer - HAVELSAN{" "}
              </div>
              <div className="hidden md:flex">-</div>
              <div>2020 - 2021 </div>
              <div className="flex gap-x-4"></div>
            </div>
          </div>
          <div className="flex gap-x-3 text-gray-200  md:mt-4 xl:mt-1 xl:gap-x-4 mx-auto xl:mx-0 mb-4">
            <div
              className={` hover:text-accent duration-75 cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white hover:after:bg-red-500 after:absolute after:-bottom-1 after:left-0`}
            >
              University
            </div>
          </div>
          <div className="py-2 xl:py-4 flex flex-col gap-y-2 xl:gap-y-1 items-center xl:items-start ">
            <div className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2  items-start text-white/60">
              <div className="font-light mb-2 md:mb-0">
                Electrical and Electronics Engineering <br /> Karabuk
                university - Karabuk{" "}
              </div>
              <div className="hidden md:flex">-</div>
              <div>2016 - 2021 </div>
              <div className="flex gap-x-4"></div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mb-40  md:hidden "> </div>
    </div>
  );
};

export default Page;
