"use client";
import React, { useRef } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        className={styles.card}
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <h2>{title}</h2>

        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
          </div>

          <div className={styles.imageContainer}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <Image fill src={`/images/${src}`} alt="image" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
