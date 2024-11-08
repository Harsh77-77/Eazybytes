import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SkillsScroll = () => {
    const component = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    pin: true,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0,
                },
            });

            tl.fromTo(
                ".tech-row",
                {
                    x: (index) => {
                        return index % 2 === 0
                            ? gsap.utils.random(600, 400)
                            : gsap.utils.random(-600, -400);
                    },
                },
                {
                    x: (index) => {
                        return index % 2 === 0
                            ? gsap.utils.random(-600, -400)
                            : gsap.utils.random(600, 400);
                    },
                    ease: "none",
                    duration: 1,
                }
            );
        }, component);
        return () => ctx.revert();
    }, []);
    return (
        <section id="skills" className="h-screen py-40 wrapper overflow-hidden relative select-none" ref={component}>
            <div className="m-0 absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                <div className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700 whitespace-nowrap tech-item text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tighter">
                    {Array(6)
                        .fill(
                            " HTML CSS SASS JavaScript Typescript React Redux Python Tailwind"
                        )
                        .reduce((str, el) => str.concat(el), "")}{" "}
                </div>
                <div className="my-16 text-center font-extrabold text-black dark:text-white text-2xl md:text-4xl lg:text-6xl xl:text-8xl">
                    Interested in <span className="text-indigo-500">Collaboration</span> ?
                </div>
                <div className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700 whitespace-nowrap tech-item text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tighter">
                    {Array(6)
                        .fill(
                            " Postman Web Development SQL UI Webpack NodeJs ExpressJS GSAP MongoDB"
                        )
                        .reduce((str, el) => str.concat(el), "")}{" "}
                </div>
            </div>
        </section>
    );
}

export default SkillsScroll;