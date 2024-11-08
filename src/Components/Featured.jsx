// import { motion } from "framer-motion";
// import React, { useState } from "react";

// const Featured = () => {
//   const [isHovering, setisHovering] = useState([false, false, false, false]);
//   return (
//     <div className="w-full py-[3vw]">
//       <div className="w-full px-[5vw] border-b-2 border-zinc-700 pb-[1vw]">
//         <h1 className="text-[6vw] font-['NeueMontreal'] tracking-tight">
//            Projects
//         </h1>
//       </div>
//       <div className="px-[5.3vw]   ">
//         <div className="cards w-full flex gap-10 mt-10 ">
//           <div
//             onMouseEnter={() => {
//               setisHovering([true, false, false, false]);
//             }}
//             onMouseLeave={() => {
//               setisHovering([false, false, false, false]);
//             }}
//             className="cardcontainer1 w-1/2 h-[36vw] relative  "
//           >
//             <h1 className="absolute flex left-full top-1/2 -translate-y-[50%] -translate-x-[30%] z-10 text-[8.3vw] leading-none tracking-tight font-['FoundersGrotesk'] overflow-hidden text-[#CDEA68]">
//               {"SUNDOWN".split("").map((item, index) => (
//                 <motion.span
//                   initial={{ y: "100%" }}
//                   animate={isHovering[0] ? { y: "0%" } : { y: "100%" }}
//                   transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
//                   className="inline-block"
//                 >
//                   {item}
//                 </motion.span>
//               ))}
//             </h1>
//             <motion.div
//               whileHover={{ scale: 0.9 }}
//               transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
//               className="card w-full h-full rounded-lg bg-green-400  overflow-hidden"
//             >
//               <img
//                 src="./assets/sundown.png"
//                 alt="card1"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//           </div>
//           <div
//             onMouseEnter={() => {
//               setisHovering([false, true, false]);
//               console.log("span1");
//             }}
//             onMouseLeave={() => {
//               setisHovering([false, false, false]);
//             }}
//             className="cardcontainer2 w-1/2 h-[36vw] relative"
//           >
//             <h1 className="absolute right-full top-1/2 -translate-y-[50%] translate-x-[50%] z-10 text-[8.3vw] leading-none tracking-tight font-['FoundersGrotesk'] flex text-[#CDEA68] overflow-hidden">
//               {"POP ROCK".split("").map((item, index) => (
//                 <motion.span
//                   initial={{ y: "100%" }}
//                   animate={isHovering[1] ? { y: "0%" } : { y: "100%" }}
//                   transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
//                   className="inline-block"
//                 >
//                   {item}
//                 </motion.span>
//               ))}
//             </h1>
//             <motion.div
//               whileHover={{ scale: 0.9 }}
//               transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
//               className="card card w-full h-full rounded-lg bg-green-400  overflow-hidden"
//             >
//               <img
//                 src="./assets/pop rock.png"
//                 alt="card1"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </div>
//       <div className="px-[5.3vw] mt-[9vw]">
//         <div className="cards w-full flex gap-10 mt-10 ">
//           <div
//             onMouseEnter={() => {
//               setisHovering([false, false, true, false]);
//             }}
//             onMouseLeave={() => {
//               setisHovering([false, false, false, false]);
//             }}
//             className="cardcontainer3 w-1/2 h-[36vw] relative  "
//           >
//             <h1 className="absolute flex left-full top-1/2 -translate-y-[50%] -translate-x-[30%] z-10 text-[8.3vw] leading-none tracking-tight font-['FoundersGrotesk'] overflow-hidden text-[#CDEA68]">
//               {"FLEAVA".split("").map((item, index) => (
//                 <motion.span
//                   initial={{ y: "100%" }}
//                   animate={isHovering[2] ? { y: "0%" } : { y: "100%" }}
//                   transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
//                   className="inline-block"
//                 >
//                   {item}
//                 </motion.span>
//               ))}
//             </h1>
//             <motion.div
//               whileHover={{ scale: 0.9 }}
//               transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
//               className="card w-full h-full rounded-lg bg-green-400  overflow-hidden"
//             >
//               <img
//                 src="./assets/fleava.png"
//                 alt="card1"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//           </div>
//           <div
//             onMouseEnter={() => {
//               setisHovering([false, false, false, true]);
//               console.log("span1");
//             }}
//             onMouseLeave={() => {
//               setisHovering([false, false, false, false]);
//             }}
//             className="cardcontainer4 w-1/2 h-[36vw] relative"
//           >
//             <h1 className="absolute right-full top-1/2 -translate-y-[50%] translate-x-[50%] z-10 text-[8.3vw] leading-none tracking-tight font-['FoundersGrotesk'] flex text-[#CDEA68] overflow-hidden">
//               {"USER MANAGEMENT".split("").map((item, index) => (
//                 <motion.span
//                   initial={{ y: "100%" }}
//                   animate={isHovering[3] ? { y: "0%" } : { y: "100%" }}
//                   transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
//                   className="inline-block"
//                 >
//                   {item}
//                 </motion.span>
//               ))}
//             </h1>
//             <motion.div
//               whileHover={{ scale: 0.9 }}
//               transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
//               className="card card w-full h-full rounded-lg bg-green-400  overflow-hidden"
//             >
//               <img
//                 src="./assets/UM.png"
//                 alt="card1"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Featured;



import { motion } from "framer-motion";
import React, { useState } from "react";
import Button from "./Button";

const Featured = () => {
  const [isHovering, setisHovering] = useState([false, false, false, false]);
  

  return (
    <div id="Projects" className="w-full py-[3vw] bg-slate-50 dark:bg-gradient-to-r from-slate-800  to-black ">
      <div className="w-full px-[5vw] border-b-2 border-zinc-700 pb-[1vw]">
        <h1 className="text-[12vw] md:text-[6vw] font-['NeueMontreal'] tracking-tight">
          Projects
        </h1>
      </div>
      <div className="px-[5.3vw]">

  

        <div className="cards w-full flex flex-col md:flex-row gap-10 mt-10">
          <div
            onMouseEnter={() => {
              setisHovering([true, false, false, false]);
            }}
            onMouseLeave={() => {
              setisHovering([false, false, false, false]);
            }}
            className="cardcontainer1 w-full md:w-1/2 h-[75vw] md:h-[36vw] relative"
          >
            <h1 className="absolute hidden md:flex left-full top-1/2 -translate-y-[50%] -translate-x-[30%] z-10 text-[8.3vw] leading-none tracking-tight font-['FoundersGrotesk'] overflow-hidden text-[#CDEA68]">
              {"SUNDOWN".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHovering[0] ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            {/* Mobile title */}
            <h2 className="md:hidden text-[#CDEA68] text-3xl mb-4 font-['FoundersGrotesk']">
              SUNDOWN
            </h2>
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className="card w-full h-full rounded-lg bg-green-400 overflow-hidden"
            >
              <a href="https://harsh77-77.github.io/Sundown-/"> <img
                src="./assets/sundown.png"
                alt="card1"
                className="w-full h-full object-cover"
              /></a>
             
            </motion.div>

        

            {/* <div>
              <p>Built a visually appealing website of Sundown studios, using HTML, CSS, JS. Featuring smooth scrolling animations & dynamic content."</p>
            </div>
            <div className="hidden lg:block"> <Button/></div> */}
       
       
          </div>
          <div
            onMouseEnter={() => {
              setisHovering([false, true, false]);
            }}
            onMouseLeave={() => {
              setisHovering([false, false, false]);
            }}
            className="cardcontainer2 w-full md:w-1/2 h-[75vw] md:h-[36vw] relative"
          >
            <h1 className="absolute hidden md:flex right-full top-1/2 -translate-y-[50%] translate-x-[50%] z-10 text-[8.3vw] leading-none tracking-tight font-['FoundersGrotesk'] text-[#CDEA68] overflow-hidden">
              {"POP ROCK".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHovering[1] ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            {/* Mobile title */}
            <h2 className="md:hidden text-[#CDEA68] pt-6 text-3xl mb-4 font-['FoundersGrotesk']">
              POP ROCK
            </h2>
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className="card w-full h-full rounded-lg bg-green-400 overflow-hidden"
            >
              <a href="https://harsh-assignment-pop-rock-crystal.vercel.app/">  <img
                src="./assets/pop rock.png"
                alt="card1"
                className="w-full h-full object-cover"
              /></a>
            
            </motion.div>

            {/* <div>
              <p>Using Reactjs & TailwindCss build a responsive Landing Page</p>
            </div> */}
           


          </div>
        </div>
      </div>
      <div className="px-[5.3vw] mt-[9vw]">
        <div className="cards w-full flex flex-col md:flex-row gap-10 mt-10">
          <div
            onMouseEnter={() => {
              setisHovering([false, false, true, false]);
            }}
            onMouseLeave={() => {
              setisHovering([false, false, false, false]);
            }}
            className="cardcontainer3 w-full md:w-1/2 h-[75vw] md:h-[36vw] relative"
          >
            <h1 className="absolute hidden md:flex left-full top-1/2 -translate-y-[50%] -translate-x-[30%] z-10 text-[8.3vw] leading-none tracking-tight font-['FoundersGrotesk'] overflow-hidden text-[#CDEA68]">
              {"FLEAVA".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHovering[2] ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            {/* Mobile title */}
            <h2 className="md:hidden  text-[#CDEA68] text-3xl mb-4 font-['FoundersGrotesk']">
              FLEAVA
            </h2>
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className="card w-full h-full rounded-lg bg-green-400 overflow-hidden"
            >
              <a href="https://fleava-psi.vercel.app/"> <img
                src="./assets/fleava.png"
                alt="card1"
                className="w-full h-full object-cover"
              /></a>
             
            </motion.div>
          </div>
          <div
            onMouseEnter={() => {
              setisHovering([false, false, false, true]);
            }}
            onMouseLeave={() => {
              setisHovering([false, false, false, false]);
            }}
            className="cardcontainer4 w-full md:w-1/2 h-[75vw] md:h-[36vw] relative"
          >
            <h1 className="absolute hidden md:flex right-full top-1/2 -translate-y-[50%] translate-x-[50%] z-10 text-[8.3vw] leading-none tracking-tight font-['FoundersGrotesk'] text-[#CDEA68] overflow-hidden">
              {"USER MANAGEMENT".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHovering[3] ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            {/* Mobile title */}
            <h2 className="md:hidden pt-5  text-[#CDEA68] text-3xl mb-4 font-['FoundersGrotesk']">
              USER MANAGEMENT
            </h2>
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className="card w-full h-full rounded-lg bg-green-400 overflow-hidden"
            >
              <a href="https://harsh-s-user-management-application.vercel.app/"> <img
                src="./assets/UM.png"
                alt="card1"
                className="w-full h-full object-cover"
              /></a>
             
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;