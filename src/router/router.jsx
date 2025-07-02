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
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import Support from "../pages/Support";
import TermsOfUse from "../pages/TermsOfUse";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import CookiePolicy from "../pages/CookiePolicy";
import Donate from "../pages/Donate";
import Blog from "../pages/Blog";

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
        {
          path: "/about-us",
          Component: AboutUs,
        },
        {
          path: "/contact",
          Component: Contact,
        },
        {
          path: "/faq",
          Component: FAQ,
        },
        {
          path: "/support",
          Component: Support,
        },
        {
          path: "/terms",
          Component: TermsOfUse,
        },
        {
          path: "/privacy-policy",
          Component: PrivacyPolicy,
        },
        {
          path: "/cookies",
          Component: CookiePolicy,
        },
        {
          path: "/donate",
          Component: Donate,
        },
        {
          path: "/blog",
          Component: Blog,
        },
      ],
    },
  ],
  {
    fallbackElement: <Spinner />,
  }
);

export default router;
