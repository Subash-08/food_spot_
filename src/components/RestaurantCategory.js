import { useState } from "react";
import MenuItem from "./MenuItem";





const RestaurantCategory = ({data}) => {

  const [showItem,setShowItem] = useState(false)

  const handleClick = () => {
    setShowItem(!showItem)
  }
    // console.log(data);
  return (
    <div className="my-2 shadow-lg mx-auto bg-slate-50 p-[1px] ">
        <div className="flex justify-between cursor-pointer " onClick={handleClick}>
           <span className="p-4 font-bold">{data.title} ({data.itemCards.length})</span>
           <span className="p-4">🔽</span>
        </div>
        <div >
            {showItem && <MenuItem key={data.itemCards.title} items={data.itemCards}/>}
        </div>
    </div>
  )
}

export default RestaurantCategory