import React, { useState } from "react";
import { loginUser } from "../sevices/authServices";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      setLoading(true);
      try {
        let response = await loginUser(password, email);
        console.log("data :>> ", response.data);
        navigate("/");
      } catch (error) {
        console.log("error in login  :>> ", error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto bg--500">
      <div className="w-full py-8 px-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">email</span>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <button
              type="submit"
              className="h-10 w-full rounded-md flex justify-center items-center text-lg bg-blue-600 btn-sm mt-4 py-4 text-white"
              disabled={loading}
            >
              {loading ? "Loading..." : "Log in"}
            </button>
          </div>
          <a
            href="/signup"
            className="text-sm text-center w-full hover:underline mt-2 inline-block"
          >
            {"Don't"} have an account?
            <span className=" hover:text-blue-600"> Sign Up</span>
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
