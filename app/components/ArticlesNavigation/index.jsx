"use client";
import React, { useEffect, useState } from "react";
import Projects from "./Projects";
import Scene from "./Scene";
import Lenis from "@studio-freight/lenis";
import styles from "./style.module.scss";
import { menu } from "../Header/Menu";

const ArticleNavigation = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <h1 className={styles.title} id={menu[2].url}>
        Khí tài quân sự trưng bày
      </h1>
      <Projects setActiveMenu={setActiveMenu} />
      <Scene activeMenu={activeMenu} />
      <div style={{ height: "15vh" }}></div>
    </main>
  );
};

export default ArticleNavigation;
