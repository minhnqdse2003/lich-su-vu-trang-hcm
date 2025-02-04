"use client";
import { useState } from "react";
import Burger from "../Burger";
import { AnimatePresence } from "framer-motion";
import Stairs from "../Stairs";
import Menu from "../Menu";
import Image from "next/image";
import { images } from "@/public";
import styles from "./style.module.scss";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className={styles.headerContainer}>
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
    </div>
  );
}
