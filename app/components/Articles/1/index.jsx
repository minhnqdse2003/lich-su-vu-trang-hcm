import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { articles1 } from "./data";

const Article1 = () => {
  return (
    <div className={styles.articlesWrapper}>
      <div className={styles.imageContainer}>
        <Image
          width={1000}
          height={1000}
          alt={articles1[0].title}
          src={`/${articles1[0].src}`}
        />
        <div className={styles.contentsWrapper}>
          <h2>{articles1[0].title}</h2>
          <p>{articles1[0].description}</p>
        </div>
      </div>
      <div className={styles.contentsContainer}>
        {articles1.slice(1).map((article, index) => {
          return (
            <div key={article.title} className={styles.contentWrapper}>
              <div className={styles.imageWrapper}>
                <Image
                  width={500}
                  height={500}
                  alt={article.title}
                  src={`/${article.src}`}
                />
                <h2>{article.title}</h2>
              </div>

              <p className={styles.description}>{article.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Article1;
