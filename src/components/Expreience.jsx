import React from "react";
import "../index.css";

const ExperienceData = [
  {
    icon: "src/assets/google.svg",
    name: "Google",
    role: "Lead Software Engineer",
    date: "Nov 2019 - Present",
    description:
      "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
  },
  {
    icon: "src/assets/youtube.svg",
    name: "YouTube",
    role: "Lead Software Engineer",
    date: "Nov 2019 - Present",
    description:
      "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
  },
  {
    icon: "src/assets/apple.svg",
    name: "Apple",
    role: "Lead Software Engineer",
    date: "Nov 2019 - Present",
    description:
      "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
  },
];
function Expreience() {
  return (
    <>
      <div className="bg-black">
        ugi
        <div className="bg-black text-white mt-6 md:pl-20 md:pr-20">
          <div>
            <h1 className="text-3xl text-center pt-5 pb-5">
              My
              <span className="text-3xl font-extrabold font-sora p-3">
                Experience
              </span>
            </h1>
          </div>
          <div className="p-8">
            {ExperienceData.map((experience) => (
              <div className="border-2 rounded-xl mt-5 mb-10">
                <div className="p-8">
                  <div className="md:flex justify-between items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                      <img
                        className="ml-5 w-10 h-10"
                        src={experience.icon}
                        alt={experience.name}
                      />
                      <h1 className="text-2xl font-semibold pl-4">
                        {experience.role} at {experience.name}
                      </h1>
                    </div>
                    <div className="md:text-right text-lg md:text-2xl font-bold">
                      {experience.date}
                    </div>
                  </div>
                  <p className="text-2xl text-gray-400 mt-4">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Expreience;
