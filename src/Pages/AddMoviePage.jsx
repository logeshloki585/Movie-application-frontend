import React from 'react'
import AddMovie from '../Components/AddMovie/AddMovie'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';

function AddMoviePage() {
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
            <>Please login you dont have authority to add movie</>:
            <AddMovie/>
        }
    </div>
  )
}

export default AddMoviePage;