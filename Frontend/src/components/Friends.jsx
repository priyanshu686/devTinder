import React, { useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFriends } from "../utils/FriendsSlice";

const Friends = () => {
  const dispatch = useDispatch();
  const friends = useSelector((store) => store.friends);
  const fetchfriends = async () => {
    const res = await axios.get("http://localhost:7777/user/Connected", {
      withCredentials: true,
    });
    // console.log(res?.data?.data);
    dispatch(addFriends(res?.data?.data));
    // console.log(friends)
  };
  useEffect(() => {
    fetchfriends();
  }, []);

  if (!friends) return <div>Loading......</div>;
  if (friends.length === 0) return <div>No Connection Found</div>;
//   console.log(friends);
  return (
    <div>
      {friends.map((items) => (
        <div key={items._id}>
          <h1>
            {items.firstName} {items.lastName}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Friends;
