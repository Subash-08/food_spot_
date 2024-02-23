import React from 'react'
import { Link } from 'react-router-dom'

const OrderSuccess = () => {
  return (
   
    <div className="col-6 mt-32 text-center">
        <img className="w-80 mx-auto" src="https://tse3.mm.bing.net/th?id=OIP.A5zQE0TYyCTaRL47OjfKrAHaD1&pid=Api&P=0&h=180" alt="Order Success" width="200" height="200" />

        <h2>Your Order has been placed successfully.</h2>
      <div><button className='p-2 my-7 px-5 bg-orange-400 text-white rounded-lg font-bold'  ><Link to='/'>GO TO HOME</Link></button></div>

    </div>


  )
}

export default OrderSuccess