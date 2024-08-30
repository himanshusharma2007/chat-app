import React, { useState } from "react";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("Male");
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const validateForm = () => {
    let formErrors = {};

    if (!fullName.trim()) formErrors.fullName = "Full Name is required";
    if (!username.trim()) formErrors.username = "Username is required";
    if (!password) formErrors.password = "Password is required";
    if (password !== confirmPassword)
      formErrors.confirmPassword = "Passwords do not match";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle successful form submission
      setLoading(true);
      try {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ fullName, username, password, gender, email }),
        });
        console.log("data :>> ",res);
        const data = await res.json();
      } catch (error) {
        console.log("error in signup  :>> ", error.message);
      } finally {
        setLoading(false);
      }
      console.log("Form submitted", {
        fullName,
        username,
        password,
        gender,
        email,
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-8 rounded-lg shadow-md bg-white ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit} autoComplete="true">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="xyz@gmail.com"
              className="w-full input input-bordered h-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="wraper flex mt-2 items-center space-x-2">
            <label className="label">
              <span className="text-base label-text">Gender</span>
            </label>
            <div className="sub-wraper flex justify-center items-center space-x-1">
              <input
                type="radio"
                name="gender"
                className="radio radio-primary"
                checked={gender === "Male"}
                onChange={() => setGender("Male")}
              />
              <div className="gen">Male</div>
            </div>
            <div className="sub-wraper flex justify-center items-center space-x-1">
              <input
                type="radio"
                name="gender"
                className="radio radio-primary"
                checked={gender === "Female"}
                onChange={() => setGender("Female")}
              />
              <div className="gen">Female</div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="h-10 w-full rounded-md flex justify-center items-center text-lg bg-blue-600 btn-sm mt-4 py-4 text-white"
              disabled={loading}
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </div>

          <a
            href="/login"
            className="text-sm text-center  w-full hover:underline mt-2 inline-block"
          >
            Already have an account?
            <span className=" hover:text-blue-600"> Log in</span>
          </a>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
