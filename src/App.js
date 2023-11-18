import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { useSelector } from 'react-redux';
import Hero from './Pages/Hero';
import { useEffect, useState } from 'react';
import FilterNavbar from './Components/FilterNavbar/FilterNavbar';

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
          
          {/* {(log)?
          <Route path='/main' element={<Hero/>}/>
          : */}
          <Route path='/main' element={<Hero/>}/>
          {/* // } */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
