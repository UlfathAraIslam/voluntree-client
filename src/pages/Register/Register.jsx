import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const Register = ({ isOpen, onClose, switchToLogin }) => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");

  const validatePassword = (password) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
    return null;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const photoURL = form.photoURL.value.trim();
    const password = form.password.value;

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    createUser(email, password)
      .then((result) => {
        // Update user profile with name and photoURL
        updateUserProfile({ displayName: name, photoURL: photoURL })
          .then(() => {
            Swal.fire("Success!", "Registration successful", "success");
            onClose();
          })
          .catch((err) => {
            console.error("Profile update error:", err);
            setError("Failed to update user profile");
          });
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to register: " + error.message);
      });
  };

  if (!isOpen) return null;

  return (
    <dialog open className="modal modal-open">
      <div className="modal-box bg-base-100 text-base-content max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <form onSubmit={handleRegister} className="space-y-3">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
            required
          />
          <input
            name="photoURL"
            type="url"
            placeholder="Photo URL"
            className="input input-bordered w-full"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />
          {error && <p className="text-error text-sm">{error}</p>}
          <button type="submit" className="btn btn-primary w-full mt-2">
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <button
              type="button"
              className="link text-blue-600"
              onClick={switchToLogin}
            >
              Sign In
            </button>
          </p>
        </div>

        <div className="modal-action">
          <button type="button" className="btn btn-sm" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Register;
