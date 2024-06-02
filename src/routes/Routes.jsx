import Donation from "../component/Donation/Donation";
import Home from "../component/Home/Home";
import Root from "../component/Root/Root";

import { createBrowserRouter } from "react-router-dom";
import Statistics from "../component/Statistics/Statistics";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/donation',
                element:<Donation/>
            },
            {
                path:'/statistics',
                element:<Statistics/>
            }
        ]
    }
])

export default router;