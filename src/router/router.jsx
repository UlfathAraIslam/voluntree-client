import React from "react";
import { createBrowserRouter } from "react-router";

import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import AllVolunteers from "../pages/AllVolunteers/AllVolunteers";
import VolunteerDetails from "../pages/VolunteerDetails/VolunteerDetails";
import Error from "../pages/Error/Error";
import PrivateRoute from "../routes/PrivateRoute";
import AddVolunteerPost from "../pages/AddVolunteerPost/AddVolunteerPost";
import ManagePosts from "../pages/ManagePosts/ManagePosts";
import Spinner from "../components/Spinner/Spinner";

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: RootLayout,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "/all-volunteers",
          Component: AllVolunteers,
        },
        {
          path: "/volunteers/:id",
          element: (
            <PrivateRoute>
              <VolunteerDetails />
            </PrivateRoute>
          ),
          loader: async ({ params }) => {
            const res = await fetch(
              `https://voluntree-server-liart.vercel.app/volunteers/${params.id}`
            );

            return res.json();
          },
          hydrateFallbackElement: <Spinner />,
        },
        {
          path: "/add-volunteer-post",
          element: (
            <PrivateRoute>
              <AddVolunteerPost />
            </PrivateRoute>
          ),
        },
        {
          path: "/manage-posts",
          element: (
            <PrivateRoute>
              <ManagePosts />
            </PrivateRoute>
          ),
        },

        {
          path: "/register",
          Component: Register,
        },
        {
          path: "/signIn",
          Component: SignIn,
        },
        {
          path: "*",
          Component: Error,
        },
      ],
    },
  ],
  {
    fallbackElement: <Spinner />,
  }
);

export default router;
