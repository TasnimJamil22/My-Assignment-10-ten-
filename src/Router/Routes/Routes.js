import { createBrowserRouter } from "react-router-dom";
 
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import Cart from "../../Pages/Cart/Cart";
import RequireAuth from "../RequireAuth/RequireAuth";
import Services from "../../Pages/Services/Services";
import About from "../../Pages/About/About";
import Professionals from "../../Pages/Professionals/Professionals";
import NotFound from "../../Pages/NotFound/NotFound";
import ServiceDetails from "../../Pages/Services/ServiceDetails/ServiceDetails";
import Main from "../../Layout/Main";
 

 
 

 const router = createBrowserRouter([
    {
        path: '/',
        element:  <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/cart',
                element:<RequireAuth><Cart></Cart></RequireAuth> 
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/serviceDetails/:id',
                element:<RequireAuth><ServiceDetails></ServiceDetails></RequireAuth>
            },
            {
                path:'/about',
                element:<RequireAuth><About></About></RequireAuth>
            },
            {
                path:'/professionals',
                element: <RequireAuth><Professionals></Professionals></RequireAuth>
            },
            {
                path:'*',
                element: <NotFound></NotFound>
            }
        ]
    }
     
 ])

 export default router;




 