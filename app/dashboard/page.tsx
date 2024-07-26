import React from "react";
import {Footer, Navbar} from "@/components/shared";


const Dashboard = () => {
    return <div className="bg-blue_bg">
        <Navbar />
        <div className="py-20 h-screen flex justify-center items-center">
            Dashboard
        </div>
        <Footer />
    </div>;
};

export default Dashboard;