
import { END_POINT } from '../../Assests/Container';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdCancel } from "react-icons/md";
import {useNavigate } from 'react-router-dom';

function DeleteMovie() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [deletePop,setDeletePop] = useState(false)
    const [deleteData, setdeleteData] = useState({});
    const history = useNavigate();

  const handleDelete = (item) => {
    setdeleteData(item)
    setDeletePop(true)
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const specificEndpoint = '/movie/getMovie';
        const fullUrl = `${END_POINT}${specificEndpoint}`;

        const response = await axios.get(fullUrl);
        setMovies(response.data.movies);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleDeleteMovie = (id) => {
    const specificEndpoint = '/movie/delete/';
        const fullUrl = `${END_POINT}${specificEndpoint}${id}`;
        console.log(fullUrl)
        axios.delete(fullUrl)
              .then(response => {
                console.log('Movie added successfully!', response);
              }).then(()=>{
                alert("MOVIE DELETED SUCCESSFULLY!!")
                history('/')
            })
              .catch(error => {
                console.error('Error adding movie:', error);
              });
  };

  return (
    <div className='relative p-2 md:p-12 '>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div className='flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4'>
          <div className='class flex items-center pt-3 md:pt-0'>
          <h1 className='text-[28px] text-[#e63e3e]'>EDIT MOVIE</h1>
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
              placeholder='Search for Movie'
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
                    TITLE
                </th>
                <th scope="col" class="px-6 py-3">
                    YEAR
                </th>
                <th scope="col" class="px-6 py-3">
                    LANGUAGE
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
                {filteredMovies.map((item, index) => (
                <tr key={index} class="bg-white border-b dark:bg-white-800 dark:border-gray-700 hover:bg-[#e63e3e] dark:hover:bg-[#e63e3e] dark:hover:text-white">
                
                <td  class="px-6 py-4 font-medium  whitespace-nowrap ">
                    {index+1}
                </td>
                <td class="px-6 py-4 uppercase">
                    {item.title}
                </td>
                <td class="px-6 py-4">
                    {item.releaseYear}
                </td>
                <td class="px-6 py-4 uppercase">
                {item.language}
                </td>
                <td class="px-6 py-4">
                    <button value="12345" onClick={()=>handleDelete(item)} href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline text-black dark:hover:text-[18px] dark:hover:no-underline">DELETE</button>
                </td>
            </tr>
            ))}
           
            
           
        </tbody>
    </table>
    
</div>
    {(deletePop)?
     <div className='absolute px-12 my-12 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl md:m-12 bg-white border pb-5 border-2 border-black'>
        <div className='flex items-center mt-4 justify-between'>
            <h1 className='text-[28px] text-[#e63e3e]'>ADD MOVIE</h1>
            <button onClick={()=> setDeletePop(false)}>
                <MdCancel className='h-6 w-6'/>
            </button>
          </div >
           <div className='min-w-[300px]'>
              <p className='font-bold '>ARE YOU SURE!</p>
              <p className=' uppercase text-[18px] '>DO YOU WANT TO DELETE <p className='font-bolder'>{deleteData.title+" "} </p> MOVIE DETAILS</p>
           </div>
           <div className='flex justify-end'>
              <button onClick={()=> handleDeleteMovie(deleteData._id)} className='bg-[#e63e3e] text-white px-4 py-1 mt-2 rounded hover:bg-[#cf3737]' >delete</button>
           </div>
        </div>:
        <></>
    }
   
    

    </div>
  )
}




export default DeleteMovie;