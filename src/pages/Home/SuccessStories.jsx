// components/SuccessStories.jsx
import React from "react";

const stories = [
  {
    name: "Aisha, Bangladesh",
    story: "Through Voluntree, I found a teaching opportunity in my village. It changed my life and many children's futures.",
    image: "https://i.ibb.co/YR1PtZY/aisha.jpg"
  },
  {
    name: "Ken, Japan",
    story: "I volunteered for disaster relief and met amazing people. The impact was real, and I’ll never forget it.",
    image: "https://i.ibb.co/vwZgb8x/ken.jpg"
  },
  {
    name: "Ken, Japan",
    story: "I volunteered for disaster relief and met amazing people. The impact was real, and I’ll never forget it.",
    image: "https://i.ibb.co/vwZgb8x/ken.jpg"
  },
  {
    name: "Ken, Japan",
    story: "I volunteered for disaster relief and met amazing people. The impact was real, and I’ll never forget it.",
    image: "https://i.ibb.co/vwZgb8x/ken.jpg"
  },
];

const SuccessStories = () => {
  return (
    <div className="py-12 bg-white text-base-content">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <div key={i} className="p-6">
              <img src={story.image} alt={story.name} className="w-45 h-45 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-semibold">{story.name}</h3>
              <p className="mt-2 text-sm">{story.story}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
