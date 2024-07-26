"use client"
import Link from 'next/link';
import Image from "next/image";
import { useState, useEffect } from 'react';
import styles from "@/app/styles";
import {Button} from "@/components/ui/button";
import {navLinks} from "@/constants";
import { menu } from "@/public/assets"
import {
    Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose
} from "@/components/ui/sheet"

const Navbar = () => {
    const isUserAuth = false;

    const [scrolled, setScrolled] = useState(false);
    let commonStyle = "transition ease-in-out duration-150 font-normal cursor-pointer text-md hover:scale-110";

    const handleScroll = () => {
        setScrolled(window.scrollY > 10);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`w-full fixed top-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? 'backdrop-blur-md' : 'bg-transparent'} `}>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <nav className="w-full flex py-6 justify-between items-center">
                        <span className={`${styles.heading3}`}>Nexus</span>

                        <div className="flex sm:hidden">
                            <Sheet>
                                <SheetTrigger asChild className="flex-1">
                                    <a className="cursor-pointer">
                                        <Image
                                            src={menu}
                                            alt="menu"
                                            className="w-[26px] h-[26px] object-contain"
                                        />
                                    </a>
                                </SheetTrigger>

                                <SheetContent side="top" className="bg-blue_bg h-auto">
                                    <SheetHeader>
                                        <SheetTitle className="text-start mb-5">
                                            <span className={`${styles.heading3}`}>Nexus</span>
                                        </SheetTitle>
                                    </SheetHeader>
                                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                                        {navLinks.map((nav, index) => (
                                            <li
                                                key={nav.id}
                                                className={`${commonStyle} mb-4`}
                                            >
                                                <SheetClose asChild>
                                                    <Link href={`${nav.id}`} >{nav.title}</Link>
                                                </SheetClose>
                                            </li>
                                        ))}
                                    </ul>
                                    <div>
                                        {isUserAuth ? (
                                            <Button>
                                                <Link href="/dashboard">Dashboard</Link>
                                            </Button>
                                        ) : (
                                            <Button>Login</Button>
                                        )}
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>

                        <ul className="list-none sm:flex hidden justify-end items-center flex-1">

                            {navLinks.map((nav, index) => (
                                <li
                                    key={nav.id}
                                    className={`${commonStyle} mr-10`}
                                >
                                    <Link href={`${nav.id}`} >{nav.title}</Link>
                                </li>
                            ))}

                            <li>
                                {isUserAuth ? (
                                    <Button>
                                        <Link href="/dashboard">Dashboard</Link>
                                    </Button>
                                ) : (
                                    <Button>Login</Button>
                                )}
                            </li>
                        </ul>

                    </nav>
                </div>
            </div>

        </header>
    );
};

export default Navbar;


