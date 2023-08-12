import { configureStore } from "@reduxjs/toolkit";
import  userDetail  from "./crudSlice";


export default configureStore({
    reducer: {
       app:userDetail,
    },
})