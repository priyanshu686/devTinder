import {configureStore} from '@reduxjs/toolkit'
import Userdata from'./UserSlice'
import Feeddata from './FeedSlice'
import Friendsdata from './FriendsSlice'
const Store = configureStore({
    reducer:{
        user:Userdata,
        feed:Feeddata,
        friends:Friendsdata,
    }
})

export default Store;