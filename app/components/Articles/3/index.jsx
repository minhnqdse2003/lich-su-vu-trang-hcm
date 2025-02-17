"use client";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { articles3 } from "./data";
import Image from "next/image";
import styles from "./style.module.scss";
import { menu } from "../../Header/Menu";

const Article3 = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    const pin = gsap.fromTo(
      content,
      {
        translateX: 0,
      },
      {
        translateX: `-${(articles3.length - 1) * 100}vw`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <>
      <h1
        id={menu[6].url}
        className="text-[3rem] uppercase py-[2rem] px-0 ml-[4rem]"
      >
        {menu[6].title}
      </h1>
      <div
        ref={sectionRef}
        className="h-dvh flex flex-nowrap overflow-hidden w-fit"
      >
        <div ref={contentRef} className="flex h-full w-[400%] overflow-hidden">
          {articles3.map((article, idx) => {
            return (
              <div
                key={article.title}
                className={
                  "w-[100vw] h-[100%] flex items-center justify-center relative"
                }
              >
                <div className={"w-full h-full aspect-[16/9]"}>
                  <Image
                    className="w-full h-full object-cover"
                    width={1920}
                    height={1080}
                    src={`/${article.src}`}
                  />
                </div>

                <div
                  className={
                    "w-full h-full flex flex-col justify-end items-center absolute bottom-0 left-0 px-8 text-center text-white py-12" +
                    " " +
                    styles.boxOverlay
                  }
                >
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Article3;
