// components/WhyVolunteer.jsx
import React from "react";

const reasons = [
  {
    title: "Make a Real Impact",
    description: "Your time and skills directly support communities in need and change lives for the better.",
    icon: "🌍"
  },
  {
    title: "Grow Your Skills",
    description: "Volunteering offers leadership, teamwork, and project management experience.",
    icon: "📈"
  },
  {
    title: "Build Connections",
    description: "Meet like-minded people and become part of a purpose-driven community.",
    icon: "🤝"
  },
];

const WhyVolunteer = () => {
  return (
    <div className="py-12 bg-base-200 text-base-content">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Volunteer With Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <div key={i} className="bg-base-100 shadow-md rounded-xl p-6">
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyVolunteer;
