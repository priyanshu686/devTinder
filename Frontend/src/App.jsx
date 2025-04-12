import { createBrowserRouter, RouterProvider } from "react-router";
import Body from "./components/Body";
import Login from "./components/Login";
import Signup from "./components/signup";
import Feed from "./components/Feed"
import { Provider} from 'react-redux';
import Store from './utils/Store'
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
