import React from 'react';
import styles from "@/app/styles";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {navLinks} from "@/constants";
import Image from "next/image";
import {college_logo} from "@/public/assets"


const Footer = () => (
    <footer className="bg-blue_bg">
        <div className={`${styles.flexStart} ${styles.paddingX}`}>
            <div className={`${styles.boxWidth}`}>
                <div className="w-full py-5 md:py-8">
                    <div
                        className="sm:flex flex-col md:items-start lg:items-center lg:flex-row sm:items-center sm:justify-between"
                    >
                        <div className="flex gap-6 md: justify-center items-center mb-6 lg:mb-0">
                            <span className={`${styles.heading3}`}>Nexus</span>
                            <a href={"https://www.sathyabama.ac.in/"} target={"_blank"}>
                                <Image
                                    src={college_logo}
                                    alt={"Sathyabama logo"}
                                    className="w-36 md:w-56 lg:w-56"
                                />
                            </a>
                        </div>
                        <ul className="grid grid-cols-4 gap-4 md:grid-cols-4 place-items-center mb-6 text-sm md:text-base font-medium text-slate-200 sm:mb-0">
                            {navLinks.map((nav, index) => (
                                <li
                                    key={nav.id}
                                >
                                    <Button variant="link" className="text-base font-normal">
                                        <Link href={`${nav.id}`}>{nav.title}</Link>
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <hr className="my-6 border-slate-800 sm:mx-auto lg:my-8"/>
                    <div className="flex flex-col lg:flex-row  lg:items-center gap-2 md:text-center lg:text-start">
                        <p className={`${styles.muted}`}>&copy; 2024 Nexus. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
