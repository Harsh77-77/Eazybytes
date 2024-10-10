import React from "react";

const AboutMe = () => {
  return (
    
    <section id="About">
      <div className="-mt-96  md:-mt-96 lg:-mt-0  ">
        <div className="flex">
          <div className="pt-96 mt-24 mx-10 lg:pt-10 lg:mx-48  ">
            <h1 className="text-xl text-blue-500 font-semibold lg:text-2xl ">
              ABOUT ME
            </h1>

            <p className="text-3xl font-bold lg:text-5xl ">
              Better design, Better experience
            </p>

            <br></br>

            <div className="text-gray-600 lg:font-semibold">
              <p className=" ">
                Hello! I’m Harsh, a passionate web developer with a Bachelor’s
                degree in Computer Applications.
              </p>
              <br className="block sm:hidden"></br>
              <p className=" ">
                I’m constantly exploring new technologies, staying up-to-date
                with industry trends, and expanding my skill set.
              </p>
              <br className="block sm:hidden"></br>
              <p>
                I’m always open to collaboration, so feel free to reach out.
                Let’s build something amazing together! 🌟
              </p>
              <p></p>
            </div>
          </div>
          <div className=" pt-16 hidden lg:block ">
            <img
              src="/assets/coding.gif"
              alt="logo"
              className="object-scale-down h-72"
            ></img>
          </div>
        </div>
      </div>
    </section>

    // <div className="border-t-[1px] border-zinc-500 "></div>
    
  );
};

export default AboutMe;