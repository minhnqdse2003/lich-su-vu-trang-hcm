import React from "react";
import styles from "./style.module.scss";
import { height, background, mountAnim } from "./anim";
import { motion } from "framer-motion";

export default function Stairs() {
  return (
    <div className={styles.stairs}>
      {[...Array(10)].map((_, index) => {
        return <Stair key={index} index={index} />;
      })}
      <Background />
    </div>
  );
}

const Stair = ({ index }) => {
  return (
    <motion.div
      variants={height}
      {...mountAnim}
      custom={9 - index}
      className={styles.stair}
    ></motion.div>
  );
};

const Background = () => {
  return (
    <motion.div
      variants={background}
      {...mountAnim}
      className={styles.background}
    ></motion.div>
  );
};
