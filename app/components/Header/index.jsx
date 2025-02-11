"use client";
import { useState } from "react";
import Burger from "./Burger";
import { AnimatePresence } from "framer-motion";
import Stairs from "./Stairs";
import Menu, { menu } from "./Menu";
import Image from "next/image";
import { images } from "@/public";
import styles from "./style.module.scss";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div id={menu[0].url} className={styles.headerContainer}>
      <Burger
        openMenu={() => {
          setMenuIsOpen(true);
        }}
      />
      <AnimatePresence mode="wait">
        {menuIsOpen && (
          <>
            <Stairs />
            <Menu
              closeMenu={() => {
                setMenuIsOpen(false);
              }}
            />
          </>
        )}
      </AnimatePresence>
      <Image
        className={styles.logo}
        alt="logo"
        src={images.logo}
        width={200}
        height={200}
      />
      <article className={styles.contentWrapper}>
        <h1>
          Khám phá sức mạnh quân sự Việt Nam từ{" "}
          <strong className="font-bold text-[#b1ec3b]">1945</strong> đến hiện
          nay
        </h1>
        <p>
          Hiện đại hóa quốc phòng, phát triển khí tài tiên tiến, bảo vệ chủ
          quyền lãnh thổ. Khám phá thành tựu quân sự Việt Nam – trí tuệ, công
          nghệ và ý chí kiên cường!
        </p>
      </article>
    </div>
  );
}
