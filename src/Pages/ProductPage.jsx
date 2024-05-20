import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import Product from '../Components/Product/Product';


function ProductPage() {
const [log, setLog] = useState(false);
  const isLonggedIn = useSelector((state) => state.isLoggedIn);

  useEffect(() => {
    setLog(isLonggedIn);
    console.log(isLonggedIn)
  }, [isLonggedIn]);


  return (
    <div>
        {
            (!log)?
            <>Please login you dont have authority to view this rental details</>:
            <Product/>
        }
    </div>
  )
}

export default ProductPage;