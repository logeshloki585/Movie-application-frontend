import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { useSelector } from 'react-redux';
import Hero from './Pages/Hero';
import { useEffect, useState } from 'react';
import FilterNavbar from './Components/FilterNavbar/FilterNavbar';

import AddProductPage from './Pages/AddProductPage';
import UpdateProductPage from './Pages/UpdateProductPage';
import DeleteProductPage from './Pages/DeleteProductPage';
import ProductPage from './Pages/ProductPage';


function App() {
  // const [log,setLog] = useState(false);
  // const isLonggedIn = useSelector((state)=> state.isLoggedIn);
  // setLog(isLonggedIn)

  return (
    <div className='bg-[#f4fac3]'>
      <header className='z-10 sticky'>
        <Navbar/>
        <FilterNavbar/>
      </header>
      <main className='bg-[#] pb-10 '>
      
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/' element={<Hero/>}/>
          <Route path='/addProduct' element={<AddProductPage/>}/>
          <Route path='/updateproduct' element={<UpdateProductPage/>}/>
          <Route path='/deleteproduct' element={<DeleteProductPage/>}/>
          <Route path='/product/:id' element={<ProductPage/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
