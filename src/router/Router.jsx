import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";
 
import CategoryNews from "../pages/CategoryNews";
 

 

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
      
 

     } 
      
 ])