import React from 'react'

function FilterNavbar() {

  return (
    <div className='lg:px-14 flex justify-center  items-center bg-[#71797E] text-white h-12 w-full'>
       <div className=' block border-b font-medium md:px-4 py-0.5 cursor-pointer mx-2'>
            Add movie
       </div>
       <div className=' block border-b font-medium px-4 py-0.5  cursor-pointer mx-2'>
            Update Movie Details
       </div>
       <div className=' block border-b font-medium px-4 py-0.5  cursor-pointer mx-2'>
            Delete Movie
       </div>
    </div>
  )
}

export default FilterNavbar;
