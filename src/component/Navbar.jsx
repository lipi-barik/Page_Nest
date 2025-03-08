import React from 'react';
import { FaCaretDown } from "react-icons/fa";
import Logo from '../assets/logo.png';
import { useAuth } from '../Auth/Authprovider';
import { NavLink,Link } from 'react-router-dom';
import Logout from '../component/Logout'
// import Darkmode from './Darkmode';
// import { FaMoon } from "react-icons/fa";
// import { FaSun } from "react-icons/fa";

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Best Seller",
        link: "/#services",
    },
];

const Dropdownlink = [
    {
        id: "1",
        name: "Order",
        link: "/#",
    },
    {
        id: "2",
        name: "Wishlist",
        link: "/#",
    },
    {
        id: "3",
        name: "Add to cart",
        link: "/#",
    },
];

const Navbar = () => {
  
    const {authUser}= useAuth();

    return (
        <div className='sh'>
            <div className='container py-3 sm:py-0 '>
                <div className='flex justify-between items-center'>
                    <div>
                        <a href='#' className='font-bold text-2xl sm:text-3xl flex'>
                            {/* <img src={Logo} alt='Pagenest' className='w-16 ml-8' /> */}
                        </a>
                    </div>
                    <div className='flex items-center font-semibold font-sans '>

                     {/* <div>
                      < Darkmode/>
                     </div> */}

                        <ul className="items-center gap-2 hidden sm:flex text-lg mr-6">
                            {
                                Menu.map((menu) => (
                                    <li key={menu.id}>
                                        <a href={menu.link}
                                            className='inline-block py-2 px-2 hover:text-yellow-700'>
                                            {menu.name}
                                        </a>
                                    </li>
                                ))
                            }

                            {/* dropdown section */}
                            <li className='relative cursor-pointer group'>
                                <NavLink to='/#' className='flex h-[72px] items-center  gap-[2px]'>
                                    Account
                                    <span>
                                        <FaCaretDown className="transition duration-300 group-hover:rotate-180" />
                                    </span>
                                </NavLink>

                                {/* dropdown link section */}
                                <div className='absolute left-2 z-[10] hidden group-hover:block text-black bg-white p-2'>
                                    <ul>
                                        {
                                            Dropdownlink.map((data) => (
                                                <li key={data.id}>
                                                    <a href={data.link}
                                                        className='inline-block w-full rounded-md p-2 hover:bg-amber-200'>
                                                        {data.name}
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </li>
                        </ul>
                      {authUser ? (
                            <>
                            <Logout/>
                            <div className="text-white">{authUser.name}</div>
                            </>
                        ) : (
                            <Link to="/login">
                            <button className="bg-neutral- rounded-md px-3 py-1 mr-2 hover:bg-amber-600">Log In</button>
                            </Link>
                        )}
                      </div>
                    </div>
                </div>
        </div>
    );
}

export default Navbar;
