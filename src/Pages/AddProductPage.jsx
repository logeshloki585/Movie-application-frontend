import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import AddProduct from '../Components/AddProduct/AddProduct';

function AddProductPage() {
  const dispatch = useDispatch();
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
            <>Please login you dont have authority to add house to sell or rent</>:
            <AddProduct/>
        }
    </div>
  )
}

export default AddProductPage;