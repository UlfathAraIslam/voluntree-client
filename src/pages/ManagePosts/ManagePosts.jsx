import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const ManagePosts = () => {
  const { user } = useContext(AuthContext);
  const [myPosts, setMyPosts] = useState([]);
  const [myRequests, setMyRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-volunteers?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyPosts(data));

      fetch(`http://localhost:3000/my-volunteer-requests?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyRequests(data));
    }
  }, [user]);

  // Delete volunteer need post
  const handleDeletePost = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This post will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    const res = await fetch(`http://localhost:3000/volunteers/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    if (data.deletedCount) {
      Swal.fire("Deleted!", "Your post has been deleted.", "success");
      setMyPosts(myPosts.filter(post => post._id !== id));
    }
  };

  // Cancel volunteer request
  const handleCancelRequest = async (id) => {
    const result = await Swal.fire({
      title: "Cancel request?",
      text: "This volunteer request will be cancelled!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, cancel it!",
    });

    if (!result.isConfirmed) return;

    const res = await fetch(`http://localhost:3000/volunteerRequests/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    if (data.deletedCount) {
      Swal.fire("Cancelled!", "Your request has been cancelled.", "success");
      setMyRequests(myRequests.filter(req => req._id !== id));
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-8">
      <h2 className="text-2xl font-bold text-center">My Volunteer Need Posts</h2>
      {myPosts.length > 0 ? (
        <table className="table w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myPosts.map((post) => (
              <tr key={post._id}>
                <td>{post.title}</td>
                <td>{post.category}</td>
                <td>{new Date(post.deadline).toLocaleDateString()}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning mr-2"
                    onClick={() => navigate(`/update-post/${post._id}`)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDeletePost(post._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">No volunteer posts found.</p>
      )}

      <h2 className="text-2xl font-bold text-center mt-10">My Volunteer Request Posts</h2>
      {myRequests.length > 0 ? (
        <table className="table w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>Location</th>
              <th>Suggestion</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myRequests.map((req) => (
              <tr key={req._id}>
                <td>{req.title}</td>
                <td>{req.location}</td>
                <td>{req.suggestion}</td>
                <td>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleCancelRequest(req._id)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">No volunteer requests found.</p>
      )}
    </div>
  );
};

export default ManagePosts;
