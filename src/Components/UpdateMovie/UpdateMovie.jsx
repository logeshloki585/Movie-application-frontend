
import { END_POINT } from '../../Assests/Container';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";
import { MdCancel } from "react-icons/md";

function UpdateMovie() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [editPop,setEditPop] = useState(false)
    const [editData, setEditData] = useState({});

  const handleEdit = (item) => {
    console.log('Data of the clicked item:', item);
    setEditData(item)
    setEditPop(true)
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
                    <button value="12345" onClick={()=>handleEdit(item)} href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline text-black dark:hover:text-[18px] dark:hover:no-underline">Edit</button>
                </td>
            </tr>
            ))}
           
            
           
        </tbody>
    </table>
    
</div>
    {(editPop)?
     <div className='absolute px-12 my-12 top-34 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl md:m-12 bg-white border pb-5 border-2 border-black'>
        <div className='flex items-center mt-4 justify-between'>
            <h1 className='text-[28px] text-[#e63e3e]'>ADD MOVIE</h1>
            <button onClick={()=> setEditPop(false)}>
                <MdCancel className='h-6 w-6'/>
            </button>

        </div>
            <AddMovie item={editData}/>
        </div>:
        <></>
    }
   
    

    </div>
  )
}


function AddMovie(item) {
    const [movieDetails, setMovieDetails] = useState({
    title: '',
    director: '',
    releaseYear: '',
    language: '',
    description: '',
    country: "IND",
    runtime: '',
    rating: '',
    posterURL: '',
    verticalBanner: '',
    actors: [{ name: '', image: '' }] // Array to store actors' details
  });
  const history = useNavigate();
  useEffect(() => {
    if (item) {
      setMovieDetails(item.item);
    }
  }, [item]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMovieDetails({ ...movieDetails, [name]: value });
  };

    const handleActorDetailsChange = (index, e) => {
        const { name, value } = e.target;
        const updatedActors = [...movieDetails.actors];
        updatedActors[index][name] = value;
        setMovieDetails({ ...movieDetails, actors: updatedActors });
      };
    
      const handleAddActor = () => {
        setMovieDetails({
          ...movieDetails,
          actors: [...movieDetails.actors, { name: '', image: '' }]
        });
      };
    
      const handleRemoveActor = (index) => {
        const updatedActors = [...movieDetails.actors];
        updatedActors.splice(index, 1);
        console.log(movieDetails)
        setMovieDetails({ ...movieDetails, actors: updatedActors });
      };
    
      const handleSubmit = () => {

        const specificEndpoint = '/movie/update/';
        const fullUrl = `${END_POINT}${specificEndpoint}${movieDetails._id}`;
        console.log(fullUrl)
        axios.put(fullUrl,{updateData: movieDetails})
              .then(response => {
                console.log('Movie added successfully!', response.data);
              }).then(()=>{
                alert("MOVIE ADDED SUCCESSFULLY!!")
                history('/')
            })
              .catch(error => {
                console.error('Error adding movie:', error);
              });
      };
  return (
    <div className='flex items-center justify-center mt-6'>
        <div class="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            
            <div class="mt-8 mb-2 w-80  sm:w-96 md:w-full">
                <div class="mb-4 flex flex-col md:flex-row gap-6">
                    <div className='mb-4 flex flex-col gap-6'>
                    <div className='flex'>
                        {/* movie title */}
                            <div class="relative h-11 w-full min-w-[200px]">
                                <input
                                class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#e63e3e] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeHolder=" "
                                name='title'
                                value = {movieDetails.title}
                                onChange={handleInputChange}
                                />
                                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#e63e3e] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#e63e3e] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#e63e3e] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                MOVIE TITLE
                                </label>
                            </div>
                        {/* Release yeara */}
                            <div class="relative h-11 w-full min-w-[200px]">
                                <input
                                type='number'
                                required
                                class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#e63e3e] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeHolder=" "
                                name='releaseYear'
                                value = {movieDetails.releaseYear}
                                onChange={handleInputChange}
                                />
                                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#e63e3e] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#e63e3e] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#e63e3e] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                RELEASE YEAR
                                </label>
                            </div>
                    </div>


                    <div className='flex'>
                        {/* language  */}
                <div class="relative h-11 w-full min-w-[200px]">
                    <input
                    required
                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#e63e3e] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                    name='language'
                    value = {movieDetails.language}
                    onChange={handleInputChange}
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#e63e3e] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#e63e3e] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#e63e3e] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    LANGUAGE
                    </label>
                </div>
              {/* rating  */}
              <div class="relative h-11 w-full min-w-[200px]">
                    <input
                    required
                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#e63e3e] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                    name='rating'
                    value = {movieDetails.rating}
                    onChange={handleInputChange}
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#e63e3e] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#e63e3e] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#e63e3e] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    RATING
                    </label>
                </div>
                    </div>

{/* description  */}
                <div class="relative h-21 w-full min-w-[200px]">
                    <input
                    required
                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#e63e3e] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                    name='description'
                    value = {movieDetails.description}
                    onChange={handleInputChange}
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#e63e3e] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#e63e3e] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#e63e3e] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    DESCRIPTION
                    </label>
                </div>
  
{/* runtime  */}
<div class="relative h-11 w-full min-w-[200px]">
                    <input
                    required
                    type='number'
                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#e63e3e] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                    name='runtime'
                    value = {movieDetails.runtime}
                    onChange={handleInputChange}
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#e63e3e] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#e63e3e] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#e63e3e] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    RUNTIME
                    </label>
                </div>
{/* director  */}
                <div class="relative h-11 w-full min-w-[200px]">
                    <input
                    required
                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#e63e3e] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                    name='director'
                    value = {movieDetails.director}
                    onChange={handleInputChange}
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#e63e3e] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#e63e3e] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#e63e3e] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    DIRECTOR NAME
                    </label>
                </div>

                <div className=' items-center'>
                    <div className='h-24 bg-[#D3D3D3] w-full mb-4'>
                        <img className='h-full w-full' src={movieDetails.verticalBanner} alt="poster" />
                    </div>
                    <div class="relative h-11 w-full min-w-[200px]">
                        
                    <input
                    required
                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#e63e3e] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                    type="text"
                    name="verticalBanner"
                    value={movieDetails.verticalBanner}
                    onChange={handleInputChange}
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#e63e3e] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#e63e3e] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#e63e3e] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                     MOVIE BANNER
                    </label>
                    </div>
                </div>
                    </div>

        <div className='mb-4 flex flex-col gap-6'>
        {movieDetails.actors.map((actor, index) => (
        <div className='flex  flex-col  md:flex-row' key={index}>
           <div class="relative h-11 w-full min-w-[200px]">
                    <input
                    required
                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#e63e3e] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                    type="text"
                    name="name"
                    value={actor.name}
                    onChange={(e) => handleActorDetailsChange(index, e)}
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#e63e3e] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#e63e3e] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#e63e3e] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    ACTOR'S NAME
                    </label>
                </div>
               
           <div class="relative h-11 w-full min-w-[200px] mt-3 md:mt-0">
                    <input
                    required
                    class="peer mx-1 h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#e63e3e] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                    type="text"
                    name="image"
                    value={actor.image}
                    onChange={(e) => handleActorDetailsChange(index, e)}
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#e63e3e] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#e63e3e] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#e63e3e] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    ACTOR'S NAME URL
                    </label>
                </div>
            <div className='flex justify-end mt-2 md:mt-0'>
            <button  onClick={() => handleRemoveActor(index)}><MdDeleteForever className='h-8 w-8'/></button>
            </div>
        </div>
      ))}
      <button className='' onClick={handleAddActor}>Add Actor</button>
                
                <hr></hr>
                <p>Add Poster's</p>
                
                <div className='flex items-center'>
                    <div className='h-36 bg-[#D3D3D3] w-28 mr-2'>
                        <img className='h-full' src={movieDetails.posterURL} alt="poster" />
                    </div>
                    <div class="relative h-11 w-full min-w-[200px]">
                        
                    <input
                    required
                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#e63e3e] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                    type="text"
                    name="posterURL"
                    value={movieDetails.posterURL}
                    onChange={handleInputChange}
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#e63e3e] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#e63e3e] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#e63e3e] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                     MOVIE POSTER
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
                Update
                </button>
            </div>
        </div>
    </div>
  )
}

export default UpdateMovie;