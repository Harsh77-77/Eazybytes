import React, { useState, useEffect } from "react";

const AboutMe = () => {
  const [rotation, setRotation] = useState(0);

  // Update rotation based on scroll position
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newRotation = scrollY * 0.1; // Adjust this factor to control speed
    setRotation(newRotation);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="About">
      <div className="-mt-96 md:-mt-96 lg:-mt-0">
        <div className="flex flex-col lg:flex-row">
          <div className="pt-96 mt-24 mx-10 lg:pt-10 lg:mx-48 md:mx-auto md:pt-">
            <h1 className="text-xl text-blue-500 font-semibold lg:text-2xl">
              ABOUT ME
            </h1>
            <p className="text-3xl font-bold lg:text-5xl">
              Better design, Better experience
            </p>
            <br />
            <div className="text-gray-600 lg:font-semibold">
              <p>
                Hello! I’m Harsh, a passionate web developer with a Bachelor’s
                degree in Computer Applications.
              </p>
              <br className="block sm:hidden" />
              <p>
                I’m constantly exploring new technologies, staying up-to-date
                with industry trends, and expanding my skill set.
              </p>
              <br className="block sm:hidden" />
              <p>
                I’m always open to collaboration, so feel free to reach out.
                Let’s build something amazing together! 🌟
              </p>
            </div>
          </div>
          <div className="mt-10 mx-14 md:mx-auto lg:mx-auto lg:ml-10 lg:mt-0 lg:order-last lg:self-center md:pr-14 lg:pt-20 ">
            <img
              src="/assets/ornament.svg"
              className="w-24 lg:w-40"
              style={{ transform: `rotate(${rotation}deg)` }}
              alt="Ornament"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
