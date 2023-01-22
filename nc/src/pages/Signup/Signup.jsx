import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log("Login Successfully Done");
  };

  const Login = () => {
    navigate("../login");
  };

  return (
    <div className="container mx-auto max-w-7xl p-2 md:p-0 mb-5">
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-[#99bdd7] w-[35%] rounded p-5 py-10"
        >
          <h1 className="text-center font-bold text-xl mb-5">SIGN UP</h1>


          <div className="space-y-1">
            <p className="font-semibold">Your Name</p>
            <input
              className="border w-full rounded-md h-8 px-2 font-semibold"
              type="name"
              required
            />
          </div>

          <div className="space-y-1 mt-3">
            <p className="font-semibold">Your Phone Number</p>
            <input
              className="border w-full rounded-md h-8 px-2 font-semibold"
              type="number"
              placeholder="01912345678"
              required
            />
          </div>
{/* Password */}
          <div className="space-y-1 mt-3">
            <p className="font-semibold">Your Password</p>
            <input
              className="border w-full rounded-md h-8 px-2 font-semibold"
              type="password"
              required
            />
          </div>

          <button
            className="text-center w-52 bg-blue-400 px-4 py-1 rounded-sm mt-3 text-white font-semibold mx-auto block"
            type="submit"
          >
            Sign Up
          </button>

          <p className="mt-5 font-semibold">
            Already have account? login{" "}
             <span className="cursor-pointer underline" onClick={Login}>
              here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
