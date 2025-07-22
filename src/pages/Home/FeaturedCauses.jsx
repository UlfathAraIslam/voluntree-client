import React from "react";

const FeaturedCauses = () => {
  const causes = [
    {
      id: 1,
      title: "Clean Water Initiative",
      image: "https://plus.unsplash.com/premium_photo-1678837556048-8809e355241b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYW4lMjB3YXRlciUyMHZvbHVudGVlcnxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Provide safe drinking water to underserved communities and reduce waterborne diseases.",
    },
    {
      id: 2,
      title: "Tree Plantation Drive",
      image: "https://plus.unsplash.com/premium_photo-1681140560745-db9be86fa713?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJlZSUyMHBsYW50fGVufDB8fDB8fHww",
      description:
        "Help us plant thousands of trees to combat deforestation and climate change.",
    },
    {
      id: 3,
      title: "Support for Elderly",
      image: "https://plus.unsplash.com/premium_photo-1681995659712-df495ba6bccb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
      description:
        "Join hands to assist senior citizens with daily needs and companionship.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Causes</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {causes.map((cause) => (
          <div key={cause.id} className="bg-white shadow rounded-lg overflow-hidden">
            <img src={cause.image} alt={cause.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{cause.title}</h3>
              <p className="text-gray-600">{cause.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCauses;
