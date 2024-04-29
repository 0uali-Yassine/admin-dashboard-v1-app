import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import User from './pages/user/User';
import Product from './pages/product/Product';
import Edite from './component/Edite';
import Createuser from './component/Createuser';
import Editeproduct from './component/Editeproduct';
import CreateProduct from './component/CreateProduct';

function App() {
  return (
    <div className='font w-full'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='user'>
            <Route index  element={<User/>}/>
            <Route path='/user/edite' element={<Edite/>}/>
            <Route path='/user/create' element={<Createuser/>}/>
          </Route>
          <Route path='product'>
            <Route index element={<Product/>}/>
            <Route path='/product/edite' element={<Editeproduct/>}/>
            <Route path='/product/create' element={<CreateProduct/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
