import React from "react";
const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto bg--500">
      <div className="w-full py-8 px-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <button className="h-10 w-full rounded-md flex justify-center items-center text-md text-white bg-blue-600 text-lg btn-sm mt-4 py-4">
              Login
            </button>
          </div>
          <a href="/signup" className="text-sm text-center w-full hover:underline mt-2 inline-block">
            {"Don't"} have an account?
            <span className=" hover:text-blue-600">Sign Up</span>
          </a>
        </form>
      </div>
    </div>
  );
};
export default Login;
