import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CursorFollow() {
  const cursorRef = useRef(null)

  useEffect(() => {
    if (!cursorRef.current) return

    const cursor = cursorRef.current

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out"
      })
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <div 
        ref={cursorRef}
        className="
        hidden lg:block
        fixed w-8 h-8 rounded-full bg-blue-500 opacity-50 pointer-events-none z-50"
        style={{ top: -16, left: -16 }}
      />
      
    </>
  )
}