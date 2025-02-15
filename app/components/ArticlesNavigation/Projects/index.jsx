import React from "react";
import styles from "./style.module.scss";
import { projects } from "./data";
import Image from "next/image";
import Link from "next/link";

const Projects = ({ setActiveMenu }) => {
  return (
    <div className={styles.projectWrapper}>
      <ul
        onMouseLeave={() => {
          setActiveMenu(null);
        }}
      >
        {projects.map((project, i) => {
          return (
            <Link
              key={project.title}
              href={`/#${project.url}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(project.url)
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              <li
                onMouseOver={() => {
                  setActiveMenu(i);
                }}
              >
                <div className={styles.expandWrapper}>
                  <div
                    className={styles.expand}
                    style={{ backgroundColor: project.color }}
                  ></div>
                  <Image
                    src={`/${project.src2}`}
                    width={1920}
                    height={1080}
                    alt={`${project.title}`}
                  />
                </div>
                <p>{project.title}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
