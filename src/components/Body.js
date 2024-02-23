import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';


const Body = () => {
   
  const [resList,setResList] = useState([]);
  const [filteredRes,setFilterRes] = useState([]);
  const [searchTeaxt,setSearchText] = useState("");
  const [click,setClick] = useState(true)
  const [click1,setClick1] = useState(true)

  useEffect(() => {
      fetchData();
  },[])

  const fetchData = async () => {
    const data  = await fetch('https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D13.0826802%26lng%3D80.2707184') 
    const json  = await data.json();
    
    const restaurants = json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setResList(restaurants)
    setFilterRes(restaurants)

  }
  const handleFilter = () => {
    setClick(!click)

    if(click){
    setFilterRes(filteredRes.filter((res) => res.info.avgRating > 4.2 ))
    }
    if(!click){
      setFilterRes(resList)
    }
    
  }

  const handleFilterDelivery = () => {
    setClick1(!click1)

    if(click1){
    setFilterRes(filteredRes.filter((res) => res.info.sla.deliveryTime < 30 ))
    }
    if(!click1){
      setFilterRes(resList)
    }
    
  }




    if(resList.length === 0){
      return<Shimmer />
    }
  
   

  return (
    <div className='w-10/12 m-auto mt-10 '>
    
         <div className='my-2 mx-4'>
         <input 
         className='border p-1 border-black'
         value={searchTeaxt}
         onChange={(e) => setSearchText(e.target.value)}
         />
         <button 
         className='bg-slate-300 rounded-r-md  p-[6px] '
         onClick={() => (setFilterRes(resList.filter((res) => res.info.name.toLowerCase().includes(searchTeaxt.toLowerCase()))))}
         >Search</button>
         <button className={`shadow-lg rounded-md mx-6 p-[6px] ${click ?  'bg-slate-300' :'bg-orange-300 text-white' }`} onClick={handleFilter}>Top Rated</button>
         <button className={`shadow-lg rounded-md p-[6px] ${click1 ?  'bg-slate-300' :'bg-orange-300 text-white' }`} onClick={handleFilterDelivery}>Fast Delivery</button>
         
         </div>


         <div className={`my-5  flex flex-wrap justify-start ` }>
         {filteredRes.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/"+ restaurant.info.id}><RestaurantCard resData = {restaurant} /></Link>
         ))}
         
         </div>
    </div>
  )
}

export default Body;




// const handleScroll = () => {
//   const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
//   const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
//   const clientHeight = document.documentElement.clientHeight || window.innerHeight;
//   const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
//   // console.log(scrollTop);
//   console.log(scrolledToBottom);

//   if (scrolledToBottom) {
//     fetchData2();
//   }
// };

// useEffect(() => {
//   window.addEventListener('scroll', handleScroll);
//   return () => window.removeEventListener('scroll', handleScroll);
// }, []);

// const fetchData2 = async () => {
//   try {
//     const payload = {
//       lat: "11.3636768",
//       lng: "77.82811939999999",
//       nextOffset: "COVCELQ4KICow4nKiYbAODCnEzgC",
//       widgetOffset: {
//         NewListingView_category_bar_chicletranking_TwoRows: "",
//         NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
//         Restaurant_Group_WebView_SEO_PB_Theme: "",
//         collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "10",
//         inlineFacetFilter: "",
//         restaurantCountWidget: ""
//       },
//       _csrf: "rLvCsz9uKYWN-5pZKBS0H5DAptwUwKab3dhQ33Ls"
//     };

//     const response = await fetch('https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fupdate', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(payload)
//     });

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const data = await response.json();
//     console.log('Data:', data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }
