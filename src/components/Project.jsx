import React from "react";
import "../index.css";

const ProjectData = [
  {
    id: 1,
    title: "Crypto Screener Application",
    description:
      "I'm Evren Shah. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image:
      "https://res.cloudinary.com/dnbeaiurw/image/upload/v1735297967/png_efbmnb.svg", // Assuming images are in the public/assets folder
    link: "https://example.com",
  },
  {
    id: 2,
    title: "Crypto Screener Application",
    description:
      "I'm Evren Shah. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image:
      "https://res.cloudinary.com/dnbeaiurw/image/upload/v1735297967/png_efbmnb.svg",
    link: "https://example.com",
  },
  {
    id: 3,
    title: "Crypto Screener Application",
    description:
      "I'm Evren Shah. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image:
      "https://res.cloudinary.com/dnbeaiurw/image/upload/v1735297967/png_efbmnb.svg",
    link: "https://example.com",
  },
];

const Project = () => {
  return (
    // Added a div with a black background
    <div className="bg-black">
      {ProjectData.map((project) => (
        <div
          key={project.id} // Unique key for each project
          className="flex flex-col md:flex-row items-center bg-black text-white p-4 md:p-8 rounded-lg shadow-lg mb-8"
        >
          <div className="w-full md:w-1/2">
            <img
              className="rounded-lg w-full"
              src={project.image} // Fixed property reference
              alt={project.title}
            />
          </div>
          <div className="w-full md:w-1/2 p-4 md:ml-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">
              0{project.id}
            </h2>
            <h3 className="text-2xl md:text-3xl font-extrabold mb-2 md:mb-4">
              {project.title}
            </h3>
            <p className="text-lg md:text-xl text-gray-400 mb-4 md:mb-6">
              {project.description}
            </p>
            <a
              href={project.link} // Fixed property reference
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline flex items-center"
            >
              <img
                className="h-5 w-5 mr-2"
                src="/assets/Share.svg" // Assuming this is in the public/assets folder
                alt="Share icon"
              />
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
