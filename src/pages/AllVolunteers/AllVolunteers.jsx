import React, { useEffect, useState } from "react";

const AllVolunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/volunteers") // replace with your API base URL
      .then((res) => res.json())
      .then((data) => {
        setVolunteers(data);
        setLoading(false);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        setError("Failed to load volunteers.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-10">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">All Volunteer Needs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {volunteers.map((volunteer) => (
          <div
            key={volunteer._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={volunteer.thumbnail}
              alt={volunteer.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{volunteer.title}</h2>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Category:</span> {volunteer.category}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-medium">Deadline:</span>{" "}
                {new Date(volunteer.deadline).toLocaleDateString()}
              </p>
              <button className="btn btn-outline btn-primary w-full">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVolunteers;
