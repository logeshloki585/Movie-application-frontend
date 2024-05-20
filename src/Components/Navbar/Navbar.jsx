import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";
import React from 'react';
import Logo from '../../Assests/rentify.png';
import Avatar from '../../Assests/avatar.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authActions } from '../../Store';

const Navbar = () => {
    const [log, setLog] = useState(false);
    const dispatch = useDispatch();
    const isLonggedIn = useSelector((state) => state.isLoggedIn);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const history = useNavigate();

    useEffect(() => {
      setLog(isLonggedIn);
      console.log(isLonggedIn)
    }, [isLonggedIn]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log(isMobileMenuOpen)
  };


  const logout = () => {
    dispatch(authActions.logout());
    localStorage.removeItem("id");
    history('/login');
    setLog(false)

  };

  const login = () => {
    history('/login')
  } 
  
  const signup = () => {
    history('/signup')
  } 

  return (
    <header class="bg-[#131313] lg:px-16 sticky top-0 px-4 bg-white flex flex-wrap items-center py-2 shadow-md">
    <div class="flex-1 flex justify-between items-center">
        <a onClick={()=>history('/') }  class="text-xl cursor-pointer">
            <img src={Logo} alt="logo" className='h-14'/>
        </a>
    </div>

    <label for="menu-toggle" onClick={toggleMobileMenu} class="pointer-cursor md:hidden block">
      <svg class="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input class="hidden" type="checkbox" id="menu-toggle" />

    <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
            <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                {(log)?<>
                    <img src={Avatar} alt="logo" className='h-11 rounded-[50px] mr-4'/>
                <li><a  onClick={logout}  class="cursor-pointer md:py-2 md:px-4 rounded-[50px] bg-[#EEFF5F]  px-0 block text-[#373737] font-medium" >Logout</a></li>
                </>
                :
                <>
                <li>
                    <a onClick={signup} class="mr-4 cursor-pointer md:py-2 md:px-4 rounded-[50px]  px-0 block border bg-[white]" >Sign in</a>
                </li>
                <li><a  onClick={login}  class=" cursor-pointer md:py-2 md:px-4 rounded-[50px] bg-[#EEFF5F]  px-0 block text-[#373737] font-medium" >Log in</a></li>
                </>
                }
                
                
            </ul>
        </nav>
    </div>
    {
        (isMobileMenuOpen)?
        <div class="items-center justify-between w-full transition duration-300 ease-in-out lg:hidden lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="md:flex  items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                {(log)?<>
                    <li className=' flex items-center  pb-4 mb-4 border-b border-gray-300'>
                        <div className='flex items-center '>
                        <img src={Avatar} alt="logo" className='h-12 rounded-[50px]'/> 
                        <p className='ml-4 cursor-pointer text-lg font-poppins font-medium text-black'>Name</p>
                        </div>
                    </li>
                    <li className=' flex items-center  pb-4 mb-4 border-b border-gray-300'>
                    <div>
                        <a  onClick={logout} class="mr-4 cursor-pointer py-3 px-6 rounded-[50px]  px-0 block border bg-[#e00f0f]" >Logout</a>
                    </div>
                    </li>
                </>
                :
                <>
                <li className='flex '>
                    <a  onClick={signup} class="mr-4 cursor-pointer py-3 px-6 rounded-[50px]  px-0 block border " >Sign in</a>
                    <button onClick={login} class="py-3 cursor-pointer px-6 rounded-[50px] bg-[#e00f0f]  px-0 block text-white" >Log in</button>
                </li>
                </>
                }    
            </ul>
        </div>:
        <></>
    }
    

</header>
  );
};

export default Navbar;
