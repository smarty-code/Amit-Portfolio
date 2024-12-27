import HTML from "../assets/skills/HTML.svg";
import CSS from "../assets/skills/CSS.svg";
import GIT from "../assets/skills/git.svg";
import TailwindCSS from "../assets/skills/tailwindcss.svg";
import JavaScript from "../assets/skills/javascript.svg";
import Figma from "../assets/skills/figma.svg";
import ReactJS from "../assets/skills/react.svg";
import NextJS from "../assets/skills/next-js.svg";

import "../index.css";

const SkillData = [
  {
    icon: HTML,
    name: "HTML",
  },
  {
    icon: CSS,
    name: "CSS",
  },
  {
    icon: GIT,
    name: "GIT",
  },
  {
    icon: TailwindCSS,
    name: "TailwindCSS",
  },
  {
    icon: JavaScript,
    name: "JavaScript",
  },
  {
    icon: Figma,
    name: "Figma",
  },
  {
    icon: ReactJS,
    name: "React JS",
  },
  {
    icon: NextJS,
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
              // eslint-disable-next-line react/jsx-key
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
