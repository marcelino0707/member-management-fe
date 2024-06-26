import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "K24 Marcelino Test",
  description: "Generated by create Next JS & Laravel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F3F4F6]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
