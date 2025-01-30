import React, { useState } from 'react'

const ReqcriterSignup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would send the signup data to the server
    console.log("Name:", name, "Email:", email, "Password:", password)
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-xl max-w-md w-full border border-white/20"
      >
        <h2 className="text-center text-white text-2xl mb-6 font-bold drop-shadow">
          Reqcriter Signup
        </h2>

        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-white mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            placeholder="Enter your name"
          />
        </div>

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
        <div className="mb-4">
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

        {/* Confirm Password Input */}
        <div className="mb-6">
          <label htmlFor="confirm-password" className="block text-white mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full p-2 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            placeholder="Confirm your password"
          />
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition-all duration-300 mb-4"
        >
          Sign Up
        </button>

        {/* Already have an account */}
        <div className="text-center">
          <p className="text-white/80">Already have an account?</p>
          <a
            href="/reqcriter-login"
            className="mt-2 inline-block w-full p-3 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition-all duration-300"
          >
            Log In
          </a>
        </div>
      </form>
    </div>
  )
}

export default ReqcriterSignup
