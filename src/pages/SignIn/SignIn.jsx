// components/SignIn/SignInModal.jsx
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import React, { useContext, useState } from "react";

const SignIn = ({ isOpen, onClose, switchToRegister }) => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        Swal.fire("Success!", "Login successful", "success");
        onClose();
      })
      .catch(() => {
        setError("Invalid email or password");
      });
  };

  if (!isOpen) return null;

  return (
    <dialog open className="modal modal-open">
      <div className="modal-box bg-base-100 text-base-content">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSignIn}>
          <input name="email" type="email" placeholder="Email" className="input input-bordered w-full mb-2" required />
          <input name="password" type="password" placeholder="Password" className="input input-bordered w-full mb-2" required />
          {error && <p className="text-error mb-2">{error}</p>}
          <button className="btn btn-primary w-full mb-2">Login</button>
        </form>

        <div className="divider">OR</div>
        <button onClick={() => {
          signInWithGoogle()
            .then(() => {
              Swal.fire("Success!", "Google login successful", "success");
              onClose();
            })
            .catch(() => setError("Google sign-in failed"));
        }} className="btn btn-outline w-full flex items-center gap-2">
          <FcGoogle className="text-xl" /> Sign in with Google
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm">
            New here? <button className="link text-blue-600" onClick={switchToRegister}>Create an account</button>
          </p>
        </div>
        <div className="modal-action">
          <button className="btn btn-sm" onClick={onClose}>Close</button>
        </div>
      </div>
    </dialog>
  );
};

export default SignIn;
