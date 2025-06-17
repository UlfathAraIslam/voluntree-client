import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import UpdatePost from "../UpdatePost/UpdatePost";

const ManagePosts = () => {
  const { user } = useContext(AuthContext);
  const [myPosts, setMyPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [myRequests, setMyRequests] = useState([]);

  const token = localStorage.getItem("voluntree-token");

  useEffect(() => {
    if (user?.email && token) {
      fetch(`http://localhost:3000/my-volunteers?email=${user.email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setMyPosts(data));

      fetch(`http://localhost:3000/my-volunteer-requests?email=${user.email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setMyRequests(data));
    }
  }, [user, token]);

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
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    if (data.deletedCount) {
      Swal.fire("Deleted!", "Your post has been deleted.", "success");
      setMyPosts(myPosts.filter((post) => post._id !== id));
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
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    if (data.deletedCount) {
      Swal.fire("Cancelled!", "Your request has been cancelled.", "success");
      setMyRequests(myRequests.filter((req) => req._id !== id));
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
                    onClick={() => {
                      setSelectedPost(post);
                      document.getElementById("update-modal").showModal();
                    }}
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

      {/* Update Post Modal */}
      <dialog id="update-modal" className="modal">
        <div className="modal-box max-w-2xl">
          <form method="dialog" className="modal-backdrop absolute right-2 top-2">
            <button className="btn btn-sm">✕</button>
          </form>
          {selectedPost && (
            <UpdatePost
              selectedPost={selectedPost}
              user={user}
              setMyPosts={setMyPosts}
              myPosts={myPosts}
              onClose={() => {
                setSelectedPost(null);
                document.getElementById("update-modal").close();
              }}
            />
          )}
        </div>
      </dialog>
    </div>
  );
};

export default ManagePosts;
