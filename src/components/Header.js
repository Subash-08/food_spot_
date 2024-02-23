import React from 'react'
import { LOGO_URL } from '../utils/constants' ;
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  const cartItems=  useSelector((state) => state.cart.items)
  return (
    <div className='flex justify-between w-[100%] shadow-xl h-20 sticky z-10 bg-white top-0'>
        
        <div>
          <img className='w-24 h-20 cursor-pointer' src={LOGO_URL} alt="" />
        </div>

        <div>
            <ul className='flex align-middle justify-center h-20' >
                <div className='mx-6 my-auto cursor-pointer '><Link to="/">Home</Link></div>
                <div className='mx-6 my-auto cursor-pointer'><Link to="/offer">Offers</Link></div>
                <div className='mx-6 my-auto cursor-pointer '><Link to="/aboutus">About Us</Link></div>
                <div className='mx-6 my-auto cursor-pointer'><Link to="/cart">cart ({cartItems.length})</Link></div>
                
            </ul>
        </div>
    </div>
  )
}

export default Header