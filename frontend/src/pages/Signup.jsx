import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-8 rounded-lg shadow-md bg-white ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered  h-10"
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
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
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="wraper flex mt-2 items-center space-x-2">
            <label className="label">
              <span className="text-base label-text">Gender</span>
            </label>
            <div className="sub-wraper flex justify-center items-center space-x-1">
              <input
                type="radio"
                name="radio-2"
                class="radio radio-primary"
                checked="checked"
              />
              <div className="gen">Male</div>
            </div>
            <div className="sub-wraper flex justify-center items-center space-x-1">
              <input type="radio" name="radio-2" class="radio radio-primary" />
              <div className="gen">Female</div>
            </div>
          </div>
          <div>
            <button className="h-10 w-full rounded-md flex justify-center items-center text-lg bg-blue-600 btn-sm mt-4 py-4 text-white">
              Sign Up
            </button>
          </div>
          <a
            href="/login"
            className="text-sm text-center  w-full hover:underline mt-2 inline-block"
          >
            Already have an account?
            <span className=" hover:text-blue-600">Log in</span>
          </a>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
