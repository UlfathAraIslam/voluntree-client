import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Empowering Communities Through Volunteerism",
      image: "https://plus.unsplash.com/premium_vector-1682305380375-41c90749faec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZvbHVudGVlcmlzbXxlbnwwfHwwfHx8MA%3D%3D",
      content:
        "Volunteering strengthens our communities by fostering cooperation, empathy, and support networks. Every small act contributes to lasting positive change, making neighborhoods safer, healthier, and more connected.",
    },
    {
      id: 2,
      title: "Youth as Change-Makers: The Future Starts Now",
      image: "https://plus.unsplash.com/premium_vector-1737279270147-771018af3f5c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eW91dGglMjB2b2x1bnRlZXJpc218ZW58MHx8MHx8fDA%3D",
      content:
        "Today's youth are tomorrow's leaders. By engaging in volunteer programs early, young people develop leadership, problem-solving, and teamwork skills—building confidence and driving impactful social change.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {blogs.map((blog, index) => (
        <div
          key={blog.id}
          className={`flex flex-col md:flex-row items-center gap-8 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="md:w-1/2">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-72 object-cover rounded-lg shadow"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold">{blog.title}</h2>
            <p className="text-gray-700">{blog.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
