import React from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import RestaurantCategory from './RestaurantCategory'

const RestaurantMenu = () => {

    // const [resInfo , setResInfo] = useState(null)
    const {resId} = useParams();
   
    const resInfo = useRestaurantMenu(resId)
    
    const { name, cuisines , avgRating ,locality ,sla } = resInfo?.cards[2]?.card?.card?.info??{}; 
    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] ===  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // if (categories && categories.length > 0) {
    //     console.log(categories);
    //   } 

    return resInfo === null ? (<Shimmer />) : (
    
    <div className='w-7/12 mx-auto mt-5'>
        <div className=' bg-slate-300'>
            <h1 className='font-bold'>{name}</h1>
            <h1>{cuisines.join(", ")}</h1>

            <h1>{avgRating}</h1>

            <p>{locality},{sla?.lastMileTravel} km</p>
            <h1>⌚{sla?.deliveryTime} Mins</h1>
        </div>

        
        <div >
            <h1 className='mt-12'>MENU</h1>
            {categories.map((category,index) => <RestaurantCategory key={index} data={category?.card.card}/> )}
        </div>


    </div>
  )
}

export default RestaurantMenu