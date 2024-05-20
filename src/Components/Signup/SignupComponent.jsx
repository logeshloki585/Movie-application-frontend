import React, { useState } from 'react'
import axios from 'axios';
import Logo from '../../Assests/rentify.png';
import {  useNavigate } from 'react-router-dom';
import { END_POINT } from '../../Assests/Container';

function SignupComponent() {
  const history = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '',firstName:'',lastName:'',phoneNumber:'' });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value)
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const specificEndpoint = '/user/signup';
      const fullUrl = `${END_POINT}${specificEndpoint}`;
      const response = await axios.post(fullUrl,formData);

      if(response.status === 201){
        if(response.data.message==="user already exists! Login instead"){
          alert("user already exist kindly Login!")
        }
        history('/login')
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const login = () => {
  
    history('/login')
  } 
  
  return (
    <div>
      <section className="mt-4">
        <div className=" mt-32 md:-mt-12 flex flex-col items-center justify-center px-6  mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-full h-8 mr-2" src={Logo} alt="logo"/>  
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#131313] dark:border-gray-700">
                <div className='px-12 pt-2'>
                  <a href="#" className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
                      <img className="w-full h-34" src={Logo} alt="logo"/>  
                  </a>
                </div>
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign up to create new account
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label for="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your first name</label>
                            <input
                                type="firstName"
                                name="firstName"
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="First Name"
                                required
                              />
                        </div>
                        <div>
                            <label for="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your last name</label>
                            <input
                                type="lastName"
                                name="lastName"
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Last Name"
                                required
                              />
                        </div>
                        <div>
                            <label for="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phoneNumber</label>
                            <input
                                type="phoneNumber"
                                name="phoneNumber"
                                id="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Phone Number"
                                required
                              />
                        </div>
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
                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >Sign up</button>
                    </form>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            already have account? <a onClick={login} className="font-medium text-primary-600 hover:underline dark:text-primary-500" >login</a>
                        </p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default SignupComponent;