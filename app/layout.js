import Header from "./components/Header";
import "./globals.css";
import { Inter, Lexend_Giga } from "next/font/google";

const inter = Lexend_Giga({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Vũ Trang Thời Vụ",
  description: "Web về vũ trang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/vercel.svg" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
