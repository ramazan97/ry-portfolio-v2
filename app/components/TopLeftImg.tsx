import Image from "next/image";

const TopLeftImg: React.FC = () => {
  return (
    <div
      className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px xl:w-[400]
    opacity-50 ltr
    "
    >
      <Image
        src="/closeup-shot-red-fire-black-background-backgrounds.jpg"
        className="-rotate-45 relative -start-32 -top-24"
        width={400}
        height={400}
        alt=""
      />
    </div>
  );
};

export default TopLeftImg;
