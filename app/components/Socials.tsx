import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiLinkedinLine,
  RiGithubLine
} from "react-icons/ri";

const Socials: React.FC = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://linkedin.com/in/ramazan-yağli-49891a159"}
        className="hover:text-red-500 transition-all duration-300 text-2xl text-white "
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://github.com/ramazan97?tab=repositories"}
        className="hover:text-red-500 transition-all duration-300 text-2xl text-white "
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://kariyer.net/ozgecmis/ryagli?o=c15o"}
        className="hover:text-red-500 transition-all duration-300 text-2xl text-white "
      >
       K
      </Link>
    </div>
  );
};

export default Socials;
