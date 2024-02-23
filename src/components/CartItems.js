import { CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { removeItem ,decreaseQuantity , increaseQuantity} from '../slice/cartSlice'


const CartItems = ({cartItems}) => {
  
  const decreaseQty = (cartItem) => {
    const count = cartItem.card.info.inStock;
    if(count === 1) return;
    dispatch(decreaseQuantity(cartItem.card.info.id))
}

  const dispatch = useDispatch()

  return (
    
    <div className=''>
    {cartItems.map((cartItem) =>(
        <div key={cartItem.card.info.id} className="p-2 pb-2 border-gray-200 bg-slate-50 border-b-[1px] shadow-md my-2  flex justify-between">
            <div className='flex justify-between items-center w-[100%]'>
               {cartItem.card.info.imageId &&   <img src= {CDN_URL+cartItem.card.info.imageId} alt='img' className="w-24 h-20 m-2"/>}
               <h1 className="font-semibold mb-2">{cartItem.card.info.name}</h1><h2 className="text-sm mb-4">₹ {cartItem.card.info.price ? cartItem.card.info.price/100 : cartItem.card.info.defaultPrice/100} </h2>
               <div>
                  <button onClick={() => decreaseQty(cartItem)}>-</button> 
                  <span>{cartItem.card.info.inStock}</span>
                  <button onClick={() =>  dispatch(increaseQuantity(cartItem.card.info.id))}>+</button>
               </div>
               <button onClick={() => dispatch(removeItem(cartItem.card.info.id))} className='p-2'>✖️</button>
             </div>                 
        </div> 
    ) )}
</div>
  )
}

export default CartItems