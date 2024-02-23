import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: []
    },
    reducers:{
        addItem : (state,action) => {

            const item = action.payload
            const isItemExist = state.items.find( i => i.card.info.id === item.card.info.id);
            if(!isItemExist){
            state.items.push(action.payload)
            }
        },
        removeItem : (state,action) => {
            state.items = state.items.filter(item => item?.card?.info?.id !== action.payload);
        },
        // clearCart : (state,action) => {
        //     state.items = "subash";
        // },
        decreaseQuantity : (state,action) => {
            state.items.forEach(item => {
                if (item.card.info.id === action.payload) {
                    item.card.info = {
                        ...item.card.info,
                        inStock: item.card.info.inStock - 1
                    };
                }
            });
        },
        increaseQuantity : (state,action) => {
            state.items.forEach(item => {
                if (item.card.info.id === action.payload) {
                    item.card.info = {
                        ...item.card.info,
                        inStock: item.card.info.inStock + 1
                    };
                }
            });
        },

    }
})

export const {addItem , removeItem , clearCart ,decreaseQuantity ,increaseQuantity} = cartSlice.actions
export default cartSlice.reducer