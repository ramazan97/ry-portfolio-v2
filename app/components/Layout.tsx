"use client";

import React, { FC } from "react";
import { Sora } from "@next/font/google";
import Nav from "../components/Nav";
// import Header from "../components/Header";
// import TopLeftImg from "../components/TopLeftImg";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout: FC = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`w-full h-screen overflow-hidden bg-site text-white bg-cover bg-no-repeat ${sora.variable} 
      font-sora relative
      `}
    >
      {/* <TopLeftImg /> */}
      <Nav />
      {/* <Header /> */}
      {children}
    </div>
  );
};

export default Layout;
