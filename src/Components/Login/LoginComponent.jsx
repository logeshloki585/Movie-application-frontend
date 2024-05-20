import React, { useState } from 'react'
import axios from 'axios';
import Logo from '../../Assests/rentify.png';
import {Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { authActions } from '../../Store';
import { END_POINT } from '../../Assests/Container';



function LoginComponent() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value)
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendRequest = async () => {
    const specificEndpoint = '/user/login';
    const fullUrl = `${END_POINT}${specificEndpoint}`;
    const response = await axios.post(fullUrl, formData).catch((err) => console.log(err));
    const data = await response.data;
    return data;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const data = await sendRequest();
      console.log(data)
      if(data.message==="Successfully Logged In"){
        console.log(data.message)
      localStorage.setItem('id',data.user._id);
      console.log(data.user._id)
      dispatch(authActions.login())
      history("/")
      }else{
        alert(data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in. Please try again.');
    }
  };
  
  const signup = () => {
    history('/signup')
  } 
  

  return (
    <div>
      <section className="">
        <div className=" mt-32 md:-mt-12 flex flex-col items-center justify-center px-6  mx-auto md:h-screen lg:py-0">
            
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#131313] dark:border-gray-700">
                <div className='px-12 pt-2'>
                  <a href="#" className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
                      <img className="w-full h-34" src={Logo} alt="logo"/>  
                  </a>
                </div>
                <div className="p-2 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                autoComplete="username"
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com"
                                required
                              />
                           </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input
                              type="password"
                              name="password"
                              id="password"
                              autoComplete="current-password"
                              value={formData.password}
                              onChange={handleChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="••••••••"
                              required
                            />    
                        </div>
                        
                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >Sign in</button>
                        </form>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <a onClick={signup} ame="font-medium text-primary-600 hover:underline dark:text-primary-500" >Sign up</a>
                        </p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default LoginComponent;