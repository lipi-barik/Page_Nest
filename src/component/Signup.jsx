import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';


const Signup = () => {
  const[fullname,setFullName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., API call)
    console.log("Form submitted", { fullname, email, password });
    navigate("/");

  };

  return (
    <div className=" from-indigo-50 to-sky-50 min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-0 bg-[url('/src/assets/bgimg2.jpg')] bg-no-repeat bg-cover bg-center relative w-full ">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md mx-auto md:mx-0 mt-8 md:mt-0 flex flex-col">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className='w-full'>
            <label htmlFor="fullname" className="block text-black font-medium mb-2">Full Name</label>
            <input type='text' id="fullname" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="w-full">
            <label htmlFor="email" className="block text-black font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>


          <div className="mb-6">
            <label htmlFor="password" className="block text-black font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" onClick={handleSubmit}  className="bg-pink-200 hover:bg-rose-400 text-black font-bold py-2 px-4 rounded-md w-full border-Neutral-300 cursor-pointer">
            CREATE ACCOUNT
          </button>

        </form>

        <div className="text-center mt-4">
          <span className="text-gray-700">Or</span>  
        </div>

        <button   onClick={Login} className="bg-pink-200 hover:bg-rose-400  text-black font-bold py-2 px-4 rounded-md w-full  border-Neutral-300 mt-4 cursor-pointer ">
          LOGIN
        </button>
      </div>




      {/* Right side image  */}

      <div className="hidden lg:flex flex-col items-center lg:w-1/3 px-6 relative w-full">
  <div className="absolute top-50 left-6 text-black z-10 w-full px-4 max-w-[80%] text-center lg:text-left">
    <h3 className="text-lg lg:text-2xl font-bold mb-2 break-words leading-tight">
      Unlock a World of Stories
    </h3>
    <p className="text-sm lg:text-base leading-tight overflow-hidden break-words">
    Sign up to explore, shop, and enjoy <br className="hidden lg:block" /> a seamless reading experience.

    </p>
  </div>
  <img
    src="/src/assets/rightimg.jpg"
    alt="Unlock a World of Stories"
    className="rounded-lg shadow-xl w-full  size-[37rem] max-w-lg mt-5 object-cover"
  />
</div>

    </div>
  );
}

export default Signup;