import React from "react";
import { toast } from "react-hot-toast";

const UpdatePost = ({ selectedPost, user, setMyPosts, myPosts, onClose }) => {
  if (!selectedPost) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedPost = {
      thumbnail: form.thumbnail.value,
      title: form.title.value,
      description: form.description.value,
      category: form.category.value,
      location: form.location.value,
      volunteersNeeded: form.volunteersNeeded.value,
      deadline: form.deadline.value,
      organizerName: user.displayName,
      organizerEmail: user.email,
    };

    const res = await fetch(
      `http://localhost:3000/volunteers/${selectedPost._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPost),
      }
    );

    const result = await res.json();
    if (result.modifiedCount > 0) {
      toast.success("Post updated successfully!");
      const updated = myPosts.map((p) =>
        p._id === selectedPost._id ? { ...p, ...updatedPost } : p
      );
      setMyPosts(updated);
      onClose();
    } else {
      toast.error("Failed to update post.");
    }
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-4 text-center">Update Volunteer Post</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="label" htmlFor="thumbnail">Thumbnail URL</label>
          <input
            id="thumbnail"
            name="thumbnail"
            defaultValue={selectedPost.thumbnail}
            placeholder="Thumbnail URL"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="label" htmlFor="title">Post Title</label>
          <input
            id="title"
            name="title"
            defaultValue={selectedPost.title}
            placeholder="Post Title"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="label" htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            defaultValue={selectedPost.description}
            placeholder="Description"
            className="textarea textarea-bordered w-full"
          />
        </div>

        <div>
          <label className="label" htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            defaultValue={selectedPost.category}
            className="select select-bordered w-full"
          >
            <option>healthcare</option>
            <option>education</option>
            <option>social service</option>
            <option>animal welfare</option>
          </select>
        </div>

        <div>
          <label className="label" htmlFor="location">Location</label>
          <input
            id="location"
            name="location"
            defaultValue={selectedPost.location}
            placeholder="Location"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="label" htmlFor="volunteersNeeded">Number of Volunteers Needed</label>
          <input
            id="volunteersNeeded"
            type="number"
            name="volunteersNeeded"
            defaultValue={selectedPost.volunteersNeeded}
            placeholder="Volunteers Needed"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="label" htmlFor="deadline">Deadline</label>
          <input
            id="deadline"
            type="date"
            name="deadline"
            defaultValue={selectedPost.deadline?.split("T")[0]}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="label" htmlFor="organizerName">Organizer Name</label>
          <input
            id="organizerName"
            name="organizerName"
            defaultValue={user.displayName}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        <div>
          <label className="label" htmlFor="organizerEmail">Organizer Email</label>
          <input
            id="organizerEmail"
            name="organizerEmail"
            defaultValue={user.email}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        <div className="modal-action">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
          <button type="button" className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePost;
