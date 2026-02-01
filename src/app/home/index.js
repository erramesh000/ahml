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
                <div className="flex justify-center items-center flex-col h-screen w-full gap-y-6 px-4 md:px-5" style={{ opacity: "0.9" }}>
                    <h1 className="text-2xl md:text-4xl text-white italic text-center leading-snug">
                        Welcome To Our Therapy Center
                    </h1>
                    <h1 className="font-extrabold text-4xl md:text-6xl uppercase text-[#bc4b78] text-center leading-tight drop-shadow-lg">
                        Advanced Healing Massage
                    </h1>
                    <h2 className="text-base md:text-2xl text-white text-center max-w-xl">
                        Dissolving the density of accumulated stress and toxins stored in your tissues
                    </h2>
                    <button className="uppercase text-white bg-[#bc4b78] px-6 md:px-10 py-3 md:py-4 w-full sm:w-auto rounded-full hover:bg-white hover:text-[#bc4b78] text-sm md:text-lg font-bold cursor-pointer shadow-lg shadow-[#bc4b78]/50">
                        <Link href="/appointment">Make An Appointment</Link>
                    </button>
                </div>
            </div>

            <div className="text-center rounded-3xl flex items-center md:flex-row sm:flex-row flex-col p-5 treatments-section">
                <img src="/images/hero1.jpg" width={500} className="rounded-3xl sm:w-1/2 md:w-1/2 lg:w/12 w-full treatments-image" />
                <div className="w-full md:w-1/2 treatments-copy">
                    <h5 className="text-3xl tracking-tight font-semibold text-heading text-[#bc4b78]">Relax Your Body</h5>
                    <p className="text-base text-body sm:text-lg text-[#bc4b78]">Our Signature Treatments</p>
                    <ul className="treatments-list">
                        <li className="treatment-item">
                            <h6>Body Treatments</h6>
                            <p>Gently detoxifying scrubs and wraps that leave your skin silky smooth while easing tired, heavy muscles.</p>
                        </li>
                        <li className="treatment-item">
                            <h6>Hydrotherapy Treatments</h6>
                            <p>Warm water rituals that melt away stress, improve circulation, and prepare your body for deeper relaxation.</p>
                        </li>
                        <li className="treatment-item">
                            <h6>Massage Therapies</h6>
                            <p>From deeply therapeutic to light and soothing, each massage is tailored to your tension, lifestyle, and goals.</p>
                        </li>
                        <li className="treatment-item">
                            <h6>Makeup &amp; Waxing</h6>
                            <p>Polished, confidence-boosting finishes for special occasions or simple everyday glow, always with gentle care.</p>
                        </li>
                        <li className="treatment-item">
                            <h6>Nail Treatments</h6>
                            <p>Manicures and pedicures that nourish hands and feet with spa-grade exfoliation, masks, and massage.</p>
                        </li>
                    </ul>
                </div>
            </div>

            <Services />
            <Prices />

            <div className="text-center rounded-3xl flex items-center md:flex-row sm:flex-row flex-col p-5 m-3 treatments-section treatments-section--reverse">
                <div className="w-full md:w-1/2 treatments-copy">
                    <h5 className="text-3xl tracking-tight font-semibold text-heading text-[#bc4b78]">Find Your Perfect Ritual</h5>
                    <p className="text-base text-body sm:text-lg text-[#bc4b78]">Curated experiences for head-to-toe renewal</p>
                    <ul className="treatments-list">
                        <li className="treatment-item">
                            <h6>Body Treatments</h6>
                            <p>Re-energize from the outside in with mineral-rich exfoliation, contouring wraps, and soothing body masks.</p>
                        </li>
                        <li className="treatment-item">
                            <h6>Hydrotherapy Treatments</h6>
                            <p>Immerse yourself in calming hydro baths and showers that ease stiffness and support deep, restful sleep.</p>
                        </li>
                        <li className="treatment-item">
                            <h6>Massage Therapies</h6>
                            <p>Intuitive touch that targets knots, improves mobility, and invites your nervous system to completely unwind.</p>
                        </li>
                        <li className="treatment-item">
                            <h6>Makeup &amp; Waxing</h6>
                            <p>Soft, natural looks and gentle hair removal to complement the inner calm you feel after every visit.</p>
                        </li>
                        <li className="treatment-item">
                            <h6>Nail Treatments</h6>
                            <p>Glossy, perfectly groomed nails paired with relaxing hand and foot massage for a finishing spa touch.</p>
                        </li>
                    </ul>
                </div>
                <img src="/images/hero2.jpg" width={500} className="rounded-3xl sm:w-1/2 md:w-1/2 lg:w/12 w-full treatments-image" />
            </div>
        </>
    );
}