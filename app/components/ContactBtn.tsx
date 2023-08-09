import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";

const ContactBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 ">
      <a
        href={"/work"}
        className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-gray-200 rounded-full shadow-md group"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-gray-800 duration-300 -translate-x-full bg-gray-200 group-hover:translate-x-0 ease">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute font-fugaz tracking-wider flex items-center justify-center w-full h-full text-gray-200 transition-all duration-300 transform group-hover:translate-x-full ease">
          Let's Talk
        </span>
        <span className="relative font-fugaz tracking-wider invisible">Let's Talk</span>
      </a>
    </div>
  );
};

export default ContactBtn;
