"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import WorkSlider from "@/app/components/WorkSlider";

// import WorkSlider from "../../components/WorkSlider";
// import Bulb from "../../components/Bulb";
// import Circles from "../../components/Circles";

const Page = () => {
  return (
    <div className="h-full  bg-gray-900 py-36 flex items-center ">
      {/* <Circles /> */}
      <div className="gradient-02" />
      <div className="container  mx-auto">
        <div className="flex flex-col  xl:flex-row gap-x-8 ">
          {/* text */}
          <div className="text-center flex items-center  justify-center xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 ">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12  sm:pt-32 md:mt-28 md:text-center  text-white font-fugaz"
            >
              My work<span className="text-accent">.</span>
            </motion.h2>
            <div className="flex items-center justify-center">
              {" "}
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[400px] mx-auto lg:mx-0 md:text-center   text-gray-200 font-fasthand"
              >
                In this section, I share some of my projects. More for the
                project <span className="font-bold uppercase">Github</span> you
                can visit my page.
              </motion.p>
            </div>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full md:pt-32 xl:max-w-[65%] "
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      {/* <Bulb /> */}
    </div>
  );
};

export default Page;
