import React, { useContext } from "react";
import { Link, NavLink } from "react-router";

import { FiLogIn, FiLogOut, FiUser } from "react-icons/fi";
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

  const navLinks = (
    <>
      <NavLink to="/" className="btn btn-ghost normal-case text-base">
        Home
      </NavLink>
      <NavLink
        to="/volunteer-posts"
        className="btn btn-ghost normal-case text-base"
      >
        All Posts
      </NavLink>

      {user && (
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="btn btn-ghost normal-case text-base">
            My Profile
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/add-post">Add Volunteer Need Post</NavLink>
            </li>
            <li>
              <NavLink to="/manage-posts">Manage My Posts</NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow sticky top-0 z-50">
      <div className="navbar-start">
        <Link to="/" className="text-2xl font-bold text-primary">
          Voluntree
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal px-1 space-x-2">{navLinks}</div>
      </div>

      <div className="navbar-end">
        {!user ? (
          <NavLink
            to="/signIn"
            className="text-primary flex items-center gap-1"
          >
            <FiLogIn /> SignIn
          </NavLink>
        ) : (
          <div className="flex items-center gap-3">
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                data-tip={user?.displayName || "User"}
              >
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={
                      user.photoURL ||
                      "https://i.ibb.co/2kRrzrC/default-user.png"
                    }
                    alt="user"
                  />
                </div>
              </label>
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-error btn-sm flex items-center gap-1"
            >
              <FiLogOut /> Logout
            </button>
          </div>
        )}
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>

      <div className="dropdown dropdown-end lg:hidden">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            className="h-5 w-5 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          {navLinks}
          {user && (
            <li>
              <button onClick={handleLogout} className="text-error">
                Logout
              </button>
            </li>
          )}
          {!user && (
            <li>
              <NavLink to="/login" className="text-primary">
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
