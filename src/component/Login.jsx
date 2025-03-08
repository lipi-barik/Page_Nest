import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/Authprovider';
import Signup from './Signup';


const Login = () => {
  const { setAuthUser } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const userData = { name:"Janda",email };
    setAuthUser(userData);
    navigate("/");
  };

  return (
    <div className=" min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-0 bg-[url('/src/assets/pageimg.jpg')] bg-no-repeat bg-cover bg-center bg-fixed   relative w-full ">
      
      <div className="bg-gray-800/30 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md mx-auto md:mx-0 mt-8 md:mt-0 flex  flex-col">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div className="w-full">
            <label htmlFor="email" className="block text-zinc-100 font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="border border-gray-300  rounded-md px-4 py-2 w-full "
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="password" className="block text-zinc-100 font-medium">Password</label>
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
          <button type="submit" onClick={handleSubmit} className=" hover:bg-orange-100 text-black font-bold py-2 px-4 rounded-md w-full">
            LOGIN
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-zinc-100">Or</span>
        </div>
        <button  onClick={Signup} className=" hover:bg-orange-100 text-black font-bold py-2 px-4 rounded-md w-full mt-4">
          CREATE ACCOUNT
        </button>
      </div>
      {/* Left Side Image and Text */}
      {/* Left Side Image and Text - Hide on iPad and smaller screens */}
  <div className="hidden lg:flex flex-col items-center lg:w-1/3 px-6 relative w-full">
     <div className="absolute top-50 left-6 text-black z-10 w-full px-4 max-w-[80%] text-center lg:text-left">
    <h3 className="text-lg lg:text-2xl font-bold mb-2 break-words leading-tight">
      Welcome Back, Book Lover!
    </h3>
    <p className="text-sm lg:text-base leading-tight overflow-hidden break-words">
      Log in to continue exploring and <br className="hidden lg:block" /> enjoying your favorite reads.
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
};

export default Login;
