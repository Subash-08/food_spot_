import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Offer = () => {
  const [resList,setResList] = useState([]);
  const [filteredRes,setFilterRes] = useState([]);
  
  useEffect(() => {
      fetchData();
  },[])

  const fetchData = async () => {
    const data  = await fetch('https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D13.0826802%26lng%3D80.2707184') 
    const json  = await data.json();
    
    const restaurants = json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setResList(restaurants)
    setFilterRes(restaurants)

  }
  
    if(resList.length === 0){
      return<Shimmer />
    }
  
  return (
    <div  className='w-10/12 m-auto mt-10 '>
      <div className={`my-2  flex flex-wrap justify-start ` }>
         {filteredRes.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/"+ restaurant.info.id}><RestaurantCard resData = {restaurant} /></Link>
         ))}
         
         </div>
    </div>
  )
}

export default Offer