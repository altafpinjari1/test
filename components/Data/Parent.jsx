import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import './friday.css';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';

const Parent = () => {
    const dispatch=useDispatch();
    const [altaf,setAltaf]=useState([]);

    const getApi=async () =>{
        const Result= await axios.get('https://api.escuelajs.co/api/v1/products?offset=10&limit=300');
        
        // ('https://api.escuelajs.co/api/v1/products');
        setAltaf(Result.data);
        dispatch({type:'Add_Products',data:Result})
    }
    useEffect(()=>{
        getApi();
    })
    return (
        <div>
            {altaf.map((item)=>{
                return(
                   <div className='parent'>
                     <div className="card1">
                     
                        <img className='image' src={item.images} alt="" />
                        <h6>{item.title}</h6>
                        <h3>{item.price}$</h3>
                        <Button className='A' style={{width:'100px',marginTop:'20px',}} variant="secondary" onClick={()=> dispatch({type:'Add-To-Cart',data:item})}>Add-cart</Button>
                
                     </div>
                   </div>
                )
            })}
        </div>
    );
};

export default Parent;