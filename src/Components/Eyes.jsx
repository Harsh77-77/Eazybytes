// import React, { useEffect, useRef, useState } from 'react';

// function Eyes () {
//     const[rotate, setRotate] = useState(0);

//     useEffect(()=>{
//         window.addEventListener("mousemove", ()=>{
//             let mouseX = e.clientX; 
//             let mouseY = e.clientY;

//             let deltaX = mouseX - window.innerWidth/2;
//             let deltaY = mouseY - window.innerHeight/2;

//             var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
//             setRotate(angle-180);
//         })
//     })

//   return (
//     <div className='eyes w-full h-screen overflow-hidden'>
//         <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
//         <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  '>

//         <div className='  flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
//         <div className='relative w-2/3 h-2/3  rounded-full bg-zinc-900'>
//         <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] w-full h-10  '>
//            <div className='w-10 h-10  rounded-full bg-zinc-100'></div>
//         </div>
        
//         </div>
//         </div>

//         <div className=' flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
//         <div className='relative w-2/3 h-2/3  rounded-full bg-zinc-900'>
//         <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] w-full h-10  '>
//            <div className='w-10 h-10  rounded-full bg-zinc-100'></div>
//         </div>
        
//         </div>
//         </div>

//         </div>
        
//         </div>
        
//         </div>
        
  
//   )
// }
// export default Eyes;


// import React, { useEffect, useState } from 'react';

// function Eyes() {
//   const [rotate, setRotate] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       let mouseX = e.clientX;
//       let mouseY = e.clientY;

//       let deltaX = mouseX - window.innerWidth / 2;
//       let deltaY = mouseY - window.innerHeight / 2;

//       var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
//       setRotate(angle - 180);
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className='eyes w-full h-screen -mt-16 bg-[#cbc56b] overflow-hidden'>
//       <div className='relative w-full h-full bg-cover bg-center break-words z-10 place-content-center> Ready <h1>to start</h1>  <h1>the project</h1></h1>
       
//         <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
        
       
//           <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
          
//             <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
//               <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
//                 <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
//               </div>
//             </div>
//           </div>

//           <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
//             <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
//               <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
//                 <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Eyes;




import React, { useEffect, useState } from 'react';

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className='eyes w-full h-screen -mt-16 bg-[#3b808b] overflow-hidden'>
      <div className=' capitalize relative w-full h-full bg-cover bg-center break-words z-10 place-content-center text-center text-7xl lg:text-9xl font-bold'>
        <h1>turning ideas</h1>
        <h1 className='tracking-widest space-x-7'>  ideas into</h1>
        <h1>interactive website</h1>
       
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <div className='flex items-center justify-center w-[15vh] h-[15vh] lg:w-[8vw] lg:h-[8vw] rounded-full bg-zinc-100'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center w-[15vh] h-[15vh] lg:w-[8vw] lg:h-[8vw] rounded-full bg-zinc-100'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
