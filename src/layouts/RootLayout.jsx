import React, { use } from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import DynamicTitle from "../components/DynamicTitle";
import { AuthContext } from "../context/AuthContext/AuthContext";
import Spinner from "../components/Spinner/Spinner";

const RootLayout = () => {
  const { loading } = use(AuthContext);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="min-h-screen flex flex-col">
      <DynamicTitle />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
