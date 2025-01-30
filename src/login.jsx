// import React from 'react'

// const Login = () => {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login

import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form 
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-xl max-w-md w-full border border-white/20"
      >
        <h2 className="text-center text-white text-2xl mb-6 font-bold drop-shadow">
          Login
        </h2>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2">Email</label>
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

        <div className="mb-6">
          <label htmlFor="password" className="block text-white mb-2">Password</label>
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

        <button
          type="submit"
          className="w-full p-3 bg-white/20 text-white font-bold rounded border border-white/30 hover:bg-white/30 transition-all duration-300 mb-4"
        >
          Log In
        </button>

        <div className="text-center">
          <a 
            href="#forgot-password" 
            className="text-white/80 hover:text-white hover:underline transition-colors duration-200"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;