import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";

const SignIn = () => {
  const { signInUser, signInWithGoogle, setUser } = useContext(AuthContext);
  const [error] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: `Welcome back, ${user.displayName || user.email}`,
          timer: 2000,
          showConfirmButton: false,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          icon: "success",
          title: "Logged in with Google",
          text: `Welcome, ${user.displayName || user.email}`,
          timer: 2000,
          showConfirmButton: false,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Sign-in Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-base-100 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSignIn}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered w-full mb-4"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered w-full mb-4"
            required
          />
          {error && <p className="text-error mb-2">{error}</p>}
          <button className="btn btn-primary w-full mb-4">Login</button>
        </form>

        <div className="divider">OR</div>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline w-full flex items-center gap-2 mb-4"
        >
          <FcGoogle className="text-xl" /> Sign in with Google
        </button>

        <p className="text-sm text-center">
          New here?{" "}
          <Link to="/register" className="link text-primary">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
