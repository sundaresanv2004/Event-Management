import React from "react";
import {EventCard, Footer, Navbar} from "@/components/shared";
import styles from "@/app/styles"

const Event = () => {
    return <div className="bg-blue_bg">
        <Navbar/>
        <div className="pt-10 mt-5">
            <h1 className={`${styles.heading2} text-center text-white mt-10`}>Technical Events</h1>
        </div>
        <div className="flex justify-center">
            <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className={`flex ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                    <div className={`grid grid-cols-3 gap-x-4 max-sm:grid-cols-1 max-md:grid-cols-1`}>
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                    </div>
                </div>
            </section>
        </div>

        <Footer/>
    </div>;
};

export default Event;
