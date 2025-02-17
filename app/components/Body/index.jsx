"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { sections } from "./data";
import Card from "./Card";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { menu } from "../Header/Menu";

const Body = () => {
  const container = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const { scrollYProgress, scrollY } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 800) {
      setIsVisible(true);
      return;
    }
    setIsVisible(false);
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div ref={container} id={menu[1].url} className={styles.contentWrapper}>
      <h1
        className={styles.title}
        style={isVisible ? { opacity: 1 } : { opacity: 0 }}
      >
        Nền Tảng
      </h1>
      <div>
        {sections.map((section, i) => {
          const targetScale = 1 - (sections.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...section}
              progress={scrollYProgress}
              range={[i * 0.15, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
