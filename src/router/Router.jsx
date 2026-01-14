import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";
 
import CategoryNews from "../pages/CategoryNews";
import SignIn from "../UserSection/SignIn";
 
import UserInfo from "../UserSection/UserInfo";
import Navber from "../componet/Navber";
import NewsCard from "../pages/NewsCard";
import Registation from "../UserSection/Registation";

import Ditels from "../root/Ditels";
 
 
 

 

 export const router = createBrowserRouter([
    {
      path:"/" ,
     element: <Root></Root> ,
      children:[
        {
            path:'/' ,
           element:<Home></Home>
        },
           {path:'/caterogy/:id' ,
            loader:()=>fetch('/news.json') ,
             element: <CategoryNews></CategoryNews>},
         {path:'/about' , element:<About></About> },
        {path:'/career' ,element:<Career></Career> },


      ]
     },
     {
       path:"/auth",
       element:<UserInfo></UserInfo> ,
       children:[
        {path:"/auth/login" , element:<SignIn></SignIn>},
        {path:"/auth/registation" , element: <Registation></Registation>},
       ]
     },
    /*  {
         path:"/ditels",
         element:<Ditels></Ditels> ,
         children:[
          {path:"/ditels" , element:<p>ami asuijdsnfds dsfh</p>}
         ]
         
     } */
      
 ])