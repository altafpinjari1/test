import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';

const Viewdetails = () => {
    const item=useSelector((state)=> state.productReducer.selectedProducts[0]);
    const dispatch=useDispatch();
    return (
        <div className='parent'>
                    <div className="card1">
                    
                       <img className='image' src={item.images} alt="" />
                       <h6>{item.title}</h6>
                       <h3>{item.price}$</h3>
                       <Button style={{width:'100px',marginTop:'20px',}} variant="secondary" onClick={()=> dispatch({type:'Add-To-Cart',data:item})}>Add-cart</Button>
               
                    </div>
                  </div>
    );
};

export default Viewdetails;