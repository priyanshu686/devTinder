import {configureStore} from '@reduxjs/toolkit'
import Userdata from'./UserSlice'
const Store = configureStore({
    reducer:{
        user:Userdata
    }
})

export default Store;