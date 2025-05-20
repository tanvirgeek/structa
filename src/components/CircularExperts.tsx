import Image from "next/image";
import React from "react";

const CircularExperts = () => {
  return (
    <div className="py-5 md:py-0 md:pt-20">
      <div className="relative w-32 h-12">
        <Image
          src="/profile1.png"
          alt="Profile 1"
          width={48}
          height={48}
          className="rounded-full absolute left-0 z-30 border-1 border-white"
        />
        <Image
          src="/profile2.png"
          alt="Profile 2"
          width={48}
          height={48}
          className="rounded-full absolute left-8 z-20 border-1 border-white"
        />
        <Image
          src="/profile3.png"
          alt="Profile 3"
          width={48}
          height={48}
          className="rounded-full absolute left-16 z-10 border-1 border-white"
        />
      </div>
      <div>
        <p>
          <span className="font-bold">200+</span> experts ready to bring
        </p>
        <p>your dream to life</p>
      </div>
    </div>
  );
};

export default CircularExperts;
