import React from 'react';
import {
  createBrowserRouter,
} from "react-router";

import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import SignIn from '../pages/SignIn/SignIn';
import AllVolunteers from '../pages/AllVolunteers/AllVolunteers';
import VolunteerDetails from '../pages/VolunteerDetails/VolunteerDetails';
import Error from '../pages/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children: [
    {
        index:true,
        Component:Home,
    },
    {
        path:"/all-volunteers",
        Component:AllVolunteers,
    },
    {
        path:"/volunteers/:id",
        Component:VolunteerDetails,
    },
    
    {
        path:'/register',
        Component:Register,
    },
    {
        path:'/signIn',
        Component:SignIn,
    },
    {
        path:'*',
        Component:Error,
    },
    ]
  },
]);

export default router;