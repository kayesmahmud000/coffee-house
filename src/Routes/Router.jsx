import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Coffee from "../Pages/Coffee";
import Dashboard from "../Pages/Dashboard";
import CoffeeCard from "../Components/CoffeeCard";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch("../categories.json"),
            children:[
              {
                path:"/",
                element:<CoffeeCard></CoffeeCard>,
                loader:()=>fetch('/coffees.json')
              },
              {
                path:"/category/:category",
                element:<CoffeeCard></CoffeeCard>,
                loader:()=>fetch('/coffees.json')
              }
            ]
        },
        {
            path:"/coffee",
            element:<Coffee></Coffee>,
            loader:()=>fetch('/coffees.json')
        },
        {
            path:"/dashboard",
            element:<Dashboard></Dashboard>
        },
      ]
    },
  ]);
  export default router