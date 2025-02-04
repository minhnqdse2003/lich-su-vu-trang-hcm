import { motion } from "framer-motion";
import { opacity, slideLeft, mountAnim } from "./anim";
import styles from "./style.module.scss";
import Link from "./link";

const menu = [
  {
    title: "Trang Chủ",
    description:
      "Khám phá sức mạnh quân sự Việt Nam - Triển lãm Quốc phòng Quốc tế",
  },
  {
    title: "Giới thiệu",
    description: "Nền Quốc Phòng Việt Nam – Hiện Đại, Tinh Nhuệ, Tự Cường",
  },
  {
    title: "Khí tài quân sự trưng bày",
    description:
      "🚀 Tên lửa & Hệ thống phòng không ✈ Không quân (Máy bay chiến đấu, UAV, radar)",
  },
  {
    title: "Tên lửa & Hệ thống phòng không",
    description:
      'Tổ hợp tên lửa bờ "Trường Sơn"   Tên lửa đạn đạo chiến thuật Scud-B',
  },
  {
    title: "Không quân Việt Nam",
    description: "Máy bay chiến đấu F-16  Máy bay chiến đấu Su-30MK2",
  },
  {
    title: "Hải quân Việt Nam",
    description:
      "Tàu hộ vệ tên lửa Gepard 3.9   Tàu ngầm lớp Kilo 636 – Sát thủ dưới biển   Hệ thống Bastion-P",
  },
  {
    title: "Lục quân Việt Nam",
    description: "Xe tăng & Thiết giáp Súng bộ binh & Vũ khí cá nhân",
  },
  {
    title: "Công nghệ quốc phòng & Vũ khí tương lai",
    description: "Xe tăng & Thiết giáp Súng bộ binh & Vũ khí cá nhân",
  },
];

export default function Menu({ closeMenu }) {
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
          return <Link data={el} index={index} key={index} />;
        })}
      </div>
    </div>
  );
}
