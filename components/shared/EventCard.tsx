"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import {bg1} from "@/public/assets"
import {Button} from "@/components/ui/button";

const EventCard = () => {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="40" className="w-full mt-4">
                    <Image
                        src={bg1}
                        height="500"
                        width="300"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>

                <CardItem
                    translateZ="40"
                    className="text-xl font-bold text-neutral-600 dark:text-white mt-5"
                >
                    Perspective Panaroma
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="30"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    Cyborg
                </CardItem>

                <div className="flex justify-between items-center mt-3 w-full">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href="#"
                        className="py-2 rounded-xl text-xs font-normal dark:text-white w-full"
                    >
                        <Button className="w-full">View More</Button>
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}

export default EventCard;
