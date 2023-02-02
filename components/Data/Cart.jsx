import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';

const Cart = () => {
    const Altaf=useSelector((state)=> state.productReducer.cart);
    const dispatch=useDispatch();
    return (
        <div>
            {Altaf.map((item)=>{
                return(
                    <div className='parent'>
                    <div className="card1">
                    
                       <img className='image' src={item.images} alt="" />
                       <h6>{item.title}</h6>
                       <h3>{item.price}$</h3>
                       <Button style={{width:'100px',marginTop:'20px',}} variant="secondary" onClick={()=> dispatch({type:'Remove_Products',data:item})}>Remove</Button>
               
                       <Button style={{width:'100px',marginTop:'20px',marginLeft:'20px'}} variant="secondary" onClick={()=> dispatch({type:'View_Details',data:item})}>Details</Button>
               
                    </div>
                  </div>
                )
            })}
        </div>
    );
};

export default Cart;