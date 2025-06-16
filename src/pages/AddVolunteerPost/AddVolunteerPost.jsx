import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const AddVolunteerPost = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [deadline, setDeadline] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const thumbnail = form.thumbnail.value;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteersNeeded = parseInt(form.volunteersNeeded.value);

    const newPost = {
      thumbnail,
      title,
      description,
      category,
      location,
      volunteersNeeded,
      deadline: deadline.toISOString(),
      organizerName: user?.displayName || "Anonymous",
      organizerEmail: user?.email || "Not available",
    };

    try {
      const res = await fetch("http://localhost:3000/volunteers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });

      const data = await res.json();
      if (data.insertedId) {
        toast.success("Volunteer post added successfully!");
        navigate("/"); // Redirect to home or posts
      } else {
        toast.error("Failed to add post");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6">Add Volunteer Need Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="thumbnail" type="text" placeholder="Thumbnail URL" className="input input-bordered w-full" required />
        <input name="title" type="text" placeholder="Post Title" className="input input-bordered w-full" required />
        <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full" required></textarea>
        <select name="category" className="select select-bordered w-full" required>
          <option disabled selected>Choose Category</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Education">Education</option>
          <option value="Social Service">Social Service</option>
          <option value="Animal Welfare">Animal Welfare</option>
        </select>
        <input name="location" type="text" placeholder="Location" className="input input-bordered w-full" required />
        <input name="volunteersNeeded" type="number" min="1" placeholder="Number of Volunteers Needed" className="input input-bordered w-full" required />
        <div>
          <label className="block mb-1 font-medium">Deadline Date</label>
          <DatePicker selected={deadline} onChange={(date) => setDeadline(date)} className="input input-bordered w-full" required />
        </div>
        <input type="text" value={user?.displayName || ""} readOnly className="input input-bordered w-full bg-gray-100" />
        <input type="email" value={user?.email || ""} readOnly className="input input-bordered w-full bg-gray-100" />
        <button type="submit" className="btn btn-primary w-full">Add Post</button>
      </form>
    </div>
  );
};

export default AddVolunteerPost;
