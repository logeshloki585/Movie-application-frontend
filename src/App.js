import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { useSelector } from 'react-redux';
import Hero from './Pages/Hero';
import { useEffect, useState } from 'react';
import FilterNavbar from './Components/FilterNavbar/FilterNavbar';

import AddMoviePage from './Pages/AddMoviePage';
import UpdateMoviePage from './Pages/UpdateMoviePage';
import DeleteMoviePage from './Pages/DeleteMoviePage';


function App() {
  // const [log,setLog] = useState(false);
  // const isLonggedIn = useSelector((state)=> state.isLoggedIn);
  // setLog(isLonggedIn)

  return (
    <div className='bg-[#F6F6F6]'>
      <header>
        <Navbar/>
        <FilterNavbar/>
      </header>
      <main>
      
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/' element={<Hero/>}/>
          <Route path='/addmovie' element={<AddMoviePage/>}/>
          <Route path='/updatemovie' element={<UpdateMoviePage/>}/>
          <Route path='/deletemovie' element={<DeleteMoviePage/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
