import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer flex flex-col sm:flex-row flex-wrap justify-between bg-base-200 text-base-content p-10">
      {/* Logo and Description */}
      <aside className="space-y-2">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-primary"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 
            10 10 10 10-4.48 10-10S17.52 2 12 
            2zm1 17.93c-2.83.48-5.64-.3-7.78-2.44a9.93 
            9.93 0 0 1-2.15-4.14c-.11-.43.27-.85.72-.85h2.1c.45 
            0 .83.3.94.74.25.95.7 1.84 1.34 
            2.58a6.984 6.984 0 0 0 8.24 1.88c.39-.18.84.08.92.5.15.74.24 
            1.52.26 2.31.01.46-.37.85-.83.85h-.01z" />
          </svg>
          Voluntree
        </Link>
        <p className="text-sm max-w-xs">
          Empowering communities by connecting volunteers with meaningful causes.
        </p>
      </aside>

      {/* Navigation Links */}
      <nav className="space-y-2">
        <h6 className="footer-title">Navigation</h6>
        <Link to="/" className="link link-hover">Home</Link>
        <Link to="/all-volunteers" className="link link-hover">All Volunteer Posts</Link>
        <Link to="/add-volunteer-post" className="link link-hover">Add Volunteer Post</Link>
        <Link to="/manage-posts" className="link link-hover">Manage My Posts</Link>
      </nav>

      {/* Company Info */}
      <nav className="space-y-2">
        <h6 className="footer-title">Company</h6>
        <Link to="/about-us" className="link link-hover">About Us</Link>
        <Link to="/contact" className="link link-hover">Contact</Link>
        <Link to="/faq" className="link link-hover">FAQ</Link>
        <Link to="/support" className="link link-hover">Support</Link>
      </nav>

      {/* Legal */}
      <nav className="space-y-2">
        <h6 className="footer-title">Legal</h6>
        <Link to="/terms" className="link link-hover">Terms of Use</Link>
        <Link to="/privacy-policy" className="link link-hover">Privacy Policy</Link>
        <Link to="/cookies" className="link link-hover">Cookie Policy</Link>
      </nav>
    </footer>
  );
};

export default Footer;
