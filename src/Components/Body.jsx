// import React, { useRef } from "react";
// import gsap from "gsap";

// const Body = () => {
//   const hireMeButtonRef = useRef(null);
//   const letsChatButtonRef = useRef(null);

//   const handleHover = (element, scale, gradient) => {
//     gsap.to(element, {
//       scale: scale,
//       background: gradient,
//       duration: 0.4,
//       ease: "power2.out",
//     });
//   };

//   return (
//     <div className=" ">
//       <section id="Home">
//         <div className=" lg:pt-10 pt-24 md:pt-16 lg:px-20">
//           <div className=" mt-4 px-8 md:text-center text-center lg:text-left lg:mt-28 lg:px- md:mt-24 md:px-28">
//             <h1 className=" lg:text-xl md:text-lg ">
//               Hey There👋 I am
//               <span className="text-blue-500 block mt-2 font-bold text-4xl lg:text-6xl md:text-5xl  ">
//                 HARSH SINGH
//               </span>
//             </h1>
//             <p className="text-lg font-semibold pt-4 lg:w-[40%]  ">
//               A WEB DEVELOPER
//               <p className="block pt-5 font-normal text-left">
//                 <p className="line-clamp-2">
//                   As a web developer, I specialize in creating responsive and
//                   user-friendly websites that enhance user experience and drive
//                   engagement.{" "}
//                 </p>
//                 Simplicity is the soul of efficiency
//               </p>
//             </p>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-center lg:justify-start grid-cols-2 space-x-7 mx-12 pt-12 md:mx-32 lg:space-x-28">
//             <a
//               href="https://www.linkedin.com/in/harsh-singh-4z/"
//               target="_blank"
//               type="button"
//               ref={hireMeButtonRef}
//               onMouseEnter={() =>
//                 handleHover(
//                   hireMeButtonRef.current,
//                   1.1,
//                   "linear-gradient(to right, #1E40AF, #93C5FD)"
//                 )
//               }
//               onMouseLeave={() =>
//                 handleHover(
//                   hireMeButtonRef.current,
//                   1,
//                   "linear-gradient(to right, #93C5FD, #1E40AF)"
//                 )
//               }
//               className="text-white font-medium rounded-full text-sm px-8 py-2.5 mb-2"
//               style={{
//                 background: "linear-gradient(to right, #93C5FD, #1E40AF)", // Initial gradient color
//               }}
//             >
//               Hire Me!
//             </a>

//             <a
//               type="button"
//               ref={letsChatButtonRef}
//               onMouseEnter={() =>
//                 handleHover(
//                   letsChatButtonRef.current,
//                   1.1,
//                   "linear-gradient(to bottom right, #0ea5e9, #0ea5e9, #0f172a)"
//                 )
//               }
//               onMouseLeave={() =>
//                 handleHover(
//                   letsChatButtonRef.current,
//                   1,
//                   "linear-gradient(to right, #22D3EE, #0EA5E9, #0F172A)"
//                 )
//               }
//               href="https://api.whatsapp.com/send/?phone=918920504921&text&type=phone_number&app_absent=0"
//               target="_blank"
//               className="text-white font-medium rounded-full text-sm px-8 py-2.5 me-2 mb-2"
//               style={{
//                 background:
//                   "linear-gradient(to right, #22D3EE, #0EA5E9, #0F172A)", // Initial gradient color
//               }}
//             >
//               Let's Chat
//             </a>
//           </div>
//         </div>

//         {/* Image */}
//         <div className="hidden lg:block">
//           <img
//             src="/assets/me.png"
//             alt="img"
//             className="absolute w-[370px] top-[170px] right-[145px]"
//           />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Body;



import React, { useRef } from "react";
import gsap from "gsap";

const Body = () => {
  const hireMeButtonRef = useRef(null);
  const letsChatButtonRef = useRef(null);

  const handleHover = (element, scale, gradient) => {
    gsap.to(element, {
      scale: scale,
      background: gradient,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <div>
      <section id="Home">
        <div className="lg:pt-10 pt-24 md:pt-16 lg:px-20">
          <div className="mt-4 px-8 md:text-center text-center lg:text-left lg:mt-28 lg:px- md:mt-24 md:px-28">
            <h1 className="lg:text-xl md:text-lg">
              Hey There👋 I am
              <span className="text-blue-500 block mt-2 font-bold text-4xl lg:text-6xl md:text-5xl">
                HARSH SINGH
              </span>
            </h1>
            <p className="text-lg font-semibold pt-4 lg:w-[40%]">
              A WEB DEVELOPER
              <p className="block pt-5 font-normal text-left">
                <p className="line-clamp-2">
                  As a web developer, I specialize in creating responsive and
                  user-friendly websites that enhance user experience and drive
                  engagement.
                </p>
                Simplicity is the soul of efficiency
              </p>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start grid-cols-2 space-x-7 mx-12 pt-12 md:mx-32 lg:space-x-28">
            <a
              href="https://www.linkedin.com/in/harsh-singh-4z/"
              target="_blank"
              type="button"
              ref={hireMeButtonRef}
              onMouseEnter={() =>
                handleHover(
                  hireMeButtonRef.current,
                  1.1,
                  "linear-gradient(to right, #1E40AF, #93C5FD)"
                )
              }
              onMouseLeave={() =>
                handleHover(
                  hireMeButtonRef.current,
                  1,
                  "linear-gradient(to right, #93C5FD, #1E40AF)"
                )
              }
              className="text-white font-medium rounded-full text-sm px-8 py-2.5 mb-2"
              style={{
                background: "linear-gradient(to right, #93C5FD, #1E40AF)", // Initial gradient color
              }}
            >
              Hire Me!
            </a>

            <a
              type="button"
              ref={letsChatButtonRef}
              onMouseEnter={() =>
                handleHover(
                  letsChatButtonRef.current,
                  1.1,
                  "linear-gradient(to bottom right, #0ea5e9, #0ea5e9, #0f172a)"
                )
              }
              onMouseLeave={() =>
                handleHover(
                  letsChatButtonRef.current,
                  1,
                  "linear-gradient(to right, #22D3EE, #0EA5E9, #0F172A)"
                )
              }
              href="https://api.whatsapp.com/send/?phone=918920504921&text&type=phone_number&app_absent=0"
              target="_blank"
              className="text-white font-medium rounded-full text-sm px-8 py-2.5 me-2 mb-2"
              style={{
                background:
                  "linear-gradient(to right, #22D3EE, #0EA5E9, #0F172A)", // Initial gradient color
              }}
            >
              Let's Chat
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="hidden lg:block">
          <img
            src="/assets/me.png"
            alt="img"
            className="absolute w-[370px] top-[170px] right-[145px]"
          />
        </div>
      </section>
    </div>
  );
};

export default Body;
