"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import greennew from "../../../public/images/ahml.png";
import ahmlCa from "../../../public/images/ahml.png";
import ahmlWork from "../../../public/images/ahml.png";
import "./index.css";

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <>
            <footer className="cta-footer">
                {/* Large striped heart pattern (left background) */}
                <svg className="cta-heart-large" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <defs>
                        <pattern id="stripes" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
                            <line x1="0" y1="0" x2="0" y2="12" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
                        </pattern>
                    </defs>
                    <path d="M200 550 c-40,-30 -140,-100 -140,-180 0,-80 60,-140 120,-140 30,0 50,10 70,30 20,-20 40,-30 70,-30 60,0 120,60 120,140 0,80 -100,150 -140,180 Z" fill="url(#stripes)" />
                </svg>

                {/* Small outlined heart (top center) */}
                <svg className="cta-heart-small" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M32 54s-18-12-27-21c-9-9-3-24 11-24 5 0 8 2 11 5 2-3 6-5 11-5 14 0 20 15 11 24-9 9-27 21-27 21z" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
                </svg>

                <div className="cta-inner">
                    <div className="cta-content">
                        <h2 className="cta-title">Don't wait and make an<br />appointment today</h2>
                        <Link href="/#book" className="cta-btn">Book an appointment</Link>
                    </div>
                </div>
            </footer>


            <footer className="main-footer">
                {/* Heart divider icon */}
                <svg className="footer-heart-divider" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M32 54s-18-12-27-21c-9-9-3-24 11-24 5 0 8 2 11 5 2-3 6-5 11-5 14 0 20 15 11 24-9 9-27 21-27 21z" fill="none" stroke="#2166ff" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
                </svg>

                <div className="footer-inner">
                    {/* Left Column - Address */}
                    <div className="footer-col footer-col-left">
                        <h3 className="footer-col-title">3730 108 Ave NE #1141<br />Calgary, AB T3N 1V9<br />Canada</h3>
                        <p className="footer-opening-hours">Opening hours: Mon - Sat: 11:00 AM - 9:30 PM</p>

                        <div className="footer-socials">
                            <a href="https://facebook.com" className="footer-social-link" title="Facebook" aria-label="Facebook">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 2h-3a6 6 0 0 0-6 6v3H7v4h3v8h4v-8h3l1-4h-4V8a2 2 0 0 1 2-2h1z"></path>
                                </svg>
                            </a>
                            <a href="https://instagram.com" className="footer-social-link" title="Instagram" aria-label="Instagram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <circle cx="17.5" cy="6.5" r="1.5"></circle>
                                </svg>
                            </a>
                            <a href="https://pinterest.com" className="footer-social-link" title="Pinterest" aria-label="Pinterest">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <path d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22"></path>
                                    <path d="M8 12s1.5-1 4-1c2.5 0 2.5 2 4 2s3.5-1 3.5-4"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Center Column - Contact */}
                    <div className="footer-col footer-col-center">
                        <h3 className="footer-col-title">Contact me</h3>
                        <p className="footer-phone">+1 (587)-968-4541</p>
                        <Link href="/contact" className="footer-btn">Contact us</Link>
                    </div>

                    {/* Right Column - Links */}
                    <div className="footer-col footer-col-right">
                        <h3 className="footer-col-title">Useful links</h3>
                        <ul className="footer-links">
                            <li><Link href="/contact">Contact with us</Link></li>
                            <li><Link href="/about">Who we are?</Link></li>
                            <li><Link href="/safety">Safety data sheets</Link></li>
                            <li><Link href="/careers">Job application</Link></li>
                            <li><Link href="/privacy">Privacy policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p>&copy; {currentYear} Advanced Healing Massage Ltd. <Link href="https://www.haaditech.com/">Developed by Haaditech.</Link></p>
                </div>
            </footer>
        </>
    );
}