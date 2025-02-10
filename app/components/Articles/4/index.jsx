"use client";
import React, { useRef } from "react";
import { menu } from "../../Header/Menu";
import { useScroll, motion, useTransform } from "framer-motion";
import styles from "./style.module.scss";
import { articles4 } from "./data";
import Image from "next/image";

const Article4 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  return (
    <div
      className="w-100vw flex flex-col gap-[2rem] py-[2rem] px-[4rem]"
      id={menu[6].url}
    >
      <h1
        className={`w-full text-center text-[6rem] tracking-tighter uppercase font-light`}
      >
        {menu[6].title}
      </h1>
      <div ref={ref} className="flex flex-row h-screen gap-[1rem]">
        {articles4.map((article, idx) => {
          return (
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{
                x: 0,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 2.4 - idx * 0.1,
                },
                opacity: 1,
              }}
              exit={{
                x: 500,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 2.4 - idx * 0.1,
                },
              }}
              viewport={{ amount: 0.4 }}
              key={article.title}
              className={`w-1/3 h-[80%] relative`}
            >
              <div
                className={
                  `w-full h-full cursor-pointer` + " " + styles.imageContainer
                }
              >
                <Image
                  src={`/${article.src}`}
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover transition-transform ease duration-500"
                />
              </div>

              <h2 className="absolute top-[-2rem] uppercase font-medium tracking-tighter first-letter:text-[1.25rem]">
                {article.title}
              </h2>
              <article
                className={
                  `absolute bottom-0 left-0 text-[0.625rem] min-h-[25%] px-[1rem] items-center flex` +
                  " " +
                  styles.overlayContainer
                }
              >
                <p className="text-white">{article.description}</p>
              </article>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Article4;
