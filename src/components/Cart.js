import React from 'react'
import {  useSelector } from 'react-redux'
import CartItems from './CartItems';

import { Link } from 'react-router-dom';
import OrderSummary from './OrderSummary';


const Cart = () => {

 const cartItems=  useSelector((state) => state.cart.items)


//  const dispatch = useDispatch()
 
 

 if(cartItems.length === 0){
  return(
    <div className='flex justify-center mt-52 items-center flex-col '>
      <div className='p-2'>Your cart is empty</div>
      <div className='p-2'>You can go to home page to view more restaurants</div>
      <div><button className='p-2 m-2 px-5 bg-orange-400 text-white'  ><Link to='/'>SEE RESTAURANTS NEAR YOU</Link></button></div>
    </div>
  )
 }
  return (
    <div >
      <h1 className='text-center my-8'>CART</h1>
      {/* <button onClick={clearCartItems}>clear</button> */}
      <div className='flex justify-evenly'>
          <div className='w-7/12 '>
              <CartItems cartItems={cartItems} />
          </div>
          <div className='w-2/12 shadow-xl border-gray-200 rounded-xl border-[1px]  h-72'>
            <OrderSummary/>
          </div>
      </div>
    </div>
  )
}

export default Cart