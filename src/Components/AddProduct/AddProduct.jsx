import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import axios from 'axios';
import { END_POINT } from '../../Assests/Container';
import {useNavigate } from 'react-router-dom';

function AddProduct() {
    const [productDetails, setProductDetails] = useState({
    type: '',
    bedroom: 0,
    bathroom: 0,
    bachelors: '',
    facing: '',
    posterURL: '',
    description: '',
    likes: 0,
    user: '',
    address: '',
  });
  const history = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
    console.log(value)
  };
    
      const handleSubmit = () => {
        const specificEndpoint = '/product/addProduct';
        const fullUrl = `${END_POINT}${specificEndpoint}`;
        const id = localStorage.getItem('id');
        console.log(id);
        setProductDetails({ ...productDetails,'user':id});
        axios.post(fullUrl, productDetails)
              .then(response => {
                console.log(response.data);
              }).then(()=>{
                alert("Product ADDED SUCCESSFULLY!!")
                history('/')
            })
              .catch(error => {
                console.error('Error adding product:', error);
              });
      };
  return (
    <div className='flex items-center justify-center pt-6 '>
        <div class="relative flex flex-col rounded-xl px-12 py-4 bg-white bg-clip-border text-gray-700 shadow-none">
        <h1 className='text-[28px] text-[#e63e3e]'>ADD RENTING PLACE</h1>
            <div class="mt-8 mb-2 w-80  sm:w-96 md:w-full">
                <div class="mb-4 flex flex-col gap-6">

{/* PRODUCT TYPE */}
                <div class="relative h-11 w-full min-w-[200px]">
                    <input
                    required
                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#e63e3e] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                    name='type'
                    value = {productDetails.type}
                    onChange={handleInputChange}
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#e63e3e] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#e63e3e] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#e63e3e] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    HOUSING TYPE
                    </label>
                </div>
{/*bedroom */}
                <div class="relative h-11 w-full min-w-[200px]">
                    <input
                    type='number'
                    required
                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#e63e3e] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                    name='bedroom'
                    value = {productDetails.bedroom}
                    onChange={handleInputChange}
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#e63e3e] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#e63e3e] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#e63e3e] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    NUMBER OF BEDROOM
                    </label>
                </div>
{/* bathroom  */}
                <div class="relative h-11 w-full min-w-[200px]">
                    <input
                    type='number'
                    required
                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#e63e3e] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                    name='bathroom'
                    value = {productDetails.bathroom}
                    onChange={handleInputChange}
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#e63e3e] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#e63e3e] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#e63e3e] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    NUMBER OF BATHROOM
                    </label>
                </div>

{/* bachelors  */}
              <div class="relative h-11 w-full min-w-[200px]">
                  <select
                      required
                      class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#e63e3e] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      name='bachelors'
                      value={productDetails.bachelors}
                      onChange={handleInputChange}
                  >
                      <option value="" disabled selected> </option>
                      <option value="Allowed">Allowed</option>
                      <option value="Not Allowed">Not Allowed</option>
                  </select>
                  <label class="capitalize before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#e63e3e] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#e63e3e] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#e63e3e] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  BACHELORS
                  </label>
              </div>

                {/* facing  */}
                <div class="relative h-11 w-full min-w-[200px]">
                    <select
                        required
                        class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#e63e3e] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        name="facing"
                        value={productDetails.facing}
                        onChange={handleInputChange}
                    >
                        <option value="" disabled selected hidden></option>
                        <option value="NORTH">NORTH</option>
                        <option value="SOUTH">SOUTH</option>
                        <option value="EAST">EAST</option>
                        <option value="WEST">WEST</option>
                        <option value="NORTH-EAST">NORTH-EAST</option>
                        <option value="NORTH-WEST">NORTH-WEST</option>
                        <option value="SOUTH-EAST">SOUTH-EAST</option>
                        <option value="SOUTH-WEST">SOUTH-WEST</option>
                    </select>
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#e63e3e] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#e63e3e] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#e63e3e] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        FACING
                    </label>
                </div>

{/* description  */}
              <div class="relative w-full min-w-[200px]">
                  <textarea
                      required
                      class="peer h-32 w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#e63e3e] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 resize-none"
                      placeholder=" "
                      name="description"
                      value={productDetails.description}
                      onChange={handleInputChange}
                  ></textarea>
                  <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#e63e3e] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#e63e3e] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#e63e3e] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      DESCRIPTION
                  </label>
              </div>

{/* address  */}
              <div class="relative w-full min-w-[200px]">
                  <textarea
                      required
                      class="peer h-32 w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#e63e3e] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 resize-none"
                      placeholder=" "
                      name="address"
                      value={productDetails.address}
                      onChange={handleInputChange}
                  ></textarea>
                  <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#e63e3e] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#e63e3e] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#e63e3e] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      ADDRESS
                  </label>
              </div>



                <hr></hr>
                <p>Add Poster's</p>
                
                <div className='flex items-center'>
                    <div className='h-36 bg-[#D3D3D3] w-28 mr-2'>
                        <img className='h-full' src={productDetails.posterURL} alt="poster" />
                    </div>
                    <div class="relative h-11 w-full min-w-[200px]">
                        
                    <input
                    required
                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#e63e3e] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                    type="text"
                    name="posterURL"
                    value={productDetails.posterURL}
                    onChange={handleInputChange}
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#e63e3e] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#e63e3e] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#e63e3e] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                     HOUSE POSTER
                    </label>
                    </div>
                </div>


                </div>
            
                <button
                class="mt-6 block w-full select-none rounded-lg bg-[#e63e3e] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#e63e3e]/20 transition-all hover:shadow-lg hover:shadow-[#e63e3e]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
                onClick={handleSubmit}
                >
                ADD RENTAL PRODUCT
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddProduct;