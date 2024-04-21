"use client";
import { useState } from 'react'
import Link from "next/link";
import { menu } from "@/data/menu";
import { HiOutlineX, HiMenu } from "react-icons/hi";
import { usePathname } from 'next/navigation';
import { Nunito } from 'next/font/google';

const randomFont = Nunito({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
    const currentPage = usePathname();
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="container mx-auto px-4 xl:px-0">
            <div className="py-4 flex justify-between items-center">
                <Link href="/" className={`text-[20px] cursor-pointer ${randomFont.className}`}>K24_Test</Link>
                <HiMenu
                    size={30}
                    className="cursor-pointer lg:hidden"
                    onClick={(prev) => setShowMenu(!prev.showMenu)}
                />
                <div
                    className={`fixed lg:relative bg-blue-50 lg:bg-transparent
                        top-0 w-full h-screen lg:h-auto 
                        ${showMenu ? 'right-0' : "-right-full"}  lg:right-0
                        flex gap-10 flex-col lg:flex-row lg:justify-end justify-center items-center
                        transition-all duration-300 top_nav`}
                >
                    <HiOutlineX
                        size={30}
                        className="absolute top-7 right-7 cursor-pointer lg:hidden"
                        onClick={() => setShowMenu(false)}
                    />
                    {menu.map((item, i) => {
                        return (
                            <Link
                                className={currentPage == item.url ? "active" : ""}
                                key={i}
                                href={item.url}
                            >
                                {item.label}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Navbar