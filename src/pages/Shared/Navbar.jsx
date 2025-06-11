// components/Navbar.jsx
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import ThemeToggle from "./ThemeToggle";
import SignIn from "../SignIn/SignIn";
import Register from "../Register/Register";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow sticky top-0 z-50">
        <div className="navbar-start">
          <Link to="/" className="text-2xl font-bold text-primary">
            Voluntree
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex space-x-2">
          <NavLink to="/" className="btn btn-ghost text-base">Home</NavLink>
          <NavLink to="/volunteer-posts" className="btn btn-ghost text-base">All Posts</NavLink>
          {user && (
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn btn-ghost">My Profile</label>
              <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><NavLink to="/add-post">Add Post</NavLink></li>
                <li><NavLink to="/manage-posts">Manage Posts</NavLink></li>
              </ul>
            </div>
          )}
        </div>

        <div className="navbar-end space-x-2">
          {!user ? (
            <>
              <button onClick={() => setIsLoginOpen(true)} className="btn btn-outline btn-sm">
                <FiLogIn /> Sign In
              </button>
              <button onClick={() => setIsRegisterOpen(true)} className="btn btn-outline btn-sm">
                Register
              </button>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <div className="avatar tooltip" data-tip={user?.displayName || "User"}>
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.photoURL || "https://i.ibb.co/2kRrzrC/default-user.png"} alt="user" />
                </div>
              </div>
              <button onClick={handleLogout} className="btn btn-outline btn-error btn-sm flex items-center gap-1">
                <FiLogOut /> Logout
              </button>
            </div>
          )}
          <ThemeToggle />
        </div>
      </div>

      <SignIn isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} switchToRegister={() => { setIsLoginOpen(false); setIsRegisterOpen(true); }} />
      <Register isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} switchToLogin={() => { setIsRegisterOpen(false); setIsLoginOpen(true); }} />
    </>
  );
};

export default Navbar;
