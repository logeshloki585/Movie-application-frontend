import React from 'react'
import {useNavigate } from 'react-router-dom';

function FilterNavbar() {
     const history = useNavigate();
     // const signup = () => {
          
     // } 
  return (
    <div className='lg:px-14 flex justify-center  items-center bg-[#71797E] text-white h-12 w-full'>
       <div onClick={()=>history('/addmovie') } className=' block border-b font-medium md:px-4 py-0.5 cursor-pointer mx-2'>
            Add movie
       </div>
       <div onClick={()=>history('/updatemovie') } className=' block border-b font-medium px-4 py-0.5  cursor-pointer mx-2'>
            Update Movie Details
       </div>
       <div onClick={()=>history('/deletemovie') } className=' block border-b font-medium px-4 py-0.5  cursor-pointer mx-2'>
            Delete Movie
       </div>
    </div>
  )
}

export default FilterNavbar;
