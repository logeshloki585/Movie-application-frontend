import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { END_POINT } from '../../Assests/Container';
import {useNavigate } from 'react-router-dom';


function AllProducts() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const [uniqueBedroom, setUniqueBedroom] = useState([]);
    const [uniqueBachelors, setUniqueBachelors] = useState([]);
    const [uniqueFacing, setUniqueFacing] = useState([]);
    const [uniqueBathroom, setUniqueBathroom] = useState([]);

    const [filterOption, setFilteredOption] = useState({ actor: '', director: '', year: null, language: '' });
    const [isFilter, setIsFilter] = useState(false);
    const history = useNavigate();

    const handleSelectChange = (event) => {
        let { name, value } = event.target;
        if (name ==='bedroom' ||name ==='bathroom'){
            value = parseInt(value)
        }
        setFilteredOption({ ...filterOption, [name]:  value});
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const specificEndpoint = '/product/getAllProductExclude/';
                const id = localStorage.getItem('id');
                const fullUrl = `${END_POINT}${specificEndpoint}${id}`;
                const response = await axios.get(fullUrl); 
                setProducts(response.data.products);

                const bedroom = [...new Set(response.data.products.map(product => product.bedroom))];
                const bachelors = [...new Set(response.data.products.map(product => product.bachelors))];
                const facing = [...new Set(response.data.products.map(product => product.facing))];
                const bathroom = [...new Set(response.data.products.map(product => product.bathroom))];

                setUniqueBedroom(bedroom);
                setUniqueBachelors(bachelors);
                setUniqueFacing(facing);
                setUniqueBathroom(bathroom);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProducts();
    }, []);

    const filterProducts = (selection) => {
        if (!selection.bedroom && !selection.bachelors && !selection.facing && !selection.bathroom) {
            setFilteredProducts(products);
            setIsFilter(false);
            return;
        }
        console.log(selection)
        let filtered = products;

        if (selection.bedroom) {
            filtered = filtered.filter(product => selection.bedroom === product.bedroom);
        }
        if (selection.bachelors) {
            filtered = filtered.filter(product => selection.bachelors === product.bachelors);
        }
        if (selection.facing) {
            filtered = filtered.filter(product => selection.facing === product.facing);
        }
        if (selection.bathroom) {
            filtered = filtered.filter(product => selection.bathroom === product.bathroom);
        }
       console.log(filtered)
        setFilteredProducts(filtered);
        setIsFilter(true);
    };

    useEffect(() => {
        filterProducts(filterOption);
    }, [filterOption]);

    const openProduct = (id)  => {
       
        history(`/product/${id}`);
    }

    return (
        <div className=' h-auto lg:px-16 md:flex'>
            <div className='min-w-[400px] px-4'>
                <div className="space-y-2 ">
                        <h1 className='text-[28px] text-[#e63e3e]'>FILTER</h1>
                {/* bedroom */}
                        <details
                            className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                        >
                            <summary
                            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                            >
                            <span className="text-sm font-medium"> BEDROOM </span>

                            <span className="transition group-open:-rotate-180">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                                </svg>
                            </span>
                            </summary>

                            <div className="border-t border-gray-200 bg-white">
                            <header className="flex items-center justify-between p-4">
                                <span className="text-sm text-gray-700"> Filter product based on bedroom</span>
                            </header>

                            <ul className="space-y-1 border-t border-gray-200 p-4">
                            <select name='bedroom'  className='w-full border border-gray-300 p-2 rounded-[10px] '
                            value={filterOption.bedroom} onChange={handleSelectChange}
                            >   
                                <option  value=''>All Availables</option>
                                {uniqueBedroom.map((e)=>(
                                <option   value={e}>{e}</option>
                                ))}
                                
                            </select>
                            </ul>
                            </div>
                        </details>
{/* bachelors */}
                        <details
                            className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                        >
                            <summary
                            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                            >
                            <span className="text-sm font-medium"> BACHELORS </span>

                            <span className="transition group-open:-rotate-180">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                                </svg>
                            </span>
                            </summary>

                            <div className="border-t border-gray-200 bg-white">
                            <header className="flex items-center justify-between p-4">
                                <span className="text-sm text-gray-700"> Filter product based on bachelors permission</span>
                            </header>

                            <ul className="space-y-1 border-t border-gray-200 p-4">
                            <select name='bachelors' className='w-full border border-gray-300 p-2 rounded-[10px] '
                            value={filterOption.bachelors} onChange={handleSelectChange}
                            >   
                                <option  value=''>Permission</option>
                                {uniqueBachelors.map((e)=>(
                                <option   value={e}>{e}</option>
                                ))}
                                
                            </select>
                            </ul>
                            </div>
                        </details>
         {/* facing */}
                        <details
                            className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                        >
                            <summary
                            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                            >
                            <span className="text-sm font-medium"> FACING </span>

                            <span className="transition group-open:-rotate-180">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                                </svg>
                            </span>
                            </summary>

                            <div className="border-t border-gray-200 bg-white">
                            <header className="flex items-center justify-between p-4">
                                <span className="text-sm text-gray-700"> Filter product based on house facing</span>
                            </header>

                            <ul className="space-y-1 border-t border-gray-200 p-4">
                            <select name='facing' className='w-full border border-gray-300 p-2 rounded-[10px] '
                            value={filterOption.facing} onChange={handleSelectChange}
                            >   
                                <option  value={null}>All AVAILABLES</option>
                                {uniqueFacing.map((e)=>(
                                <option   value={e}>{e}</option>
                                ))}
                            </select>
                            </ul>
                            </div>
                        </details>
{/* bathroom */}
                        <details
                            className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                        >
                            <summary
                            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                            >
                            <span className="text-sm font-medium"> BATHROOM </span>

                            <span className="transition group-open:-rotate-180">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                                </svg>
                            </span>
                            </summary>

                            <div className="border-t border-gray-200 bg-white">
                            <header className="flex items-center justify-between p-4">
                                <span className="text-sm text-gray-700"> Filter product based on bathroom</span>
                            </header>

                            <ul className="space-y-1 border-t border-gray-200 p-4">
                            <select name='bathroom' className='w-full border border-gray-300 p-2 rounded-[10px] '
                            value={filterOption.bathroom} onChange={handleSelectChange}
                            >   
                                <option  value=''>All AVAILABLES</option>
                                {uniqueBathroom.map((e)=>(
                                <option   value={e}>{e}</option>
                                ))}
                            </select>
                            </ul>
                            </div>
                        </details>
                </div>
            </div>
            <div>
                    <h1 className='text-[28px] ml-4 text-[#e63e3e]'>RENTALS</h1>
                    <div className='flex flex-wrap'>
                    {isFilter ? (
                        filteredProducts.map((e) => (
                            <div className='h-[320px] w-[260px] m-4 mb-8 relative'>
                                <img className='h-full' src={e.posterURL} alt={e.type} />
                                <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-white px-1 py-0.5">
                                    {e.type} | {e.facing} | likes - {e.likes} 
                                </div>
                                <div className='text-[14px] '>bachelors - {e.bachelors}</div>
                                <div className="absolute text-sm font-bold bg-[#e00f0f] top-0 right-0 px-2  m-2 rounded-[50px] bg-opacity-70 text-white px-1 py-0.5">
                                     {e.bedroom} BHK
                                </div>
                                <div className="absolute text-sm font-bold  top-0 left-0   h-8 w-12 m-1 rounded-[50px] bg-opacity-70 text-white px-1 py-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 98" id="like"><g><path d="M66.1,16.3A22.2,22.2,0,0,0,49,24.2a21.9,21.9,0,0,0-17.1-7.9A22.4,22.4,0,0,0,9.5,38.7c0,21.2,37,41.9,38.5,42.7a1.8,1.8,0,0,0,2,0c1.5-.8,38.5-21.2,38.5-42.7A22.4,22.4,0,0,0,66.1,16.3ZM49,77.4C43.2,74,13.5,55.9,13.5,38.7A18.4,18.4,0,0,1,31.9,20.3a18,18,0,0,1,15.4,8.3,2.1,2.1,0,0,0,3.4,0A18.4,18.4,0,0,1,84.5,38.7C84.5,56.1,54.8,74.1,49,77.4Z"></path></g></svg>
                                </div>
                            </div>
                           ))
                           ) :(
                            products.map((e) => (
                                <div className='h-[320px] w-[260px] m-4 mb-8 relative cursor-pointer' onClick={()=>openProduct(e._id)}>
                                <img className='h-full' src={e.posterURL} alt={e.type} />
                                <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-white px-1 py-0.5">
                                    {e.type} | {e.facing} | likes - {e.likes} 
                                </div>
                                <div className='text-[14px] '>bachelors - {e.bachelors}</div>
                                <div className="absolute text-sm font-bold bg-[#e00f0f] top-0 right-0 px-2  m-2 rounded-[50px] bg-opacity-70 text-white px-1 py-0.5">
                                     {e.bedroom} BHK
                                </div>
                                <div className="absolute text-sm font-bold  top-0 left-0   h-8 w-12 m-1 rounded-[50px] bg-opacity-70 text-white px-1 py-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 98" id="like"><g><path d="M66.1,16.3A22.2,22.2,0,0,0,49,24.2a21.9,21.9,0,0,0-17.1-7.9A22.4,22.4,0,0,0,9.5,38.7c0,21.2,37,41.9,38.5,42.7a1.8,1.8,0,0,0,2,0c1.5-.8,38.5-21.2,38.5-42.7A22.4,22.4,0,0,0,66.1,16.3ZM49,77.4C43.2,74,13.5,55.9,13.5,38.7A18.4,18.4,0,0,1,31.9,20.3a18,18,0,0,1,15.4,8.3,2.1,2.1,0,0,0,3.4,0A18.4,18.4,0,0,1,84.5,38.7C84.5,56.1,54.8,74.1,49,77.4Z"></path></g></svg>
                                </div>
                            </div>))
                    )
                    }
                    
                    </div>
                    
                </div>
        </div>
    );
}

export default AllProducts;
