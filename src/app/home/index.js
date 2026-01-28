"use client";
import Link from "next/link";
import "./index.css";
import { useState } from "react";
import Services from "@/components/Services";
import spa from '../../../public/images/spa1.jpg';
import Prices from "@/components/Prices";

export default function Home() {
    const images = [
        "./images/ahml.png",
        "./images/ahml.png",
        "./images/ahml.png",
        "./images/ahml.png",
    ];
    const services = [
        { name: "Custom Deck", link: "customdeck", image: "./images/ahml.png" },
        { name: "Framing Service", link: "framing", image: "./images/ahml.png" },
        { name: "Drywall Service", link: "drywall", image: "./images/ahml.png" },
        { name: "Handyman Service", link: "handyman", image: "./images/ahml.png" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    return (
        <>
            <div style={{ backgroundImage: "url('/images/toppic.jpg')", height: "100vh", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="flex justify-center items-center flex-col h-screen w-full gap-y-7 p-5" style={{ opacity: "0.7", backgroundColor: "black" }}>
                    <h1 className="text-4xl text-white italic text-center">Welcome To Our Therapy Center</h1>
                    <h1 className="font-bold text-6xl uppercase  text-[#bc4b78] text-center">Advanced Healing Massage </h1>
                    <h2 className="text-2xl text-white text-center">
                        Dissolving the density of accumulated stress and toxins stored in your tissues
                    </h2>
                    <button className="uppercase text-white bg-[#bc4b78] px-10 py-4 hover:bg-white hover:text-[#bc4b78] text-lg font-bold cursor-pointer">
                        <Link href="/appointment">Make An Appointment</Link>
                    </button>
                </div>
            </div>

            <div className="text-center rounded-3xl flex items-center md:flex-row sm:flex-row flex-col cta-spa">
                <img src="/images/hero1.jpg" width={500} className="rounded-3xl sm:w-1/2 md:w-1/2 lg:w/12 w-full" />
                <div className="w-1/2">
                    <h5 className="text-3xl tracking-tight font-semibold text-heading">Relax Your Body</h5>
                    <p className="text-base text-body sm:text-lg">Our Treatments</p>
                    <ul className="p-2">
                        <li className="text-red-950 text-lg font-bold">Body Treatments</li>
                        <li className="text-red-950 text-lg font-bold">Hydrotherapy Treatments</li>
                        <li className="text-red-950 text-lg font-bold">Massage Therapies</li>
                        <li className="text-red-950 text-lg font-bold">Makeup & Waxing</li>
                        <li className="text-red-950 text-lg font-bold">Nail Treatments</li>
                    </ul>
                </div>
            </div>

            <Services />
            <Prices />

            <div className="text-center rounded-3xl flex items-center md:flex-row sm:flex-row flex-col cta-spa">
                <div className="w-1/2">
                    <h5 className="text-3xl tracking-tight font-semibold text-heading">Relax Your Body</h5>
                    <p className="text-base text-body sm:text-lg">Our Treatments</p>
                    <ul>
                        <li className="text-red-950 text-lg font-bold">Body Treatments</li>
                        <li className="text-red-950 text-lg font-bold">Hydrotherapy Treatments</li>
                        <li className="text-red-950 text-lg font-bold">Massage Therapies</li>
                        <li className="text-red-950 text-lg font-bold">Makeup & Waxing</li>
                        <li className="text-red-950 text-lg font-bold">Nail Treatments</li>
                    </ul>
                </div>
                <img src="/images/hero2.jpg" width={500} className="rounded-3xl sm:w-1/2 md:w-1/2 lg:w/12 w-full" />
            </div>
        </>
    );
}