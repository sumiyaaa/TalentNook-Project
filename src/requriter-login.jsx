// import React from 'react'

// const RecruiterLogin = () => {
//   return (
//     <div>RecruiterLogin</div>
//   )
// }

// export default RecruiterLogin
import React, { useState } from "react";

const RecruiterLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recruiter Email:", email, "Password:", password);
    // You can add API call logic here
  };

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-xl max-w-md w-full border border-white/20"
      >
        <h2 className="text-center text-white text-2xl mb-6 font-bold drop-shadow">
          Recruiter Login
        </h2>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-white mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            placeholder="Enter your password"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full p-3 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition-all duration-300 mb-4"
        >
          Log In
        </button>

        {/* Forgot Password */}
        <div className="text-center mb-4">
          <a
            href="#forgot-password"
            className="text-white/80 hover:text-white hover:underline transition-colors duration-200"
          >
            Forgot Password?
          </a>
        </div>

        {/* Signup Button */}
        <div className="text-center">
          <p className="text-white/80">Don't have an account?</p>
          <a
            href="/requriter-signup"
            className="mt-2 inline-block w-full p-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition-all duration-300"
          >
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
};

export default RecruiterLogin;
