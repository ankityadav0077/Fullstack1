import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, Route,RouterProvider } from 'react-router-dom'
import { Features,Tasktodo,Singup,Layout,UserResetration,Lerning ,About,Home} from './pages/index.js'
const router=createBrowserRouter([
  {path:'/', element:<Layout/>,children:[
    {path:'/', element:<Home/>},
    {path:'/todo', element:<Tasktodo/>},
    {path:'/features', element:<Features/>},
    {path:'/abc', element:<Tasktodo/>},
    {path:'/learning', element:<Lerning/>},
    {path:'/about', element:<About/>},
    {path:'/user/singup', element:<UserResetration userlogindefult={true}/>},
    {path:'/user/login', element:<UserResetration userlogindefult={false}/>},
  ]}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store} >
    <RouterProvider router={router}/>
    {/* <UserResetration/> */}
  </Provider>
  </StrictMode>,
)
