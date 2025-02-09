"use client";
import React from "react";
import styles from "./style.module.scss";
import { projects } from "../../ArticlesNavigation/Projects/data";
import { articles2 } from "./data";
import Image from "next/image";
import { menu } from "../../Header/Menu";

const Article2 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title} id={menu[4].url}>
        {projects[1].title}
      </h1>
      <article className={styles.articlesContainer}>
        <div className={styles.articleMainSection}>
          {articles2.slice(0, 3).map((article, index) => {
            return (
              <div key={article.title} className={styles.wrapper}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={`/${article.src}`}
                    width={1920}
                    height={1080}
                    alt={article.title}
                  />
                </div>

                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.articleSubSection}>
          {articles2.slice(3).map((article, index) => {
            return (
              <div className={styles.subWrapper} key={article.title}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={`/${article.src}`}
                    width={1920}
                    height={1080}
                    alt={article.title}
                  />
                </div>
                <div className={styles.contents}>
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </div>
  );
};

export default Article2;
