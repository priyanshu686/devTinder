import {configureStore} from '@reduxjs/toolkit'
import Userdata from'./UserSlice'
import Feeddata from './FeedSlice'
const Store = configureStore({
    reducer:{
        user:Userdata,
        feed:Feeddata,
    }
})

export default Store;