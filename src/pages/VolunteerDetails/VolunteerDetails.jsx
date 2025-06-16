import React from "react";
import { useLoaderData } from "react-router";
import BeAVolunteer from "../BeAVolunteer/BeAVolunteer";

const VolunteerDetails = () => {
  const volunteer = useLoaderData();
  const {
    title,
    thumbnail,
    category,
    description,
    location,
    volunteersNeeded,
    organizerName,
    organizerEmail,
    deadline,
  } = volunteer;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-white dark:bg-base-200 rounded-2xl shadow-lg dark:border-gray-700">
      <h1 className="text-3xl font-bold text-center text-primary mb-6">
        {title}
      </h1>

      <img
        src={thumbnail}
        alt={title}
        className="w-full h-72 object-cover rounded-xl shadow mb-6"
      />

      <div className="grid md:grid-cols-2 gap-6 ">
        <div>
          <h2 className="text-lg font-semibold mb-2">About the Opportunity</h2>
          <p className="mb-4 text-justify leading-relaxed">{description}</p>
          <p>
            <span className="font-medium">Category:</span> {category}
          </p>
          <p>
            <span className="font-medium">Location:</span> {location}
          </p>
          <p>
            <span className="font-medium">Deadline:</span>{" "}
            {new Date(deadline).toLocaleDateString()}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Organizer Info</h2>
          <p>
            <span className="font-medium">Name:</span> {organizerName}
          </p>
          <p>
            <span className="font-medium">Email:</span>{" "}
            <a
              href={`mailto:${organizerEmail}`}
              className="text-blue-600 underline"
            >
              {organizerEmail}
            </a>
          </p>
          <p>
            <span className="font-medium">Volunteers Needed:</span>{" "}
            {volunteersNeeded}
          </p>

          <button
            className="mt-6 w-full btn btn-primary btn-lg rounded-xl"
            onClick={() =>
              document.getElementById("volunteer_modal")?.showModal()
            }
          >
            Be a Volunteer
          </button>
        </div>
      </div>

      {/* 🔽 Volunteer Request Modal */}
      <BeAVolunteer post={volunteer}/>
    </div>
  );
};

export default VolunteerDetails;
