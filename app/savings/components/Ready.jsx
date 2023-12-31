import Link from "next/link";
import React from "react";

const Ready = () => {
  return (
    <section className="bg-[#090E20] ">
      <div className="flex flex-col items-center gap-5 p-10">
        <h6>Ready to take up the Challenge?</h6>
        <p>Start creating and joining games , dare to win and challenge the gaming world</p>
        <Link
          href="/signup"
          className="bg-orange-700 rounded-full text-sm py-1 px-3"
        >
          Create an Account
        </Link>
      </div>
    </section>
  );
};

export default Ready;
