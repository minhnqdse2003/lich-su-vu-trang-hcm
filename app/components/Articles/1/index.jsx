"use client";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { articles1 } from "./data";
import { grafierFont } from "@/fonts";
import { menu } from "../../Header/Menu";

const Article1 = () => {
  return (
    <div className={styles.container} id={menu[3].url}>
      <h1>Tên lửa & Hệ thống phòng không</h1>
      <div className={styles.articlesWrapper}>
        <div className={styles.imageContainer}>
          <Image
            width={1920}
            height={1080}
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
                    width={1920}
                    height={1080}
                    alt={article.title}
                    src={`/${article.src}`}
                  />
                </div>
                <h2 className={grafierFont.className}>{article.title}</h2>
                <p className={styles.description}>{article.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Article1;
