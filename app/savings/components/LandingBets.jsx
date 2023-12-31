import React from "react";
import BetCard from "./BetCard";

const LandingBets = () => {
  return (
    <section className="landingBets  p-10">
      <div className="flex flex-col gap-4">
        <h6 className="">See What other are playing right now now</h6>
        <div className="flex gap-3 overflow-x-auto">

        <BetCard />
        <BetCard />
        <BetCard />
        <BetCard />
        <BetCard />
        </div>
      </div>
    </section>
  );
};

export default LandingBets;
