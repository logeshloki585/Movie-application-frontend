import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import UpdateProduct from '../Components/UpdateProduct/UpdateProduct';

function UpdateProductPage() {
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
            <>Please login you dont have authority to add product</>:
            <UpdateProduct/>
        }
    </div>
  )
}

export default UpdateProductPage;