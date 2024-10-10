import React from "react";

const Body = () => {
  return (
    <div className="">
      <section id="Home">
        <div className="">
          <div className=" mt-4 px-8 md:text-center text-center lg:text-left lg:mt-28 lg:px-72 md:mt-24 md:px-28">
            <h1 className=" lg:text-xl md:text-lg ">
              Hey There👋 I am
              <span className="text-blue-500 block mt-2 font-bold text-4xl lg:text-6xl md:text-5xl  ">
                HARSH SINGH
              </span>
            </h1>
            <p className="text-lg font-semibold pt-4">
              A WEB DEVELOPER
              <p className="block pt-5 font-normal">
                Simplicity is the soul of efficiency
              </p>
            </p>
          </div>

          {/* button */}
          <div className="flex justify-center lg:justify-start  grid-cols-2  space-x-7 mx-12 pt-12 lg:mx-72 md:mx-32 lg:space-x-28">
            <a
              href="https://www.linkedin.com/in/harsh-singh-4z/"
              target="_blank"
              type="button"
              class=" scale-110 text-white bg-gradient-to-r from-blue-200 to-blue-800 hover:from-blue-300 hover:to-blue-900  font-medium rounded-full text-sm px-8  py-2.5 me-2 mb-2 "
            >
              Hire Me!
            </a>
            <a
              type="button"
              class=" scale-110 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-8 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              href="https://api.whatsapp.com/send/?phone=918920504921&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              Lets' Chat
            </a>
          </div>
        </div>
        {/* image */}
        <div className="  hidden lg:block items-center">
          <div className="  right-0 top-64 w-96 h-96 rounded-full bg-blue-500 overflow-hidden mt-72 lg:absolute lg:mt-0 lg:transform lg:translate-y- lg:w-96 lg:h-96 lg:rounded-full lg:overflow-hidden lg:right-56 lg:  "></div>{" "}
          <img
            src="/assets/me.png"
            alt="img"
            className=" absolute w-[350px] top-[170px] right-[245px] "
          ></img>
          <div className="absolute mt-96 right-0 transform -translate-y-1/  w-96 h-24 bg-white lg:w-96 lg:h-32 lg:top-44 lg:right-56"></div>
        </div>
      </section>
    </div>
  );
};

export default Body;

{
  /* <div className="flex bg-gray-800 w-full text-center">
            <h2 className="text-3xl mx-16 font-bold whitespace-nowrap h-96 py-12 text-white lg:text-5xl lg:mx-80 lg:px-60 md:px-48">
              Let's Work Together
            </h2>
          </div> */
}

{
  /* <div className="mx-20 bg-blue-500 h-80 w-8/12 rounded-lg -mt-52 lg:mx-96 lg:w-6/12 ">
            <div className="flex flex-col items-center">
              <h1 className="text-slate-50 font-bold text-2xl mx-5 mt-12 lg:text-5xl ">
                Want to work together and create amazing projects with me?
              </h1>
              <form className="w-full max-w-lg mt-5 lg:mt-12 ">
                <div className="flex items-center pt-14 border-b border-blue-100 py-2">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-slate-50 mr-3 py-1 px-2 leading-tight focus:outline-none bg-blue-00 rounded-3xl h-10"
                    type="text"
                    placeholder="Enter your email"
                    aria-label="Email"
                  />
                  <button className="flex-shrink h-0 bg-blue-00 bg-transparent hover:font-semibold hover:text-slate-100 border-blue-500 text-sm border-4 py-1 px-2 rounded-3xl">
                    send
                  </button>
                </div>
              </form>
            </div>
          </div> */
}
