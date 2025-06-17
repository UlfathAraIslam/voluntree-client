import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Spinner from "../../components/Spinner/Spinner";

const AllVolunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isTableView, setIsTableView] = useState(false); // Toggle state

  const fetchVolunteers = async (query = "") => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://voluntree-server-liart.vercel.app/volunteers?search=${query}`
      );
      const data = await res.json();
      setVolunteers(data);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Failed to load volunteers.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVolunteers();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchVolunteers(searchText);
  };

  if (loading)
    return (
      <div className="text-center p-10">
        <Spinner />
      </div>
    );

  if (error)
    return <div className="text-center text-red-500 p-10">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">All Volunteer Needs</h1>

      {/* 🔍 Search Form */}
      <form onSubmit={handleSearch} className="mb-6 text-center">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input input-bordered w-full max-w-md"
        />
        <button type="submit" className="btn btn-primary ml-2">
          Search
        </button>
      </form>

      {/* 🔁 Layout Toggle Button */}
      <div className="text-right mb-4">
        <button
          className="btn btn-outline btn-sm"
          onClick={() => setIsTableView(!isTableView)}
        >
          {isTableView ? "Switch to Card View" : "Switch to Table View"}
        </button>
      </div>

      {/* 📄 Table View */}
      {isTableView ? (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Thumbnail</th>
                <th>Title</th>
                <th>Category</th>
                <th>Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {volunteers.map((volunteer) => (
                <tr key={volunteer._id}>
                  <td>
                    <img
                      src={volunteer.thumbnail}
                      alt={volunteer.title}
                      className="h-16 w-16 object-cover rounded"
                    />
                  </td>
                  <td>{volunteer.title}</td>
                  <td>{volunteer.category}</td>
                  <td>{new Date(volunteer.deadline).toLocaleDateString()}</td>
                  <td>
                    <Link
                      to={`/volunteers/${volunteer._id}`}
                      className="btn btn-sm btn-primary"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // 🧱 Card View
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
                  <span className="font-medium">Category:</span>{" "}
                  {volunteer.category}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  <span className="font-medium">Deadline:</span>{" "}
                  {new Date(volunteer.deadline).toLocaleDateString()}
                </p>
                <Link
                  to={`/volunteers/${volunteer._id}`}
                  className="inline-block mt-3 px-4 py-2 bg-primary text-white rounded hover:bg-primary-focus transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllVolunteers;
