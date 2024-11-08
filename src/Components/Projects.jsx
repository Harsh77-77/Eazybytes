// import React from 'react'

// const Projects = () => {
//   return ( 
//     <section id="Projects" className="bg-slate-100 p-0 ">
//       <div className=" w-full h-full">
//            <h1 className="text-4xl font-bold pt-12 lg:text-7xl lg:pt-24 text-center ">Projects</h1>
//          </div>
//          <br></br>
//          <p className="text-xl text-center text-slate-600">Recent Works</p>
//          <p className="text-xl text-center  text-blue-500">
//            Personal projects that demonstrate my skills and creativity
//          </p>
//          <br />
//          <br />
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8  max-w-6xl w-full">
//         <div className="flex flex-col items-center text-center">
//           <a href="https://harsh77-77.github.io/Sundown-/" target="_blank" rel="noopener noreferrer">
//             <img
//               src="/assets/sundown.png"
//               alt="Sundown"
//               className="h-72 w-auto rounded-xl transition-transform hover:scale-105 duration-300 hover:shadow-2xl"
//             />
//           </a>
//           <h1 className="pt-6 text-3xl font-semibold">Sundown</h1>
//           <p className="pt-3 max-w-md">
//             Built a visually appealing website of Sundown studios, using HTML, CSS, JS. Featuring smooth scrolling animations & dynamic content.
//           </p>
//         </div>

//         <div className="flex flex-col items-center text-center">
//           <a href="https://harsh-assignment-pop-rock-crystal.vercel.app/" target="_blank" rel="noopener noreferrer">
//             <img
//               src="/assets/pop rock.png"
//               alt="Pop Rock Crystal"
//               className="h-72 w-auto rounded-xl transition-transform hover:scale-105 duration-300 hover:shadow-2xl"
//             />
//           </a>
//           <h1 className="pt-6 text-3xl font-semibold">Pop Rock Crystal</h1>
//           <p className="pt-3 max-w-md">
//             Using Reactjs & TailwindCss build a responsive Landing Page
//           </p>
//         </div>

//         <div className="flex flex-col items-center text-center">
//           <a href="https://fleava-psi.vercel.app/" target="_blank" rel="noopener noreferrer">
//             <img
//               src="/assets/fleava.png"
//               alt="Fleava"
//               className="h-72 w-auto rounded-xl transition-transform hover:scale-105 duration-300 hover:shadow-2xl"
//             />
//           </a>
//           <h1 className="pt-6 text-3xl font-semibold">Fleava</h1>
//           <p className="pt-3 max-w-md">
//             Built a Dynamic website using Locomotive JS, TailwindCss & ReactJS.
//           </p>
//         </div>

//         <div className="flex flex-col items-center text-center">
//           <a href="https://harsh-s-user-management-application.vercel.app/" target="_blank" rel="noopener noreferrer">
//             <img
//               src="/assets/UM.png"
//               alt="User Management App"
//               className="h-72 w-auto rounded-xl transition-transform hover:scale-105 duration-300 hover:shadow-2xl"
//             />
//           </a>
//           <h1 className="pt-6 text-3xl font-semibold">User Management App</h1>
//           <p className="pt-3 max-w-md">
//             This CRUD-based user management application allows for creating, reading, updating, and deleting users by interacting with the JSONPlaceholder API
//           </p>
//         </div>
//       </div>
//     </div></section>
//   )
// }

// export default Projects




import React from 'react';

// ProjectCard Component
const ProjectCard = ({ href, imageSrc, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img
        src={imageSrc}
        alt={title}
        className="h-72 w-auto rounded-xl transition-transform hover:scale-105 duration-300 hover:shadow-2xl"
      />
    </a>
    <h1 className="pt-6 text-3xl font-semibold">{title}</h1>
    <p className="pt-3 max-w-md">{description}</p>
  </div>
);

const Projects = ({ darkMode }) => {
  const projectData = [
    {
      href: "https://harsh77-77.github.io/Sundown-/",
      imageSrc: "/assets/sundown.png",
      title: "Sundown",
      description: "Built a visually appealing website of Sundown studios, using HTML, CSS, JS. Featuring smooth scrolling animations & dynamic content."
    },
    {
      href: "https://harsh-assignment-pop-rock-crystal.vercel.app/",
      imageSrc: "/assets/pop rock.png",
      title: "Pop Rock Crystal",
      description: "Using Reactjs & TailwindCss build a responsive Landing Page"
    },
    {
      href: "https://fleava-psi.vercel.app/",
      imageSrc: "/assets/fleava.png",
      title: "Fleava",
      description: "Built a Dynamic website using Locomotive JS, TailwindCss & ReactJS."
    },
    {
      href: "https://harsh-s-user-management-application.vercel.app/",
      imageSrc: "/assets/UM.png",
      title: "User Management App",
      description: "This CRUD-based user management application allows for creating, reading, updating, and deleting users by interacting with the JSONPlaceholder API."
    },
  ];

  return (
    <section
      id="Projects"
      className={`${darkMode ? 'bg-slate-800 text-slate-200' : '  text-slate-800'} p-0`}
    >
      <div className="w-full h-full">
        <h1 className="text-4xl font-bold pt-12 lg:text-7xl lg:pt-24 text-center dark:text-white">Projects</h1>
      </div>
      <br />
      <p className={`text-xl text-center ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
        Recent Works
      </p>
      <p className="text-xl text-center text-blue-500">
        Personal projects that demonstrate my skills and creativity
      </p>
      <br />
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full dark:text-white">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              href={project.href}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
