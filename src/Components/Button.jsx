import React from 'react';
import gsap from 'gsap';

export default function Button() {
  const handleHoverIn = (e) => {
    const overlay = e.target.querySelector('.hover-overlay');
    gsap.to(overlay, {
      height: '100%', // Fill the overlay to cover the button from bottom to top
      duration: 0.3,
      ease: 'power2.inOut',
    });
    gsap.to(e.target.querySelector('.button-text'), {
      color: 'white',
      duration: 0.2,
      ease: 'power2.out',
    });
  };

  const handleHoverOut = (e) => {
    const overlay = e.target.querySelector('.hover-overlay');
    gsap.to(overlay, {
      height: '0%', // Animate the overlay back down
      duration: 0.3,
      ease: 'power2.inOut',
    });
    gsap.to(e.target.querySelector('.button-text'), {
      color: 'black',
      duration: 0.2,
      ease: 'power2.out',
    });
  };

  return (
    <div className="space-x-3 lg:space-x-10 pt-5">
      {['HTML', 'CSS', 'JAVASCRIPT', 'GSAP'].map((text, index) => (
        <button
          key={index}
          className="relative border-black border-[1px] rounded-xl px-4 py-2 overflow-hidden group"
          onMouseEnter={handleHoverIn}
          onMouseLeave={handleHoverOut}
        >
          <span className="button-text relative z-10 transition-colors">{text}</span>
          <div className="hover-overlay absolute bottom-0 left-0 w-full h-0 bg-black z-0"></div>
        </button>
      ))}
    </div>
  );
}
