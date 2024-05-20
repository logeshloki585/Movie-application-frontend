
import { END_POINT } from '../../Assests/Container';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";
import { MdCancel } from "react-icons/md";

function UpdateProduct() {
    const [products, setProduct] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [editPop,setEditPop] = useState(false)
    const [editData, setEditData] = useState({});

  const handleEdit = (item) => {
    console.log('Data of the clicked item:', item);
    setEditData(item)
    setEditPop(true)
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const specificEndpoint = '/product/getAllProductByUser/';
        const id = localStorage.getItem('id');
        const fullUrl = `${END_POINT}${specificEndpoint}${id}`;

        const response = await axios.get(fullUrl);
        setProduct(response.data.products);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((item) =>
    item.type.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className='relative p-2 md:p-12 '>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div className='flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4'>
          <div className='class flex items-center pt-3 md:pt-0'>
          <h1 className='text-[28px] text-[#e63e3e]'>EDIT RENTAL PRODUCT</h1>
          </div>
          <label for='table-search' className='sr-only'>
            Search
          </label>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none'>
              <svg
                className='w-5 h-5 text-gray-500 dark:text-gray-400'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
            <input
              type='text'
              id='table-search'
              className='block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full md:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Search for product'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
    <table class="w-full text-sm text-left rtl:text-right text-black-500 dark:text-black-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   NO.
                </th>
                <th scope="col" class="px-6 py-3">
                    TYPE
                </th>
                <th scope="col" class="px-6 py-3">
                    BEDROOM
                </th>
                <th scope="col" class="px-6 py-3">
                    BATHROOM
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
                {filteredProducts.map((item, index) => (
                <tr key={index} class="bg-white border-b dark:bg-white-800 dark:border-gray-700 hover:bg-[#e63e3e] dark:hover:bg-[#e63e3e] dark:hover:text-white">
                
                <td  class="px-6 py-4 font-medium  whitespace-nowrap ">
                    {index+1}
                </td>
                <td class="px-6 py-4 uppercase">
                    {item.type}
                </td>
                <td class="px-6 py-4">
                    {item.bedroom}
                </td>
                <td class="px-6 py-4 uppercase">
                {item.bathroom}
                </td>
                <td class="px-6 py-4">
                    <button value="12345" onClick={()=>handleEdit(item)} href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline text-black dark:hover:text-[18px] dark:hover:no-underline">Edit</button>
                </td>
            </tr>
            ))}
           
            
           
        </tbody>
    </table>
    
</div>
    {(editPop)?
     <div className='absolute px-12 my-12 top-64 md:top-3/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl md:m-12 bg-white border pb-5 border-2 border-black'>
        <div className='flex items-center mt-12 justify-between'>
            <h1 className='text-[28px] text-[#e63e3e]'>ADD PRODUCT</h1>
            <button onClick={()=> setEditPop(false)}>
                <MdCancel className='h-6 w-6'/>
            </button>

        </div>
            <AddProduct item={editData}/>
        </div>:
        <></>
    }
   
    

    </div>
  )
}


function AddProduct(item) {
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
  useEffect(() => {
    if (item) {
      setProductDetails(item.item);
    }
  }, [item]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

    
      const handleSubmit = () => {

        const specificEndpoint = '/product/updateProduct/';
        const fullUrl = `${END_POINT}${specificEndpoint}${productDetails._id}`;
        console.log(fullUrl)
        axios.put(fullUrl,{updateData: productDetails})
              .then(response => {
                console.log('PRODUCT added successfully!', response.data);
              }).then(()=>{
                alert("PRODUCT UPDATED SUCCESSFULLY!!")
                history('/')
            })
              .catch(error => {
                console.error('Error adding PRODUCT:', error);
              });
      };
  return (
    <div className='flex items-center justify-center  '>
        <div class="relative flex flex-col rounded-xl px-12  bg-white bg-clip-border text-gray-700 shadow-none">
            <div class="mt-8 mb-2 w-80  sm:w-96 md:w-full">
                <div class="mb-4 flex flex-row gap-6">

{/* 1 */}
              <div className='mb-4 flex flex-col gap-6'>
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
              </div>
{/* 2 */}
              <div>
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

export default UpdateProduct;