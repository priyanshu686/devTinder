import { createBrowserRouter, RouterProvider } from "react-router";
import Body from "./components/Body";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Feed from "./components/Feed"
import { Provider} from 'react-redux';
import Store from './utils/Store'
import Profile from "./components/Profile";
import Connection from "./components/Connection";
import Friends from "./components/Friends";
import Requests from "./components/Requests";
function App() {
  const Route = createBrowserRouter([
    {
      path: "/",
      Component: Body,
      children: [
        {
          index: true,
          Component: Login,
        },
        {
          path:"feed",
          Component: Feed,
        },
        {
          path: "signup",
          Component: Signup,
        },
        {
          path: "profile",
          Component: Profile
        },
        {
          path:"connection",
          Component: Connection,
          children:[
            {
              path:"friends",
              Component: Friends
            },
            {
              path:"requests",
              Component:Requests
            }
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <Provider store={Store}>
        <RouterProvider router={Route} />
      </Provider>
    </>
  );
}

export default App;
