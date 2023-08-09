"use client";
// import Circles from "../../components/Circles";
import { BsArrowRight } from "react-icons/bs";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./../../../variants";
import Countup from "react-countup";
import ContactBtn from "@/app/components/ContactBtn";

const Page = () => {
  return (
    <div className="h-full bg-gray-900">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full ">
        {/* text-form */}

        <div className="gradient-04"/>
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center text-white font-fasthand mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                className="input font-fugaz text-gray-200"
              />
              <input
                type="text"
                placeholder="email"
                className="input font-fugaz text-gray-200"
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className="input font-fugaz text-gray-200 "
            />
            <textarea
              placeholder="message"
              className="textarea font-fugaz text-gray-200"
            ></textarea>
            <ContactBtn />
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Page;
