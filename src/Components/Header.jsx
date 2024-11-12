import React, { useState, useEffect, useRef } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { BsMoonStars } from "react-icons/bs";
import { GiBarbedSun } from "react-icons/gi";
import gsap from "gsap";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const navbarRef = useRef(null);
  const navItemsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > scrollPos) {
        gsap.to(".navbar", { y: -100, duration: 0.5, ease: "power2.out" });
      } else {
        gsap.to(".navbar", { y: 0, duration: 0.5, ease: "power2.out" });
      }
      setScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    // Animation for navbar elements coming from above
    gsap.fromTo(
      navbarRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );

    gsap.fromTo(
      navItemsRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 }
    );
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const animateUnderline = (e) => {
    gsap.to(e.target.querySelector(".underline"), { width: "100%", duration: 0.3, ease: "power2.out" });
  };

  const resetUnderline = (e) => {
    gsap.to(e.target.querySelector(".underline"), { width: "0%", duration: 0.3, ease: "power2.out" });
  };

  return (
    <nav ref={navbarRef} className=" navbar fixed top-0 w-full border-gray-200 bg-white dark:bg-gray-800 backdrop-blur-lg   ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center rtl:space-x-reverse">
          <div className="flex flex-col-1 space-x-10 ">
            <img src="./assets/svg.svg" className="h-8 " alt="Logo" />
            <p className="text-2xl font-semibold absolute text-black dark:text-white">Portfolio</p>
          </div>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
        <a
            href="/assets/RESUME@HARSH.pdf"
            download
            className="inline-flex whitespace-nowrap transition-all hover:scale-110 duration-300 transform py-2 px-4 mb-2 text-sm font-medium text-gray-900 dark:text-gray-200 focus:outline-none bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-600 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 relative overflow-hidden group"
          >
            <span className="relative z-10">Resume</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 dark:from-cyan-300 dark:to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="underline absolute bottom-[-3px] left-0 h-[2px] bg-blue-700 dark:bg-yellow-400 w-0 group-hover:w-full transition-all duration-300"></span>
          </a>

          <button
            onClick={toggleDarkMode}
            className="p-1 lg:p-2 md:p-2 mb-1 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            {darkMode ? <GiBarbedSun /> : <BsMoonStars />}
          </button>

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {menuOpen ? <RxCross2 /> : <FaBarsStaggered />}
          </button>
        </div>

        <div
          className={`items-center justify-between ${menuOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {["Home", "About", "Projects", "Contact"].map((text, index) => (
              <li key={text} ref={el => navItemsRef.current[index] = el}>
                <a
                  href={`#${text}`}
                  onMouseEnter={animateUnderline}
                  onMouseLeave={resetUnderline}
                  className="block py-2 px-3 md:p-0 text-black dark:text-white hover:text-blue-700 dark:hover:text-blue-400 relative"
                >
                  {text}
                  <span className="underline absolute bottom-[-3px] left-0 h-[2px] bg-blue-700 dark:bg-blue-400 w-0"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
