"use client";
import "../styles/globals.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import TopLeftImg from "./components/TopLeftImg";
import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <html lang="en">
      <body>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Nav />
            <TopLeftImg />
            <Header />
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
};

export default RootLayout;
