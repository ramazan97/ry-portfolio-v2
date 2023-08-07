import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
         <h1 className="text-white text-4xl font-bold font-sofia " >ry<span className="text-red-500  ">.dev</span> </h1>
          </Link>
          {/* socials */}

          <Socials  />
        </div>
      </div>
    </header>
  );
};

export default Header;
