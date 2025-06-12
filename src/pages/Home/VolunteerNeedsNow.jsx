// components/VolunteerNeedsNow.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const VolunteerNeedsNow = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/volunteers?limit=6")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error loading posts", err));
  }, []);

  return (
    <section className="py-10 bg-base-100 text-base-content">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Volunteer Needs Now</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post._id} className="card shadow-md bg-white rounded-lg overflow-hidden">
              <img src={post.thumbnail} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-600">Category: {post.category}</p>
                <p className="text-sm text-red-500">Deadline: {new Date(post.deadline).toLocaleDateString()}</p>
                <Link
                  to={`/volunteer/${post._id}`}
                  className="inline-block mt-3 px-4 py-2 bg-primary text-white rounded hover:bg-primary-focus transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/all-volunteers"
            className="px-6 py-2 bg-secondary text-white rounded hover:bg-secondary-focus"
          >
            See All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VolunteerNeedsNow;
