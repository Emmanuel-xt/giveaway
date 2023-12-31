import React from "react";
import { IoIosWallet, IoWalletSharp } from "react-icons/io";

const PersonalInfo = ({onNext}) => {

 
  return (
    <div className="flex flex-col gap-5">
      <h6 className="text-lg font-semibold">How would you like to sign up?</h6>
      <form action=""  className="flex flex-col gap-4">
        <input type="text" name="" id="" className="bg-[#363550] border border-slate-500 rounded" />
        <button
          type="submit"
          onClick={onNext}
          className="bg-orange-700 rounded-full text-sm py-1 px-3"
        >
          Continue
        </button>
      </form>
      <div className="flex items-center gap-4">
      <span className="bg-slate-400 w-full h-[1px] "></span>or<span className="bg-slate-400 w-full h-[1px]"></span>

      </div>

      <button className="flex items center border rounded-full p-1 px-5"><IoIosWallet className=" text-left text-blue-700 text-xl"/><p className="text-center text-sm  w-full">Continue with wallet</p></button>
    </div>
  );
};

export default PersonalInfo;
