import React from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import RestaurantCategory from './RestaurantCategory'

const RestaurantMenu = () => {

    // const [resInfo , setResInfo] = useState(null)
    const {resId} = useParams();
   
    const resInfo = useRestaurantMenu(resId)
    
    const { name, cuisines , avgRating ,locality ,sla } = resInfo?.cards[0]?.card?.card?.info??{}; 
    
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] ===  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // if (categories && categories.length > 0) {
    //     console.log(categories);
    //   } 

    return resInfo === null ? (<Shimmer />) : (
    
    <div className='w-7/12 mx-auto mt-7'>
        <div className='   flex justify-between items-center'>
            <div className=''>
            <h1 className='font-bold text-2xl p-1'>{name}</h1>
            <h1 className='font-light text-sm p-1'>{cuisines.join(", ")}</h1>
            <p className='font-light text-sm p-1'>{locality},{sla?.lastMileTravel} km</p>
            </div>

            <div className='p-4 bg-slate-50 border border-gray-200 shadow-2xl rounded-lg px-5 m-2'>
            <h1>⭐{avgRating}</h1> 
            </div>
        </div>
        <div className='border border-gray-300 w-full border-dashed mt-2 '></div>
        <h1 className='font-light text-sm p-1 mt-2'>🕛{sla?.deliveryTime} Mins</h1>
        
        <div >
            <h1 className='mt-12'>MENU</h1>
            {categories.map((category,index) => <RestaurantCategory key={index} data={category?.card.card}/> )}
        </div>


    </div>
  )
}

export default RestaurantMenu