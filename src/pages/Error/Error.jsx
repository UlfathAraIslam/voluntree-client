import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 px-4 py-12">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
      <p className="text-gray-400">404: Page Not Found</p>
        <h1 className="text-6xl text-gray-600 mb-4">Well, this isn't Voluntree...</h1>
        <p className="text-gray-600 mb-6">
          Sorry, we couldn't find the page you were looking for. The link you followed may be broken, or the page may have been removed.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold"
        >
          Go to Homepage
        </Link>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-10 md:mt-0">
        <img
          src="https://i.ibb.co/S0QmGH7/error-404.png"
          alt="Error Illustration"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </div>
  );
};

export default Error;
