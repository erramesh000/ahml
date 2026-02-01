"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./index.css";

import staffImg from "../../../public/images/ahml-about-pic.png";
//import staffImg from "../../../public/images/ahml-about-pic.png";
import aboutImg from "../../../public/images/ahml-about-pic.png";

const packages = [
    {
        name: "Basic",
        price: "39",
        description: "Essential care to keep you feeling your best.",
        features: [
            "Consultation with doctor",
            "Laboratory and diagnostic tests",
            "Two home visits a year",
        ],
    },
    {
        name: "Comfort",
        price: "59",
        description: "Added peace of mind with extended support.",
        features: [
            "All from BASIC +",
            "Day and night emergency care",
            "Two more home visits a year",
        ],
    },
    {
        name: "Complex",
        price: "99",
        description: "Our most complete package for ongoing care.",
        features: [
            "All from COMFORT +",
            "Rehabilitation after injury",
            "Four more home visits a year",
        ],
        featured: true,
    },
];

const faqs = [
    {
        question: "How far in advance should I book an appointment?",
        answer:
            "Booking 1–2 weeks in advance usually gives you the best choice of days and times. For peak evenings and weekends, we recommend booking a little earlier.",
    },
    {
        question: "What should I wear and do I need to prepare anything?",
        answer:
            "Wear whatever you feel comfortable arriving in. Your therapist will step out of the room while you get on the table and will drape you with sheets at all times for privacy.",
    },
    {
        question: "Can I combine relaxation and therapeutic techniques in one session?",
        answer:
            "Yes. Most sessions blend techniques based on how you are feeling that day so you can relax while also focusing on any problem areas.",
    },
    {
        question: "Do you direct bill or provide receipts for insurance?",
        answer:
            "We provide detailed receipts that you can submit to your insurance provider. Please check your plan for details about coverage.",
    },
    {
        question: "What is your cancellation and rescheduling policy?",
        answer:
            "We kindly ask for 24 hours' notice to cancel or reschedule so we can offer the time to another client. Late cancellations may be subject to a fee.",
    },
];

export default function Packages() {
    const [openFaqIndex, setOpenFaqIndex] = React.useState(0);
    return (
        <main className="packages-page">
            {/* Hero + pricing */}
            <section className="packages-hero">
                <div className="packages-hero-copy">
                    <span className="packages-eyebrow">Packages</span>
                    <h1 className="packages-title">Massage Packages</h1>
                    <p className="packages-subtitle">
                        Choose the level of care that fits your schedule and body best. Each package includes a
                        personalized consultation so your treatment is tailored to how you feel today.
                    </p>


                </div>

                <div className="packages-cards-wrap">
                    <div className="packages-cards">
                        {packages.map((pkg) => (
                            <article
                                key={pkg.name}
                                className={`package-card${pkg.featured ? " package-card--featured" : ""}`}
                            >
                                <header className="package-card-header">
                                    <div className="package-icon">♡</div>
                                    <h2 className="package-name">{pkg.name}</h2>
                                    <p className="package-price">
                                        <span className="package-price-currency">$</span>
                                        {pkg.price}
                                        <span className="package-price-period">mo</span>
                                    </p>
                                </header>
                                <p className="package-description">{pkg.description}</p>
                                <ul className="package-features">
                                    {pkg.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                                <Link href="/appointment" className="package-button">
                                    Choose
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Satisfaction section */}
            <section className="packages-satisfaction">
                <div className="packages-satisfaction-text">
                    <div className="packages-badge">98%</div>
                    <h2>Satisfied clients</h2>
                    <p>
                        Clients consistently report feeling lighter, calmer, and more comfortable in their bodies after
                        completing a series of sessions tailored to their needs.
                    </p>
                    <p className="packages-satisfaction-note">
                        "The calm and care I receive here is unmatched. I always leave feeling like a new person."
                    </p>
                    <span className="packages-satisfaction-author">— Kristin, weekly client</span>
                </div>

                <div className="packages-satisfaction-media" aria-hidden="true">
                    <div className="packages-satisfaction-stack">
                        <div className="packages-photo-card">
                            <Image src={aboutImg} alt="Client at Advanced Healing Massage" />
                        </div>
                        <div className="packages-photo-card packages-photo-card--front">
                            <Image src={staffImg} alt="Therapist at Advanced Healing Massage" />
                        </div>
                        <div className="packages-rating-card">
                            <div className="packages-rating-value">4.9</div>
                            <div className="packages-rating-label">Average rating from our clients</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ section */}
            <section className="packages-faq">
                <h2 className="packages-faq-title">Frequently Asked Questions</h2>
                <div className="packages-faq-list">
                    {faqs.map((faq, index) => (
                        <div key={faq.question} className="packages-faq-row">
                            <button
                                type="button"
                                className="packages-faq-item"
                                onClick={() =>
                                    setOpenFaqIndex((current) => (current === index ? -1 : index))
                                }
                                aria-expanded={openFaqIndex === index}
                            >
                                <span>{faq.question}</span>
                                <span className="packages-faq-icon">
                                    {openFaqIndex === index ? "-" : "+"}
                                </span>
                            </button>
                            {openFaqIndex === index && (
                                <div className="packages-faq-answer">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}