import React from "react";
import styles from "./style.module.scss";
import { Canvas } from "@react-three/fiber";
import Model from "../Model";
const Scene = ({ activeMenu }) => {
  return (
    <div className={styles.canvasContainer}>
      <Canvas>
        <Model activeMenu={activeMenu} />
      </Canvas>
    </div>
  );
};

export default Scene;
