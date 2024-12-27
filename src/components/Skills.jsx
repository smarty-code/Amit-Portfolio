import "../index.css";

const SkillData = [
  {
    icon: "https://res.cloudinary.com/dnbeaiurw/image/upload/v1735297969/HTML_rjnncz.svg",
    name: "HTML",
  },
  {
    icon: "https://res.cloudinary.com/dnbeaiurw/image/upload/v1735297967/CSS_gjjdbx.svg",
    name: "CSS",
  },
  {
    icon: "https://res.cloudinary.com/dnbeaiurw/image/upload/v1735297969/git_uk6jmv.svg",
    name: "GIT",
  },
  {
    icon: "https://res.cloudinary.com/dnbeaiurw/image/upload/v1735297967/CSS_gjjdbx.svg",
    name: "TailwindCSS",
  },
  {
    icon: "https://res.cloudinary.com/dnbeaiurw/image/upload/v1735297969/JavaScript_fhymmy.svg",
    name: "JavaScript",
  },
  {
    icon: "https://res.cloudinary.com/dnbeaiurw/image/upload/v1735297968/figma_wbxkr7.svg",
    name: "Figma",
  },
  {
    icon: "https://res.cloudinary.com/dnbeaiurw/image/upload/v1735297964/react_ahxcyu.svg",
    name: "React JS",
  },
  {
    icon: "https://res.cloudinary.com/dnbeaiurw/image/upload/v1735297962/next-js_toi7hf.svg",
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
