import {createBrowserRouter, RouterProvider} from "react-router"
import Body from './components/Body'
import Login from './components/Login'
function App() {
 const Route = createBrowserRouter([
    {
      path:'/',
      Component:Body,
      children:[{
        index:true,
      },{
        path:'login',
        Component:Login,
      }]
    }
 ])
  return (
    <>
      <RouterProvider router={Route}/>
    </>
  )
}

export default App
