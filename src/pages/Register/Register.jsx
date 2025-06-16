import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, setUser, updateUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleGoogleSignin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire("Success", "Logged in with Google", "success").then(() => {
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        Swal.fire("Error", error.message, "error");
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be at least 8 characters and include uppercase, lowercase, and a special character.",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            Swal.fire("Success", "Account created successfully", "success");
            form.reset();
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        Swal.fire("Registration Error", error.message, "error");
      });
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center px-4">
      <div className="bg-white/40 bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-neutral text-center mb-4">
          Create a Voluntree Account
        </h2>
        <form onSubmit={handleRegister}>
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-neutral mb-3"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-neutral mb-3"
            required
          />
          <input
            name="photo"
            type="text"
            placeholder="Photo URL"
            className="w-full px-4 py-3 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-neutral mb-3"
            required
          />
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-3 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-neutral mb-3"
              placeholder="Password"
              required
            />
            <div
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 cursor-pointer"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded"
          >
            Register
          </button>
        </form>

        <div className="my-4 text-center text-neutral">or</div>

        <button
          onClick={handleGoogleSignin}
          className="btn btn-outline w-full flex items-center gap-2 mb-4"
        >
          <FcGoogle className="text-xl" /> Sign in with Google
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/signIn" className="text-neutral font-bold hover:underline">
            Login
          </Link>
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="text-neutral hover:underline text-sm font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
