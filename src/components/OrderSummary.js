import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const OrderSummary = () => {

    const info = useSelector((state) => state.cart.items)
   
    

  return (
    <div className='flex flex-col justify-between h-72 items-center'>
        <h1 className='mt-8 p-2 px-9 font-semibold text-lg '>Order Summary</h1>
        <hr className='w-11/12'/>
        <div className='flex justify-between w-9/12'><span>Quantity</span><span>{info.reduce((acc,cur) => (acc + cur.card.info.inStock) ,0)} (Items)</span></div>
        <div className='flex justify-between  w-9/12'><span>Total</span><span>₹{info.reduce((acc,cur) => (acc + cur.card.info.inStock*cur.card.info.price/100) ,0)}</span></div>
        <hr className='w-10/12'/>
        <button className='mb-8 p-2 px-9 rounded-full bg-orange-400 font-semibold text-lg text-white'><Link to="/orderplaced">Place order</Link></button>
       
    </div>
  )
}

export default OrderSummary