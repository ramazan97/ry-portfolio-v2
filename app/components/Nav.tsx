"use client";
import {
  HiHome,
  HiUser,
  HiEnvelope,
  HiViewColumns,
  HiRectangleGroup,
} from "react-icons/hi2";
import Link from "next/link";
//import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
export const navData = [
  {
    name: "home",
    path: "/",
    icon: <HiHome />,
  },
  {
    name: "about",
    path: "/pages/about",
    icon: <HiUser />,
  },
  {
    name: "blog",
    path: "https://rydev-blog-3zxl0ejch-ramazan97.vercel.app/",
    icon: <HiRectangleGroup />,
  },
  {
    name: "work",
    path: "/pages/work",
    icon: <HiViewColumns />,
  },
  {
    name: "contact",
    path: "/pages/contact",
    icon: <HiEnvelope />,
  },
];

const Nav: React.FC = () => {
  const router = useRouter();
  // const pathname = router.pathname;
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed  h-max bottom-0 mt-auto xl:left-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div
        className="flex w-full xl:flex-col items-center justify-between xl:justify-center
    gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full 
    "
      >
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path  && `text-gray-200`
              } relative flex items-center group hover:text-gray-200 transition-all duration-300 `}
              key={index}
              onClick={() => router.push(link.path)}
              href={link.path}
            >
              {/* tooltip */}
              <div className="absolute pr-14 left-14 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px] ">
                  <div className="text-[12px] leading-none font-semibold capitalize ">
                    {link.name}{" "}
                  </div>{" "}
                  {/* triangle */}
                  <div
                    className="border-solid border-r-white border-r-8 border-y-transparent 
              border-y-[6px] border-r-0 absolute -left-1"
                  ></div>
                </div>{" "}
              </div>

              {/* icon */}
              <div className="text-4xl text-white hover:text-red-500">
                {link.icon}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
