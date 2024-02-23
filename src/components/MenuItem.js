import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../slice/cartSlice";


const MenuItem = ({items}) => {
    const dispatch = useDispatch();
    
  return (
    <div>
        {items.map((item) =>(
            <div key={item.card.info.id} className="p-2 pb-2 border-gray-200 bg-slate-50 border-b-[1px] shadow-md my-2  flex justify-between">
                <div className=" w-9/12">
                    <h1 className="font-semibold mb-2">{item.card.info.name}</h1><h2 className="text-sm mb-4">₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100} </h2>
                    <p className="text-sm ">{item.card.info.description}</p>
                </div>
                <div className="relative">
                  <div className={`${item.card.info.imageId ? 'top-[70px]' : 'top-8'} absolute right-7`}>
                          <button className=" bg-green-400 text-white py-1 px-4 rounded-md" 
                          onClick={() => dispatch(addItem(item))}
                          >Add</button>
                    </div>
                  
                    {item.card.info.imageId &&   <img src=
                    {CDN_URL+item.card.info.imageId} className="w-24 h-20 m-2"/>}
                  
                 </div>                
            </div> 
        ) )}
    </div>
  )
}

export default MenuItem