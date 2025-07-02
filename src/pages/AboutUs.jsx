import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      
      {/* Banner Image */}
      <div className="mb-10">
        <img
          src="https://plus.unsplash.com/premium_vector-1682305541282-b01b5632b3e2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dm9sdW50ZWVyfGVufDB8fDB8fHww"
          alt="About Voluntree Banner"
          className="w-full h-64 object-cover rounded-lg shadow"
        />
      </div>

      <h1 className="text-4xl font-bold text-center text-primary mb-6">
        About Voluntree
      </h1>

      <p className="text-lg text-gray-700 text-center mb-10 max-w-3xl mx-auto">
        Voluntree is a platform designed to connect passionate individuals with
        meaningful volunteer opportunities. Our goal is to empower communities
        by making it easier to find, join, and organize volunteer events.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-base-200 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-3">🌍 Our Mission</h3>
          <p>
            To create a unified space where people can contribute their time and
            skills to causes that matter, fostering positive social impact.
          </p>
        </div>

        <div className="p-6 bg-base-200 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-3">🤝 Our Values</h3>
          <p>
            Community, Compassion, and Commitment. We believe everyone has the
            power to make a difference, and together, we can build stronger,
            more resilient communities.
          </p>
        </div>

        <div className="p-6 bg-base-200 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-3">🚀 Why Choose Voluntree?</h3>
          <p>
            We make volunteering simple, transparent, and accessible. Whether
            you want to help locally or contribute to global initiatives,
            Voluntree provides trusted, verified opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
