"use client";
import Link from "next/link";
import "./index.css";
import { useState } from "react";
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
            <h1>Home</h1>
        </>
    );
}