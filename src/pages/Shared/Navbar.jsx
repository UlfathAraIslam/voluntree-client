import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow sticky top-0 z-50 px-4">
      {/* Logo */}
      <div className="navbar-start">
        <Link to="/" className="text-2xl font-bold text-primary">
          Voluntree
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex gap-2">
        <NavLink to="/" className="btn btn-ghost text-base">Home</NavLink>
        <NavLink to="/all-volunteers" className="btn btn-ghost text-base">Volunteer</NavLink>
        <NavLink to="/about-us" className="btn btn-ghost text-base">About</NavLink>
        <NavLink to="/donate" className="btn btn-ghost text-base">Donate</NavLink>
        <NavLink to="/blog" className="btn btn-ghost text-base">Blog</NavLink>
        {user && (
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn btn-ghost">My Profile</label>
            <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink to="/add-volunteer-post">Add Volunteer Need Post</NavLink></li>
              <li><NavLink to="/manage-posts">Manage My Posts</NavLink></li>
            </ul>
          </div>
        )}
      </div>

      {/* Right Side */}
      <div className="navbar-end gap-2">
        {/* 🍔 Hamburger for mobile */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">☰</label>
          <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/all-volunteers">All Posts</NavLink></li>
            {user && (
              <>
                <li><NavLink to="/add-volunteer-post">Add Volunteer Need Post</NavLink></li>
                <li><NavLink to="/manage-posts">Manage My Posts</NavLink></li>
              </>
            )}
          </ul>
        </div>

        {/* Auth Buttons */}
        {!user ? (
          <>
            <Link to="/signIn" className="btn btn-outline btn-sm flex items-center gap-1">
              <FiLogIn /> Login
            </Link>
            <Link to="/register" className="btn btn-outline btn-sm">Register</Link>
          </>
        ) : (
          <div className="dropdown dropdown-hover dropdown-end">
            <div tabIndex={0} className="avatar btn btn-ghost btn-circle">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={user.photoURL || "https://i.ibb.co/2kRrzrC/default-user.png"}
                  alt="User"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-center font-semibold text-sm">
                {user.displayName || "User"}
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="btn btn-outline btn-error btn-sm flex items-center justify-center gap-1 mt-1"
                >
                  <FiLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        )}

        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
