import React from "react";
import "../index.css";

const ContactForm = () => {
  return (
    <div className="m-5">
      <div className="md:flex md:px-20 md:py-20">
        <div className="md:w-1/2">
          <form action="" className="">
            <div className="w-full md:w-80 h-14 my-5">
              <input
                type="text"
                placeholder="Your name"
                className="w-full h-14 border-black border-solid border-2 pl-4 rounded"
              />
            </div>
            <div className="w-full md:w-80 h-14 my-5">
              <input
                type="text"
                placeholder="Email"
                className="w-full h-14 border-black border-solid border-2 pl-4 rounded"
              />
            </div>
            <div className="w-full md:w-80 h-14 my-5">
              <input
                type="text"
                placeholder="Your websites (if exists)"
                className="w-full h-14 border-black border-solid border-2 pl-4 rounded"
              />
            </div>
            <div className="w-full md:w-80 h-36 my-5">
              <input
                type="text"
                placeholder="How can I help you?*"
                className="border-solid border-2 w-full h-36 border-black pl-4 pb-20 rounded"
              />
            </div>
            <div className="md:flex">
              <button className="w-full md:w-28  h-12 bg-black text-white rounded">
                Get In Touch
              </button>
              <div className="flex flex-row py-5 md:py-0 justify-center md:justify-start md:pl-4">
                <div className="mr-6">
                  <img
                    src="src/assets/github.svg"
                    alt="Github"
                    className="h-12 w-12 rounded"
                  />
                </div>
                <div className="mr-6">
                  <img
                    src="src/assets/x.svg"
                    alt="X"
                    className="h-12 w-12 rounded"
                  />
                </div>
                <div className="mr-6">
                  <img
                    src="src/assets/linkedin.svg"
                    alt="LinkedIn"
                    className="h-12 w-12 rounded"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="md:w-1/2 mt-5 md:mt-0 md:pl-8">
          <div className="md:text-5xl font-sora font-bold">
            <h3 className="text-2xl md:text-5xl font-extrabold pb-3 pt-5">
              Let's talk for
            </h3>
            <h3 className="text-2xl md:text-5xl pb-4">Something special</h3>
          </div>
          <div className="my-8">
            <p className="text-lg md:text-base text-gray-500">
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>
          </div>
          <div className="font-sans font-bold">
            <h4 className="text-xl">youremail@gmail.com</h4>
            <h4 className="my-3 text-xl">1234567890</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
