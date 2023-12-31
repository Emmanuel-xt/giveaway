import Image from "next/image";
import Link from "next/link";
import React from "react";
import man from "../../../public/assets/spinman.jpg";
import vs from "../../../public/assets/vs.jpg";

const Catchy = () => {
  return (
    <section className="flex flex-col bg-[#090E20] justify-center items-center">
        <div className="breaker">
            <div className="top-breaker"></div>
            <div className="mid-breaker"></div>
            <div className="down-breaker"></div>
        </div>
      <div className="  flex justify-center items-center px-10 py-5 md:w-[70%]  gap-9">
        <div className="flex flex-col flex-1 gap-3">
          <p className="text-sm text-orange-600">Create a game</p>
          <p className="text-sm ">
            Ready to turn your imagination into reality? Create your game, craft
            your story, and unleash the fun! Start building your digital
            universe now – the game world is waiting for your creative touch!
          </p>
          <div className="flex items-center gap-5">
          <Link
            href="/app/create-game"
            className="bg-orange-700 rounded-full text-sm py-1 px-3"
          >
            Create a game
          </Link>

            <Link href='/learnmore' className="text-white text-sm">Learn more</Link>
          </div>
        </div>
        <div className="flex flex-1 ">
          <Image
            src={man}
            width={300}
            height={300}
            alt="create-game"
            classname="w-[700px]"
          />
        </div>
      </div>

      <div className=" bg-[#090E20] flex justify-between items-center px-10 py-5 md:w-[70%] gap-9">
        <div className="flex flex-1">
          <Image src={vs} width={300} height={300} alt="create-game" />
        </div>
        <div className="flex flex-col flex-1 gap-3">
          <p className="text-sm text-orange-600">Join a game</p>
          <p className="text-sm ">
            Join the gaming community and dive into epic adventures! Conquer
            challenges, make allies, and level up your fun by joining existing
            games today. Your next gaming journey awaits – don't miss out, join
            the excitement now!
          </p>
          <div className="flex items-center gap-5">
          <Link
            href="/app/create-game"
            className="bg-orange-700 rounded-full text-sm py-1 px-3"
          >
            Join a game
          </Link>

            <Link href='/learnmore' className="text-white text-sm">Learn more</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catchy;
