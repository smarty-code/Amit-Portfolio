import React from "react";
import "../index.css";

const SkillData = [
  {
    icon: "src/assets/skills/HTML.svg",
    name: "HTML",
  },
  {
    icon: "src/assets/skills/CSS.svg",
    name: "CSS",
  },
  {
    icon: "src/assets/skills/git.svg",
    name: "GIT",
  },
  {
    icon: "src/assets/skills/tailwindcss.svg",
    name: "TailwindCSS",
  },
  {
    icon: "src/assets/skills/javascript.svg",
    name: "JavaScript",
  },
  {
    icon: "src/assets/skills/figma.svg",
    name: "Figma",
  },
  {
    icon: "src/assets/skills/react.svg",
    name: "React JS",
  },
  {
    icon: "src/assets/skills/next-js.svg",
    name: "Next JS",
  },
];
function Skills() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10 pb-20">
        <h1 className="text-center m-5 font-sens  font-medium text-lg md:text-5xl lg:mt-5 lg:mb-8">
          My
          <span className=" font-sora font-extrabold m-2 text-black">
            Skills
          </span>
        </h1>
        <div className=" m-5 flex justify-center items-center flex-wrap">
          <div className=" lg:gap-16 grid md:grid-cols-4 grid-cols-2 gap-5">
            {SkillData.map((skill) => (
              <div className="h-40 w-40 border-2 border-black text-center rounded ">
                <img
                  className="w-12 h-12 mt-6 inline-block "
                  src={skill.icon}
                  alt={skill.name}
                />
                <h3 className="mt-8 font-sans font-bold text-xl">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
