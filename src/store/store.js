import { configureStore } from "@reduxjs/toolkit";
import paketSlise from "./paketSlise";

const store= configureStore({
    reducer:{
        paketStore: paketSlise
    }
})
export default store;