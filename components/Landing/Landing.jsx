import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from '../Data/Cart';
import Parent from '../Data/Parent';
import Viewdetails from '../Data/Viewdetails';
import NavScrollExample from '../Nav/Nav';


const Landing = () => {
    return (
        <div>
            <BrowserRouter>
            <NavScrollExample/>
            <Routes>
                <Route path='/' element={<Parent/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/viewd' element={<Viewdetails/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Landing;