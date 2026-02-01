"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./index.css";

import staffImg from "../../../public/images/ahmlstaf .png";
import aboutImg from "../../../public/images/ahml-about-pic.png";

export default function About() {
    return (
        <main className="about-page">
            {/* Hero section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <p className="about-eyebrow">About Advanced Healing Massage Ltd</p>
                    <h1 className="about-title">
                        Restoring balance to your body,
                        <span className="about-title-highlight"> one treatment at a time.</span>
                    </h1>
                    <p className="about-subtitle">
                        At Advanced Healing Massage Ltd, every session is thoughtfully designed to dissolve built-up tension, calm the
                        nervous system, and help you feel completely at ease in your own body.
                    </p>

                    <div className="about-stats">
                        <div className="about-stat">
                            <span className="about-stat-number">10+</span>
                            <span className="about-stat-label">Years experience</span>
                        </div>
                        <div className="about-stat">
                            <span className="about-stat-number">4</span>
                            <span className="about-stat-label">Specialized modalities</span>
                        </div>
                        <div className="about-stat">
                            <span className="about-stat-number">1000+</span>
                            <span className="about-stat-label">Sessions completed</span>
                        </div>
                    </div>

                    <div className="about-hero-actions">
                        <Link href="/appointment" className="about-primary-btn">
                            Book an appointment
                        </Link>
                        <Link href="/services" className="about-secondary-btn">
                            View our services
                        </Link>
                    </div>
                </div>

                <div className="about-hero-media" aria-hidden="true">
                    <div className="about-hero-image-wrap">
                        <Image src={staffImg} alt="Advanced Healing Massage Ltd therapist" className="about-hero-image" priority />
                    </div>
                    <div className="about-tag-card">
                        <p className="about-tag-title">Registered Massage Therapy</p>
                        <p className="about-tag-text">Deep tissue · Relaxation · Therapeutic · Cupping</p>
                    </div>
                </div>
            </section>

            {/* Focus areas */}
            <section className="about-focus">
                <div className="about-focus-grid">
                    <article className="about-focus-card">
                        <div className="about-icon">💆‍♀️</div>
                        <h3>Deep Tissue</h3>
                        <p>
                            Slow, focused techniques that work into deeper layers of muscle and fascia to ease chronic
                            tightness and postural strain.
                        </p>
                    </article>
                    <article className="about-focus-card">
                        <div className="about-icon">🌙</div>
                        <h3>Relaxation</h3>
                        <p>
                            Flowing, rhythmic massage that quiets the mind, softens stress, and supports deep,
                            restorative rest.
                        </p>
                    </article>
                    <article className="about-focus-card">
                        <div className="about-icon">✨</div>
                        <h3>Therapeutic</h3>
                        <p>
                            A customized blend of techniques tailored to your lifestyle, goals, and areas that need
                            extra care.
                        </p>
                    </article>
                    <article className="about-focus-card">
                        <div className="about-icon">🫧</div>
                        <h3>Cupping</h3>
                        <p>
                            Gentle negative pressure that lifts tissue, promotes circulation, and releases stubborn
                            tension patterns.
                        </p>
                    </article>
                </div>
            </section>

            {/* Story section */}
            <section className="about-story">
                <div className="about-story-text">
                    <p className="about-eyebrow">Our philosophy</p>
                    <h2>Care that honours both body and mind.</h2>
                    <p>
                        We believe meaningful healing happens when you feel seen, safe, and fully supported. From the
                        moment you arrive, we pay attention to the details—warm linens, calming music, grounding
                        touch—so you can truly let go.
                    </p>
                    <ul className="about-list">
                        <li>Time-built experience working with stress, chronic pain, and postural imbalance.</li>
                        <li>Thoughtfully paced sessions that follow your body&apos;s cues instead of rushing through a
                            routine.</li>
                        <li>Clear communication before and after each visit so you always know what to expect.</li>
                        <li>A calm, welcoming space where your comfort, privacy, and boundaries come first.</li>
                    </ul>
                </div>

                <div className="about-story-media" aria-hidden="true">
                    <div className="about-story-image-wrap">
                        <Image src={aboutImg} alt="Massage therapy at ahml" className="about-story-image" />
                    </div>
                </div>
            </section>

            {/* Testimonial style quote */}
            <section className="about-quote">
                <div className="about-quote-inner">
                    <div className="about-quote-mark">“</div>
                    <p>
                        My goal with every treatment is that you leave feeling lighter, more grounded, and more connected
                        to yourself than when you walked in.
                    </p>
                    <span className="about-quote-name">— Advanced Healing Massage Ltd therapist</span>
                </div>
            </section>
        </main>
    );
}