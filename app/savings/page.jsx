import boy from "../../public/assets/download.jpeg";
import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

const app = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-bold text-3xl mt-7">Welcome</h1>
      <h1 className="text-bold text-xl mb-4 ">
            Take few minutes to Set up Your Profile
          </h1>
      <div className="flex flex-wrap gap-6 m-10  justify-center">
        <div className="flex flex-col items-center border border-gray-500 h-fit p-4 ">
          <h2 className="font-bold ">Okeke Emmanuel</h2>
          <h6 className=" font-light text-sm mb-6 ">@emma</h6>
          <Image
            src={boy}
            width={100}
            height={100}
            className=" w-[100px] h-[100px] rounded-full object-cover mb-4"
          />
          <button
            type="button"
            className="bg-purple-600 rounded px-4 p-1 text-white text-sm"
          >
            Upload a Photo
          </button>
        </div>
        <div className=" ">
        
          <form action="" className="flex flex-col gap-4">
            <div className="flex gap-3">
              <div className="">
                <p className="font-thin text-sm">First Name</p>
                <div className="flex border p-2 items center gap-2 rounded border-gray-500 text-gray-400">
                  <AiOutlineUser className="text-lg" />
                  <input
                    type="text"
                    className=" bg-transparent w-full outline-none"
                    placeholder="Enter First Name"
                  />
                </div>
              </div>

              <div className="">
                <p className="font-thin text-sm">Last Name</p>
                <div className="flex border p-2 items center gap-2 rounded border-gray-500 text-gray-400">
                  <AiOutlineUser className="text-lg" />
                  <input
                    type="text"
                    className=" bg-transparent w-full outline-none"
                    placeholder="Enter Last name"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <p className="font-thin text-sm">Username</p>
              <div className="flex border p-2 items center gap-2 rounded border-gray-500 text-gray-400">
                <AiOutlineUser className="text-lg" />
                <input
                  type="text"
                  className=" bg-transparent w-full outline-none"
                  placeholder="Enter Username"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="">
                <p className="font-thin text-sm">Phone Number</p>
                <div className="flex border p-2 items center gap-2 rounded border-gray-500 text-gray-400">
                  <input
                    type="number"
                    className=" bg-transparent w-full outline-none"
                    placeholder="+234 ..."
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="">
                <p className="font-thin text-sm">Email Address</p>
                <div className="flex border p-2 items center gap-2 rounded border-gray-500 text-gray-400">
                  <AiOutlineMail className="text-lg" />
                  <input
                    type="text"
                    className=" bg-transparent w-full outline-none"
                    placeholder="johndoe@gmail.com"
                  />
                </div>
              </div>

              <div className="">
                <p className="font-thin text-sm">Password</p>
                <div className="flex border p-2 items center gap-2 rounded border-gray-500 text-gray-400">
                  <RiLockPasswordLine className="text-lg" />
                  <input
                    type="text"
                    className=" bg-transparent w-full outline-none"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-between">
              <div className="">
                <p className="font-thin text-sm">Enter Pin</p>
                <div className="flex border w-fit p-2 items center gap-2 rounded border-gray-500 text-gray-400">
                  <input
                    type="number"
                    className=" bg-transparent outline-none"
                    placeholder="0-0-0-0-0-0"
                  />
                </div>
              </div>

              <div className="">
                <p className="font-thin text-sm">Verify Pin</p>
                <div className="flex border w-fit p-2 items center gap-2 rounded border-gray-500 text-gray-400">
                  <input
                    type="number"
                    className=" bg-transparent w-full outline-none"
                    placeholder="0-0-0-0-0-0"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default app;
