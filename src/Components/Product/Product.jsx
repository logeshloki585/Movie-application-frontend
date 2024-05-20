import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { MdCancel } from "react-icons/md";
import { END_POINT } from '../../Assests/Container';

function Product() {
    const [popup,setPopup] = useState(false);
    const [product, setProduct] = useState([]);
    const [userDetails, setUserDetails] = useState([]);
  let { id } = useParams();

  const toggler = async (id) => {
    setPopup(true);
    const specificEndpoint = '/user/getuser/';
    const fullUrl = `${END_POINT}${specificEndpoint}${id}`;
    const response = await axios.get(fullUrl);
    setUserDetails(response.data.user)
  }

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const specificEndpoint = '/product/getProductById/';
        const fullUrl = `${END_POINT}${specificEndpoint}${id}`;

        const response = await axios.get(fullUrl);
        setProduct(response.data.product);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchProductDetails();
  }, []);

  return (
    <div>
        <div className='h-[78vh] p-12  relative'>
        <div className='h-full w-full bg-white flex p-12'>
        {(product)?
        <>
            <div className=' h-full mr-12 flex justify-center'>
                <img src={product.posterURL} alt="jk" />
            </div>
            <div className=' w-full  p-4 border-4'>
                <h3 className='font-medium mb-2'>{product.type}</h3>
                <h3 className='font-medium mb-2'><span className='font-bold'>Number of bedroom :</span> {product.bedroom}</h3>
                <h3 className='font-medium mb-2'><span className='font-bold'>Number of bedroom :</span> {product.bathroom}</h3>
                {/* <h3 className='font-medium mb-2'>{product.bachelors}</h3> */}
                <h3 className='font-medium mb-2'><span className='font-bold'>Bachelors :</span>  {product.bachelors}</h3>
                <h3 className='font-medium mb-2'><span className='font-bold'>House facing :</span> {product.facing}</h3>
                <h3 className='font-medium mb-2'><span className='font-bold'>Address :</span> {product.address}</h3>
                <h3 className='font-medium mb-2'>
                    <span className='font-bold'>description :</span> {product.description} </h3>
                <div className=' mt-2 flex justify-end'>
                    <div onClick={()=>toggler(product.user)}>
                        <a   class="mr-4 mb-2  cursor-pointer py-2 px-6 rounded-[50px]  px-0 block border bg-[#EEFF5F]" >   CONTACT</a>
                    </div>
                </div>
            </div>
        </>:
        <></>
        }
            
        </div>
        
    </div>
    <div>
        {(popup)?
            <div className='h-[450px] w-[800px]  absolute top-1/4 left-1/4'>
                <div className='h-[250px] w-[500px] absolute px-12 my-12 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl md:m-12 bg-white border pb-5 border-2 border-black'>
        <div className='flex items-center mt-4 justify-between'>
            <h1 className='text-[28px] text-[#e63e3e]'>CONTACT DETAILS</h1>
            <button onClick={()=> setPopup(false)}>
                <MdCancel className='h-6 w-6'/>
            </button>
          </div >
           <div className='min-w-[300px]'>
              <p className='font-bold '>WELCOME!</p>
           </div>
           {(userDetails)?
           <div className='mt-4 text-lg font-medium'>
                 <h3>email : {userDetails.email}</h3>
                 <h3>phone : {userDetails.phoneNumber}</h3>
            </div>:
            <></>
             }
           
           
        </div>
            </div>:
            <></>
        }
    </div>
    </div>
  )
}

export default Product;