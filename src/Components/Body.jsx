import React from "react";

const Body = () => {
  return (
    <div>

    <section id="Home"></section>
    <div className=" mt-4 px-8 lg:mt-28 lg:px-72 md:mt-24 md:px-28"> 
  <h1 className=" lg:text-lg md:text-lg ">
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
  <div className="flex justify-normal space-x-7 mx-12 pt-12 lg:mx-72 md:mx-32 lg:space-x-28">
          <a
          href="https://www.linkedin.com/in/harsh-singh-4z/" target="_blank"
            type="button"
            class=" scale-110 text-white bg-gradient-to-r from-blue-200 to-blue-800 hover:from-blue-300 hover:to-blue-900  font-medium rounded-full text-sm px-8  py-2.5 me-2 mb-2 "
          >
            Hire Me!
          </a>
          <a
            type="button"
            class=" scale-110 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-8 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            href="https://api.whatsapp.com/send/?phone=918920504921&text&type=phone_number&app_absent=0" target="_blank"
          >
            Lets' Chat
            
          </a>
        </div>




{/* image */}
          <div className="mt-11  hidden lg:block ">
        
          <div className="absolute right-0 top-64 w-96 h-96 rounded-full bg-blue-500 overflow-hidden mt-72 lg:absolute lg:mt-0 lg:transform lg:translate-y- lg:w-96 lg:h-96 lg:rounded-full lg:overflow-hidden lg:right-56 lg:  "></div>
          <img
            src="/assets/me.png"
            alt="img"
            className="w-2/3 absolute right-7 mt-14 lg:w-1/4 lg:top-28 lg:right-52"
          ></img>
          <div className="absolute mt-96 right-0 transform -translate-y-1/  w-96 h-24 bg-white lg:w-96 lg:h-32 lg:top-44 lg:right-56"></div>
          
        </div>
      
      





{/* about me */}
<section id="About"></section>
<div className="-mt-96  md:-mt-96 lg:-mt-0  ">
<div className="flex">
            <div className="pt-96 mt-24 mx-10 lg:pt-10 lg:mx-48  ">
            
              <h1 className="text-xl text-blue-500 font-semibold lg:text-2xl ">
                ABOUT ME
              </h1>
              
 
              <p className="text-3xl font-bold lg:text-5xl ">
                Better design, Better experience
              </p>

              <br ></br>

      
              <div className="text-gray-600 lg:font-semibold">
                <p className=" ">
                  Hello! I’m Harsh, a passionate web developer with a
                  Bachelor’s degree in Computer Applications.
                </p>
                <br className="block sm:hidden" ></br>
                <p className=" ">
                  I’m constantly
                  exploring new technologies, staying up-to-date with
                  industry trends, and expanding my skill set.
                </p>
                <br className="block sm:hidden" ></br>
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



<br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>







          <div className="flex bg-gray-800 w-full text-center">
            <h2 className="text-3xl mx-16 font-bold whitespace-nowrap h-96 py-12 text-white lg:text-5xl lg:mx-80 lg:px-60 md:px-48">
              Let's Work Together
            </h2>
          </div>

          <div className="mx-20 bg-blue-500 h-80 w-8/12 rounded-lg -mt-52 lg:mx-96 lg:w-6/12 ">
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
          </div>




          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className="border-t-[1px] border-zinc-500 "></div>


          <section id="Projects" className="bg-slate-100 p-0 ">
        <div className=" w-full h-full">
          <h1 className="text-4xl font-bold pt-12 lg:text-7xl lg:pt-24 text-center ">Projects</h1>
        </div>
        <br></br>
        <p className="text-xl text-center text-slate-600">Recent Works</p>
        <p className="text-xl text-center  text-blue-500">
          Personal projects that demonstrate my skills and creativity
        </p>
        <div>
          <div className="lg:grid lg:grid-cols-2 lg:mx-64  ">
            <div className="pt-16 lg:pt-28">
              <a href="https://harsh77-77.github.io/Sundown-/"  target="_blank">
                <img
                  src="/assets/sundown.png"
                  alt="img"
                  className=" scale-90 lg:scale-100 lg:h-72 w-auto rounded-xl    transition-transform hover:scale-95 lg:hover:scale-110 duration-300 transform  hover:shadow-2xl    "
                ></img>
              </a>
              <h1 className="pt-6 px-5 lg:px-0 text-3xl font-semibold           ">
                Sundown
              </h1>
              <p className="pt-3 px-5 lg:px-0">
                Built a visually appealing website of Sundown studios, using
                HTML, CSS, JS. Featuring smooth scrolling animations &
                dynamic content.
              </p>
            </div>

            <div className="  pt-16 lg:pt-28     ">
              <a href="https://harsh77-77.github.io/Tailwindcss-Responsive-main" target="_blank">
                <img
                  src="/assets/hosterr.png"
                  alt="img"
                  className="scale-90 lg:scale-100 lg:h-72 w-auto rounded-xl      transition-transform hover:scale-95 lg:hover:scale-110 duration-300 transform  hover:shadow-2xl              "
                ></img>
              </a>
              <h1 className="pt-6 px-5 lg:px-0 text-3xl font-semibold ">Hoster</h1>
              <p className="pt-3 px-5 lg:px-0">
                Using Vite react builta a tailwind css responsive landing
                page.
              </p>
            </div>

            <div className="pt-16 lg:pt-28">
              <a href="https://github.com/Harsh77-77/Amazon-clone-">
                <img
                  src="/assets/amazon.png"
                  alt="img"
                  className="scale-90 lg:scale-100 lg:h-72  w-auto rounded-xl        transition-transform hover:scale-95 lg:hover:scale-110 duration-300 transform  hover:shadow-2xl                  "
                ></img>
              </a>
              <h1 className="pt-6 px-5 lg:px-0 text-3xl font-semibold">Amazon UI</h1>
              <p className="pt-3 px-5 lg:px-0">
                Built a user interface of amazon using html, css and JS.
              </p>
            </div>

            <div className="pt-16 lg:pt-28 ">
              <a href="">
                <img
                  src="/assets/weather.png"
                  alt="img"
                  className="scale-90 lg:scale-100 lg:h-72 w-auto rounded-xl             transition-transform hover:scale-95 lg:hover:scale-110 duration-300 transform  hover:shadow-2xl                                 "
                ></img>
              </a>
              <h1 className="pt-6 px-5 lg:px-0 text-3xl font-semibold">Weather App</h1>
              <p className="pt-3 px-5 lg:px-0">
                Building a weather app using react js and rest API's. (currently working)
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        {/* <div className="w-full h-56"></div> */}
      </section>























  
  </div>
  );
};

export default Body;
