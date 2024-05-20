import React from 'react'
import {useNavigate } from 'react-router-dom';

function FilterNavbar() {
     const history = useNavigate();
     // const signup = () => {
          
     // } 
  return (
    <div className=' lg:px-14  flex justify-center  items-center  bg-[white] text-white h-12 w-full'>
       <div onClick={()=>history('/addProduct') } className=' block border-b text-black font-medium md:px-4 py-0.5 cursor-pointer mx-2'>
            ADD HOUSE
       </div>
       <div onClick={()=>history('/updateproduct') } className=' block border-b text-black font-medium px-4 py-0.5  cursor-pointer mx-2'>
            UPTADE HOUSE DETAILS
       </div>
       <div onClick={()=>history('/deleteproduct') } className=' block border-b text-black font-medium px-4 py-0.5  cursor-pointer mx-2'>
            DETELE HOUSE
       </div>
    </div>
  )
}

export default FilterNavbar;
