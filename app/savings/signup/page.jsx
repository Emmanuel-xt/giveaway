// import SignUp from "./SignUp";
import Link from "next/link";
import SignUp from "./SignUp";


const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center justify-between signup h-screen text-white pt-10 pb-20">
      <div className="flex flex-col items-center w-[310px] z-10">
        <div className="flex flex-col mb-10">
          <h1 className="text-white font-bold text-2xl">
            Split<span className="text-orange-600">or</span>SPin
          </h1>
          <h6 className="text-sm text-right">by Bitcoin.com</h6>
        </div>
        <div className="flex gap-2 my-3">
          <Link href="/login">
            <button className="border rounded-full px-5 py-1 text-sm">
              Login
            </button>
          </Link>
          <Link href="signup">
            <button className="border rounded-full px-5 py-1 text-sm text-orange-600 border-orange-600 bg-gray-800">
              Sign Up
            </button>
          </Link>
        </div>
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
