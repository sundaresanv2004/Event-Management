import React from "react";
import {Footer, Navbar} from "@/components/shared";
import styles from "@/app/styles"

const Team = () => {
    return <div className="bg-blue_bg">
        <Navbar/>
        <div className="py-20 h-screen flex justify-center items-center">
            <h1 className={`${styles.heading2}`}>Meat the Team</h1>
        </div>
        <Footer />
    </div>;
};

export default Team;
