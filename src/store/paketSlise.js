import { createSlice } from "@reduxjs/toolkit";


const paketSlice = createSlice({
    name: 'paket',
    initialState:{
        subscription:''
    },
    reducers:{
        getSubscription:(state,action) => {
            
            state.subscription = action.payload;
        }
    }
})

export const {getSubscription} = paketSlice.actions;
export default paketSlice.reducer;