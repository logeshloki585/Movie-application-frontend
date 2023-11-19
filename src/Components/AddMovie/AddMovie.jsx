import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import axios from 'axios';
import { END_POINT } from '../../Assests/Container';
import {useNavigate } from 'react-router-dom';

function AddMovie() {
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
        const specificEndpoint = '/movie/add';
        const fullUrl = `${END_POINT}${specificEndpoint}`;
        axios.post(fullUrl, movieDetails)
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
        <h1 className='text-[28px] text-[#e63e3e]'>ADD MOVIE</h1>
            <div class="mt-8 mb-2 w-80  sm:w-96 md:w-full">
                <div class="mb-4 flex flex-col gap-6">

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

{/* description  */}
<div class="relative h-11 w-full min-w-[200px]">
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
                {/* description  */}
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

    {movieDetails.actors.map((actor, index) => (
        <div className='flex' key={index}>
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
               
           <div class="relative h-11 w-full min-w-[200px]">
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
          <button onClick={() => handleRemoveActor(index)}><MdDeleteForever className='h-8 w-8'/></button>
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
            
                <button
                class="mt-6 block w-full select-none rounded-lg bg-[#e63e3e] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#e63e3e]/20 transition-all hover:shadow-lg hover:shadow-[#e63e3e]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
                onClick={handleSubmit}
                >
                ADD MOVIE
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddMovie;