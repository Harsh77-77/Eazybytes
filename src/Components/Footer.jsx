// import React, { useRef, useState } from "react";
// import gsap from "gsap";

// const Footer = () => {
//   const buttonRef = useRef(null);

//   const handleHover = (element, scale, gradient) => {
//     gsap.to(element, {
//       scale: scale,
//       background: gradient,
//       duration: 0.4,
//       ease: "power2.out",
//     });
//   };

//   const handleMouseEnter = () => {
//     handleHover(
//       buttonRef.current,
//       1.05,
//       "linear-gradient(to right, #ec4899, #a855f7, #6366f1)"
//     );
//   };

//   const handleMouseLeave = () => {
//     handleHover(
//       buttonRef.current,
//       1,
//       "linear-gradient(to right, #6366f1, #a855f7, #ec4899)"
//     );
//   };

// const  [username, setUsername] = useState("");
// const  [email, setEmail] = useState("");
// const  [phone_no, setPhone_no] = useState("");
// const  [message, setMessage] = useState("");
// // const handleFormSubmit = (e) => {
// //   e.preventDefault();
// //   const contactData = {
// //     username:username,
// //     email:email,
// //     phone_no,
// //     message,
// //   }
// //   console.log(contactData)
// // }
// const handleFormSubmit = async (e) => {
//   e.preventDefault();

//   const contactData = {
//     username,
//     email,
//     phone_no,
//     message,
//   };

//   try {
//     const response = await fetch('http://localhost:5000/submit-contact', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(contactData),
//     });

//     if (response.ok) {
//       alert('Contact details submitted successfully!');
//       setUsername('');
//       setEmail('');
//       setPhone_no('');
//       setMessage('');
//     } else {
//       alert('Failed to submit contact details');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     alert('An error occurred. Please try again.');
//   }
// };

//   return (
//     <div>
//       <section id="Contact" className="relative z-10 overflow-hidden bg-white dark:bg-gray-900 py-20 lg:py-[120px]">
//         <div className="container mx-auto">
//           <div className="flex flex-wrap -mx-4 lg:justify-between">
//             <div className="w-full px-8 lg:w-1/2 xl:w-6/12">
//               <div className="mb-12 max-w-[570px] lg:mb-0">
//                 <span className="block mb-4 text-base font-semibold text-primary-600 dark:text-primary-400">
//                   LET'S TALK
//                 </span>
//                 <h2 className="text-dark dark:text-white mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
//                   CONNECT WITH ME!
//                 </h2>
//                 <p className="text-base leading-relaxed text-body-color dark:text-gray-300 mb-9">
//                   Feel free to reach out to discuss potential collaborations,
//                   share ideas, or just say hello. I'm always open to new
//                   opportunities and conversations!
//                 </p>
//                 <div className="mb-8 flex w-full max-w-[370px]">
//                   <div className="bg-primary-100 dark:bg-gray-800 text-primary-600 dark:text-primary-400 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
//                     <svg
//                       width="32"
//                       height="32"
//                       viewBox="0 0 32 32"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M30.6 12.1C29.9 11.2 28.9 10.7 27.9 10.7H27.8C23.9 10.7 20.4 9 17.6 6.3C15.9 4.6 14.4 2.6 13.3 0.3C13.1 0 12.8 0 12.5 0C12.2 0 11.9 0.2 11.8 0.5C11.7 0.8 11.7 1.1 11.9 1.4C13.1 3.9 14.7 6.1 16.6 8C19.6 11 23.3 12.9 27.6 12.9H27.7C28.3 12.9 28.9 13.2 29.3 13.7C29.7 14.2 29.9 14.8 29.8 15.4C29.7 16.5 29.3 17.5 28.6 18.4C27.9 19.3 27 20 25.9 20.4C25.6 20.5 25.3 20.7 25.2 21C25.1 21.3 25.1 21.6 25.3 21.9C25.4 22.1 25.6 22.2 25.8 22.3C26 22.4 26.2 22.4 26.4 22.3C27.8 21.8 29 21 30 19.8C31 18.6 31.5 17.3 31.6 15.8C31.8 14.5 31.4 13.2 30.6 12.1Z"
//                         fill="currentColor"
//                       />
//                       <path
//                         d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
//                         fill="currentColor"
//                       />
//                     </svg>
//                   </div>
//                   <div className="w-full">
//                     <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
//                       Phone Number
//                     </h4>
//                     <p className="text-base text-body-color dark:text-gray-300">
//                       (+91)8920504921
//                     </p>
//                   </div>
//                 </div>
//                 <div className="mb-8 flex w-full max-w-[370px]">
//                   <div className="bg-primary-100 dark:bg-gray-800 text-primary-600 dark:text-primary-400 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
//                     <svg
//                       width="32"
//                       height="32"
//                       viewBox="0 0 32 32"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
//                         fill="currentColor"
//                       />
//                     </svg>
//                   </div>
//                   <div className="w-full">
//                     <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
//                       Email Address
//                     </h4>
//                     <p className="text-base text-body-color dark:text-gray-300">
//                       hrsh12032015@gmail.com
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
//               <div className="relative p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg sm:p-12">
//                 <form onSubmit={handleFormSubmit}>
//                   <div className="mb-6">
//                     <input
//                     value={username}
//                     onChange={(e)=> setUsername(e.target.value)}
//                       type="text"
//                       placeholder="Your Name"
//                       className="border-[f0f0f0] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
//                     />
//                   </div>
//                   <div className="mb-6">
//                     <input
//                      value={email}
//                      onChange={(e)=> setEmail(e.target.value)}
//                       type="email"
//                       placeholder="Your Email"
//                       className="border-[f0f0f0] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
//                     />
//                   </div>
//                   <div className="mb-6">
//                     <input
//                      value={phone_no}
//                      onChange={(e)=> setPhone_no(e.target.value)}
//                       type="text"
//                       placeholder="Your Phone"
//                       className="border-[f0f0f0] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
//                     />
//                   </div>
//                   <div className="mb-6">
//                     <textarea
//                      value={message}
//                      onChange={(e)=> setMessage(e.target.value)}
//                       rows="6"
//                       placeholder="Your Message"
//                       className="border-[f0f0f0] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
//                     ></textarea>
//                   </div>
//                   <div>
//                     <button
//                       ref={buttonRef}
//                       type="submit"
//                       onMouseEnter={handleMouseEnter}
//                       onMouseLeave={handleMouseLeave}
//                       className="w-full p-3 
//         bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-500
//         dark:text-white transition border rounded border-primary"
//                     >
//                       Send Message
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="contact"></section>
//     </div>
//   );
// };

// export default Footer;






















// 'use client';

// import React, { useRef, useState } from "react";
// import gsap from "gsap";

// export default function ContactForm() {
//   const buttonRef = useRef(null);
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     phone_no: "",
//     message: ""
//   });
//   const [status, setStatus] = useState("");

//   const handleHover = (element, scale, gradient) => {
//     if (element) {
//       gsap.to(element, {
//         scale: scale,
//         background: gradient,
//         duration: 0.4,
//         ease: "power2.out",
//       });
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };
  

//   // const handleFormSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setStatus('Submitting...');

//   //   // try {
//   //   //   const response = await fetch('https://backen-portfolio.vercel.app/api/submit-contact', {
//   //   //     method: 'POST',
//   //   //     headers: {
//   //   //       'Content-Type': 'application/json',
//   //   //     },
//   //   //     body: JSON.stringify(formData),
//   //   //   });
      
//   //   //   if (response.ok) {
//   //   //     const data = await response.json();
//   //   //     setStatus(data.message);
//   //   //     setFormData({ username: '', email: '', phone_no: '', message: '' });
//   //   //   } else {
//   //   //     const errorData = await response.json();
//   //   //     setStatus(`Error: ${errorData.error || 'Failed to submit contact details'}`);
//   //   //   }
//   //   // } catch (error) {
//   //   //   console.error('Error:', error);
//   //   //   setStatus('An error occurred. Please try again.');
//   //   // }
//   //   try {
//   //     const response = await fetch('https://backen-portfolio.vercel.app/api/submit-contact', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify(formData),
//   //     });

//   //     if (response.ok) {
//   //       const data = await response.json();
//   //       setStatus(data.message); // Success message
//   //       setFormData({ username: '', email: '', phone_no: '', message: '' }); // Clear the form
//   //     } else {
//   //       const errorData = await response.json();
//   //       setStatus(`Error: ${errorData.error || 'Failed to submit contact details'}`);
//   //     }
//   //   } catch (error) {
//   //     console.error('Error:', error);
//   //     setStatus('An error occurred. Please try again.');
//   //   }
//   // };


//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('Submitting...');
  
//     try {
//       const response = await fetch('https://backen-portfolio.vercel.app/api/submit-contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
      
//       if (response.ok) {
//         const data = await response.json();
//         setStatus(data.message);
//         setFormData({ username: '', email: '', phone_no: '', message: '' });
//       } else {
//         const errorData = await response.json();
//         setStatus(`Error: ${errorData.error || 'Failed to submit contact details'}`);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setStatus('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <section id="Contact" className="relative z-10 overflow-hidden bg-white dark:bg-gray-900 py-20 lg:py-[120px]">
//         <div className="container mx-auto">
//           <div className="flex flex-wrap -mx-4 lg:justify-between">
//           <div className="w-full px-8 lg:w-1/2 xl:w-6/12">
//               <div className="mb-12 max-w-[570px] lg:mb-0">
//                 <span className="block mb-4 text-base font-semibold text-primary-600 dark:text-primary-400">
//                   LET'S TALK
//                 </span>
//                 <h2 className="text-dark dark:text-white mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
//                   CONNECT WITH ME!
//                 </h2>
//                 <p className="text-base leading-relaxed text-body-color dark:text-gray-300 mb-9">
//                   Feel free to reach out to discuss potential collaborations,
//                   share ideas, or just say hello. I'm always open to new
//                   opportunities and conversations!
//                 </p>
//                 <div className="mb-8 flex w-full max-w-[370px]">
//                   <div className="bg-primary-100 dark:bg-gray-800 text-primary-600 dark:text-primary-400 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
//                     <svg
//                       width="32"
//                       height="32"
//                       viewBox="0 0 32 32"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M30.6 12.1C29.9 11.2 28.9 10.7 27.9 10.7H27.8C23.9 10.7 20.4 9 17.6 6.3C15.9 4.6 14.4 2.6 13.3 0.3C13.1 0 12.8 0 12.5 0C12.2 0 11.9 0.2 11.8 0.5C11.7 0.8 11.7 1.1 11.9 1.4C13.1 3.9 14.7 6.1 16.6 8C19.6 11 23.3 12.9 27.6 12.9H27.7C28.3 12.9 28.9 13.2 29.3 13.7C29.7 14.2 29.9 14.8 29.8 15.4C29.7 16.5 29.3 17.5 28.6 18.4C27.9 19.3 27 20 25.9 20.4C25.6 20.5 25.3 20.7 25.2 21C25.1 21.3 25.1 21.6 25.3 21.9C25.4 22.1 25.6 22.2 25.8 22.3C26 22.4 26.2 22.4 26.4 22.3C27.8 21.8 29 21 30 19.8C31 18.6 31.5 17.3 31.6 15.8C31.8 14.5 31.4 13.2 30.6 12.1Z"
//                         fill="currentColor"
//                       />
//                       <path
//                         d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
//                         fill="currentColor"
//                       />
//                     </svg>
//                   </div>
//                   <div className="w-full">
//                     <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
//                       Phone Number
//                     </h4>
//                     <p className="text-base text-body-color dark:text-gray-300">
//                       (+91)8920504921
//                     </p>
//                   </div>
//                 </div>
//                 <div className="mb-8 flex w-full max-w-[370px]">
//                   <div className="bg-primary-100 dark:bg-gray-800 text-primary-600 dark:text-primary-400 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
//                     <svg
//                       width="32"
//                       height="32"
//                       viewBox="0 0 32 32"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
//                         fill="currentColor"
//                       />
//                     </svg>
//                   </div>
//                   <div className="w-full">
//                     <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
//                       Email Address
//                     </h4>
//                     <p className="text-base text-body-color dark:text-gray-300">
//                       hrsh12032015@gmail.com
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="w-full px-8 lg:w-1/2 xl:w-6/12">
//               <div className="max-w-[570px]">
//                 <form
//                   onSubmit={handleFormSubmit}
//                   className="flex flex-wrap justify-between"
//                 >
//                   <div className="w-full px-4 sm:w-1/2">
//                     <div className="mb-6">
//                       <label
//                         htmlFor="username"
//                         className="mb-3 block text-base font-semibold text-dark dark:text-white"
//                       >
//                         Your Name
//                       </label>
//                       <input
//                         type="text"
//                         name="username"
//                         value={formData.username}
//                         onChange={handleChange}
//                         placeholder="Enter Your Name"
//                         className="w-full rounded-lg border border-[#E5E5E5] bg-transparent py-3 px-6 text-base font-medium text-dark dark:text-white outline-none focus:border-primary-500 focus-visible:shadow-none"
//                       />
//                     </div>
//                   </div>
//                   <div className="w-full px-4 sm:w-1/2">
//                     <div className="mb-6">
//                       <label
//                         htmlFor="email"
//                         className="mb-3 block text-base font-semibold text-dark dark:text-white"
//                       >
//                         Your Email
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Enter Your Email"
//                         className="w-full rounded-lg border border-[#E5E5E5] bg-transparent py-3 px-6 text-base font-medium text-dark dark:text-white outline-none focus:border-primary-500 focus-visible:shadow-none"
//                       />
//                     </div>
//                   </div>
//                   <div className="w-full px-4 sm:w-1/2">
//                     <div className="mb-6">
//                       <label
//                         htmlFor="phone_no"
//                         className="mb-3 block text-base font-semibold text-dark dark:text-white"
//                       >
//                         Phone Number
//                       </label>
//                       <input
//                         type="text"
//                         name="phone_no"
//                         value={formData.phone_no}
//                         onChange={handleChange}
//                         placeholder="Enter Your Phone Number"
//                         className="w-full rounded-lg border border-[#E5E5E5] bg-transparent py-3 px-6 text-base font-medium text-dark dark:text-white outline-none focus:border-primary-500 focus-visible:shadow-none"
//                       />
//                     </div>
//                   </div>
//                   <div className="w-full px-4 sm:w-1/2">
//                     <div className="mb-6">
//                       <label
//                         htmlFor="message"
//                         className="mb-3 block text-base font-semibold text-dark dark:text-white"
//                       >
//                         Your Message
//                       </label>
//                       <textarea
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         placeholder="Your message..."
//                         className="w-full rounded-lg border border-[#E5E5E5] bg-transparent py-3 px-6 text-base font-medium text-dark dark:text-white outline-none focus:border-primary-500 focus-visible:shadow-none"
//                       ></textarea>
//                     </div>
//                   </div>
//                   <div className="w-full px-4">
//                     <div className="mb-6">
//                       <button
//                         type="submit"
//                         className="w-full p-3 
//                         bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-500
//                         dark:text-white transition border rounded border-primary"
//                         onMouseEnter={() =>
//                           handleHover(buttonRef.current, 1.05, "linear-gradient(180deg, #f46b45 0%, #eea849 100%)")
//                         }
//                         onMouseLeave={() =>
//                           handleHover(buttonRef.current, 1, "linear-gradient(180deg, #ff7e5f 0%, #feb47b 100%)")
//                         }
//                       >
//                         {status || 'Send Message'}
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }








'use client';

import React, { useRef, useState } from "react";
import gsap from "gsap";

export default function ContactForm() {
  const buttonRef = useRef(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone_no: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleHover = (element, scale, gradient) => {
    if (element) {
      gsap.to(element, {
        scale: scale,
        background: gradient,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const response = await fetch('https://backen-portfolio.vercel.app/api/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        setStatus(data.message);
        setFormData({ username: '', email: '', phone_no: '', message: '' });
      } else {
        const errorData = await response.json();
        setStatus(`Error: ${errorData.error || 'Failed to submit contact details'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred. Please try again.');
    }
  };

  // ... rest of your component code ...

  return (
    <div>
      <section id="Contact" className="relative z-10 overflow-hidden bg-white dark:bg-gray-900 py-20 lg:py-[120px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4 lg:justify-between">
          <div className="w-full px-8 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="block mb-4 text-base font-semibold text-primary-600 dark:text-primary-400">
                  LET'S TALK
                </span>
                <h2 className="text-dark dark:text-white mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  CONNECT WITH ME!
                </h2>
                <p className="text-base leading-relaxed text-body-color dark:text-gray-300 mb-9">
                  Feel free to reach out to discuss potential collaborations,
                  share ideas, or just say hello. I'm always open to new
                  opportunities and conversations!
                </p>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="bg-primary-100 dark:bg-gray-800 text-primary-600 dark:text-primary-400 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.6 12.1C29.9 11.2 28.9 10.7 27.9 10.7H27.8C23.9 10.7 20.4 9 17.6 6.3C15.9 4.6 14.4 2.6 13.3 0.3C13.1 0 12.8 0 12.5 0C12.2 0 11.9 0.2 11.8 0.5C11.7 0.8 11.7 1.1 11.9 1.4C13.1 3.9 14.7 6.1 16.6 8C19.6 11 23.3 12.9 27.6 12.9H27.7C28.3 12.9 28.9 13.2 29.3 13.7C29.7 14.2 29.9 14.8 29.8 15.4C29.7 16.5 29.3 17.5 28.6 18.4C27.9 19.3 27 20 25.9 20.4C25.6 20.5 25.3 20.7 25.2 21C25.1 21.3 25.1 21.6 25.3 21.9C25.4 22.1 25.6 22.2 25.8 22.3C26 22.4 26.2 22.4 26.4 22.3C27.8 21.8 29 21 30 19.8C31 18.6 31.5 17.3 31.6 15.8C31.8 14.5 31.4 13.2 30.6 12.1Z"
                        fill="currentColor"
                      />
                      <path
                        d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                      Phone Number
                    </h4>
                    <p className="text-base text-body-color dark:text-gray-300">
                      (+91)8920504921
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="bg-primary-100 dark:bg-gray-800 text-primary-600 dark:text-primary-400 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                      Email Address
                    </h4>
                    <p className="text-base text-body-color dark:text-gray-300">
                      hrsh12032015@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-8 lg:w-1/2 xl:w-6/12">
              <div className="max-w-[570px]">
                <form
                  onSubmit={handleFormSubmit}
                  className="flex flex-wrap justify-between"
                >
                  <div className="w-full px-4 sm:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="username"
                        className="mb-3 block text-base font-semibold text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter Your Name"
                        className="w-full rounded-lg border border-[#E5E5E5] bg-transparent py-3 px-6 text-base font-medium text-dark dark:text-white outline-none focus:border-primary-500 focus-visible:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 sm:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-base font-semibold text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Your Email"
                        className="w-full rounded-lg border border-[#E5E5E5] bg-transparent py-3 px-6 text-base font-medium text-dark dark:text-white outline-none focus:border-primary-500 focus-visible:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 sm:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="phone_no"
                        className="mb-3 block text-base font-semibold text-dark dark:text-white"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone_no"
                        value={formData.phone_no}
                        onChange={handleChange}
                        placeholder="Enter Your Phone Number"
                        className="w-full rounded-lg border border-[#E5E5E5] bg-transparent py-3 px-6 text-base font-medium text-dark dark:text-white outline-none focus:border-primary-500 focus-visible:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 sm:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-base font-semibold text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        className="w-full rounded-lg border border-[#E5E5E5] bg-transparent py-3 px-6 text-base font-medium text-dark dark:text-white outline-none focus:border-primary-500 focus-visible:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-6">
                      <button
                        type="submit"
                        className="w-full p-3 
                        bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-500
                        dark:text-white transition border rounded border-primary"
                        onMouseEnter={() =>
                          handleHover(buttonRef.current, 1.05, "linear-gradient(180deg, #f46b45 0%, #eea849 100%)")
                        }
                        onMouseLeave={() =>
                          handleHover(buttonRef.current, 1, "linear-gradient(180deg, #ff7e5f 0%, #feb47b 100%)")
                        }
                      >
                        {status || 'Send Message'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}