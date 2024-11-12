import React, { useEffect, useRef } from 'react';
import { MdOutlineDataExploration } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import gsap from 'gsap';

export default function Eyes() {
  const experienceRef = useRef(null);
  const educationRef = useRef(null);

  useEffect(() => {
    const experienceCards = experienceRef.current.querySelectorAll('.experience-card');
    const educationCards = educationRef.current.querySelectorAll('.education-card');

    const animateCard = (card) => {
      gsap.to(card, {
        duration: 0.3,
        background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
        scale: 1.05,
        boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
      });
    };

    const resetCard = (card) => {
      gsap.to(card, {
        duration: 0.3,
        background: 'rgba(139, 92, 246, 0.3)',
        scale: 1,
        boxShadow: 'none',
      });
    };

    [...experienceCards, ...educationCards].forEach((card) => {
      card.addEventListener('mouseenter', () => animateCard(card));
      card.addEventListener('mouseleave', () => resetCard(card));
    });

    return () => {
      [...experienceCards, ...educationCards].forEach((card) => {
        card.removeEventListener('mouseenter', () => animateCard(card));
        card.removeEventListener('mouseleave', () => resetCard(card));
      });
    };
  }, []);

  return (
    <div className="grid gap-8 md:grid-cols-2 p-6 dark:bg-gray-900 bg-white dark:text-white text-gray-900">
      <div ref={experienceRef} className="space-y-6">
        <div className="flex items-center gap-3">
          <MdOutlineDataExploration className="text-purple-400 text-4xl" />
          <h2 className="text-4xl font-semibold dark:text-purple-400">My Experience</h2>
        </div>
        
        <div className="space-y-4">
          <div className="experience-card dark:bg-purple-600/30 bg-blue-200 rounded-xl p-6 space-y-2">
            <div className="dark:text-purple-400 text-blue-600">SEP 2023 - SEP 2023</div>
            <h3 className="text-2xl font-semibold">Frontend/GIS Developer</h3>
            <p className="dark:text-gray-300 text-gray-700">Asian Institute of Technology, Thailand</p>
          </div>

          <div className="experience-card dark:bg-purple-600/30 bg-blue-200 rounded-xl p-6 space-y-2">
            <div className="dark:text-purple-400 text-blue-600">AUG 2024 - PRESENT</div>
            <h3 className="text-2xl font-semibold">AI using Python</h3>
            <p className="dark:text-gray-300 text-gray-700">Ducat , Ghaziabad</p>
          </div>
        </div>
      </div>

      <div ref={educationRef} className="space-y-6">
        <div className="flex items-center gap-3">
          <FaUserGraduate className="text-purple-400 text-4xl" />
          <h2 className="text-4xl font-semibold dark:text-purple-400">My Education</h2>
        </div>
        
        <div className="space-y-4">
          <div className="education-card dark:bg-purple-600/30 bg-blue-200 rounded-xl p-6 space-y-2">
            <div className="dark:text-purple-400 text-blue-600">2021 - 2024</div>
            <h3 className="text-2xl font-semibold">Bachelor in Computer Applications SGPA-8.2</h3>
            <p className="dark:text-gray-300 text-gray-700">Guru Gobind Singh Indraprastha University, New Delhi</p>
          </div>

          <div className="education-card dark:bg-purple-600/30 bg-blue-200 rounded-xl p-6 space-y-2">
            <div className="dark:text-purple-400 text-blue-600">2020 - 2021</div>
            <h3 className="text-2xl font-semibold">12th CBSE - 81%</h3>
            <p className="dark:text-gray-300 text-gray-700">Vidya Bharti School</p>
          </div>
        </div>
      </div>
    </div>
  );
}
