import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { toast } from "react-hot-toast";

const BeAVolunteer = ({ post }) => {
  const { user } = useContext(AuthContext);
  const [suggestion, setSuggestion] = useState("");

  const handleRequest = async (e) => {
    e.preventDefault();

    const requestData = {
      postId: post._id,
      thumbnail: post.thumbnail,
      title: post.title,
      description: post.description,
      category: post.category,
      location: post.location,
      deadline: post.deadline,
      organizerName: post.organizerName,
      organizerEmail: post.organizerEmail,
      volunteerName: user?.displayName,
      volunteerEmail: user?.email,
      suggestion,
      status: "requested",
      requestDate: new Date(),
    };

    try {
      const res = await fetch("https://voluntree-server-ipvpml078-ulfatharaislams-projects.vercel.app/volunteerRequests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      const result = await res.json();
      if (result.success) {
        toast.success("Request sent successfully!");
        document.getElementById("volunteer_modal").close();
      } else {
        toast.error(result.message || "Failed to request");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <dialog id="volunteer_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Volunteer Request Form</h3>
        <form onSubmit={handleRequest} className="space-y-2">
          <label className="font-semibold">Thumbnail</label>
          <input
            type="text"
            value={post.thumbnail}
            readOnly
            className="input input-bordered w-full"
          />

          <label className="font-semibold">Title</label>
          <input
            type="text"
            value={post.title}
            readOnly
            className="input input-bordered w-full"
          />

          <label className="font-semibold">Description</label>
          <textarea
            value={post.description}
            readOnly
            className="textarea textarea-bordered w-full"
          ></textarea>

          <label className="font-semibold">Category</label>
          <input
            type="text"
            value={post.category}
            readOnly
            className="input input-bordered w-full"
          />

          <label className="font-semibold">Location</label>
          <input
            type="text"
            value={post.location}
            readOnly
            className="input input-bordered w-full"
          />

          <label className="font-semibold">Volunteers Needed</label>
          <input
            type="text"
            value={post.volunteersNeeded}
            readOnly
            className="input input-bordered w-full"
          />

          <label className="font-semibold">Deadline</label>
          <input
            type="text"
            value={new Date(post.deadline).toLocaleDateString()}
            readOnly
            className="input input-bordered w-full"
          />

          <label className="font-semibold">Organizer Name</label>
          <input
            type="text"
            value={post.organizerName}
            readOnly
            className="input input-bordered w-full"
          />

          <label className="font-semibold">Organizer Email</label>
          <input
            type="email"
            value={post.organizerEmail}
            readOnly
            className="input input-bordered w-full"
          />

          <label className="font-semibold">Your Name</label>
          <input
            type="text"
            value={user?.displayName}
            readOnly
            className="input input-bordered w-full"
          />

          <label className="font-semibold">Your Email</label>
          <input
            type="email"
            value={user?.email}
            readOnly
            className="input input-bordered w-full"
          />

          <label className="font-semibold">Your Suggestion</label>
          <textarea
            placeholder="Your suggestion..."
            className="textarea textarea-bordered w-full"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
          ></textarea>

          <label className="font-semibold">Status</label>
          <input
            type="text"
            value="requested"
            readOnly
            className="input input-bordered w-full"
          />

          <div className="modal-action flex justify-between">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => document.getElementById("volunteer_modal").close()}
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary w-full max-w-xs">
              Request
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default BeAVolunteer;
