import { useState } from 'react'
import React from 'react'
import { CDN_URL } from '../utils/constants' 

const RestaurantCard = (props) => {
   
  const { resData }  = props
  const { 
    name,
    avgRating,
    sla,
    cloudinaryImageId,
    cuisines, 
    locality,
    aggregatedDiscountInfoV3
   } = resData.info

   const [isHovered, setIsHovered] = useState(false);
   


  return (
    <div className={` w-64 h-[300px] overflow-hidden m-4   ${isHovered ? 'transform scale-100 transition duration-200' : 'transform scale-95 transition duration-200'}`} 
    onMouseEnter={() => setIsHovered(false)}
    onMouseLeave={() => setIsHovered(true)}>
      <div className='relative '>
      <img className="w-[100%] rounded-2xl h-44 "src={CDN_URL+cloudinaryImageId} alt='' />
      <div className="absolute top-3/4 rounded-b-2xl left-0 right-0 h-11 bg-gradient-to-b from-transparent to-black opacity-100 flex justify-start">
        {aggregatedDiscountInfoV3 && aggregatedDiscountInfoV3.header && <span className='text-white p-1 ml-2 mt-2 font-bold text-xl'> {aggregatedDiscountInfoV3.header}</span>}
        {aggregatedDiscountInfoV3 && aggregatedDiscountInfoV3.subHeader && <span className='text-white p-1  mt-2 font-bold text-xl'> {aggregatedDiscountInfoV3.subHeader}</span>}
      </div>
       </div>
      <div className='m-2 ml-3'>
      <h2 className='font-bold'>{name}</h2>
      <span className='font-bold ml-[-4px]'>⭐{avgRating} . </span>
      <span className='font-bold'>{sla.deliveryTime} mins</span>
      <p className='truncate text-sm mt-1'>{cuisines.join(", ")}</p>
      <h3  className='text-sm'> {locality}</h3>

      </div>
    </div>
  )
}

export default RestaurantCard