import { motion } from "framer-motion";
import { slideLeft, mountAnim } from "./anim";
import styles from "./style.module.scss";
import { useState } from "react";
import Link from "next/link";
import LinkComponent from "./link";

export const menu = [
  {
    title: "Trang Chủ",
    description:
      "Khám phá sức mạnh quân sự Việt Nam - Triển lãm Quốc phòng Quốc tế",
    url: "trang-chu",
  },
  {
    title: "Giới thiệu",
    description: "Nền Quốc Phòng Việt Nam – Hiện Đại, Tinh Nhuệ, Tự Cường",
    url: "gioi-thieu",
  },
  {
    title: "Khí tài quân sự",
    description:
      "🚀 Tên lửa & Hệ thống phòng không ✈ Không quân (Máy bay chiến đấu, UAV, radar)",
    url: "khi-tai-quan-su-trung-bay",
  },
  {
    title: "Tên lửa & Phòng không",
    description:
      'Tổ hợp tên lửa bờ "Trường Sơn"   Tên lửa đạn đạo chiến thuật Scud-B',
    url: "ten-lua-va-he-thong-phong-khong",
  },
  {
    title: "Không quân Việt Nam",
    description: "Máy bay chiến đấu F-16  Máy bay chiến đấu Su-30MK2",
    url: "khong-quan-viet-nam",
  },
  {
    title: "Hải quân Việt Nam",
    description:
      "Tàu hộ vệ tên lửa Gepard 3.9   Tàu ngầm lớp Kilo 636 – Sát thủ dưới biển   Hệ thống Bastion-P",
    url: "hai-quan-viet-nam",
  },
  {
    title: "Lục quân Việt Nam",
    description: "Xe tăng & Thiết giáp Súng bộ binh & Vũ khí cá nhân",
    url: "luc-quan-viet-nam",
  },
  {
    title: "Quốc phòng & Vũ Khí",
    description: "Xe tăng & Thiết giáp Súng bộ binh & Vũ khí cá nhân",
    url: "cong-nghe-quoc-phong-va-vu-khi-tuong-lai",
  },
];

export default function Menu({ closeMenu }) {
  const [currentIdx, setCurrentIdx] = useState(1);

  return (
    <div className={styles.menu}>
      <div className={styles.header}>
        <motion.svg
          variants={slideLeft}
          {...mountAnim}
          onClick={() => {
            closeMenu();
          }}
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 1.5L67 67" stroke="white" />
          <path d="M66.5 1L0.999997 66.5" stroke="white" />
        </motion.svg>
      </div>

      <div className={styles.body}>
        {menu.map((el, index) => {
          return (
            <LinkComponent
              id={`el_${index}`}
              data={el}
              index={index}
              key={index}
              closeMenu={closeMenu}
            />
          );
        })}
      </div>
      <Link
        href={`#el_${currentIdx}`}
        onClick={() => {
          if (currentIdx == 6) {
            setCurrentIdx(0);
            return;
          }
          setCurrentIdx((prev) => prev + 1);
        }}
      >
        <svg
          className={styles.dropdown}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <path d="m12 17.586-7.293-7.293-1.414 1.414L12 20.414l8.707-8.707-1.414-1.414L12 17.586z" />
          <path d="m20.707 5.707-1.414-1.414L12 11.586 4.707 4.293 3.293 5.707 12 14.414l8.707-8.707z" />
        </svg>
      </Link>
    </div>
  );
}
