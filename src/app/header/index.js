"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./index.css";
import { usePathname } from "next/navigation";
import ahml from "../../../public/images/ahml.png";

export default function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // close mobile menu on resize > mobile or when route changes
    useEffect(() => {
        function onResize() {
            if (window.innerWidth > 768) setOpen(false);
        }
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => setOpen(false), [pathname]);

    const menu = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About us" },
        { href: "/about", label: "Services" },
        { href: "/about", label: "Our Work" },
        { href: "/appointment", label: "Contact" },
    ];

    return (
        <header className="gn-header" role="banner">
            <div className="gn-inner">
                <Link href="/" className="gn-brand" aria-label="ahml home">
                    <Image
                        src={ahml}
                        alt="ahml CANADA"
                        className="gn-logo"
                        width={200}
                        height={200}
                        priority
                    />
                </Link>

                <div className="gn-menu-pill">
                    <nav className={`gn-nav ${open ? "open" : ""}`} role="navigation">
                        {menu.map((item) => {
                            const isServices = item.href === "/services/customdeck";
                            const isActive = pathname === item.href || (isServices && pathname.startsWith("/services"));

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`gn-link ${isActive ? "active" : ""}`}
                                    aria-current={isActive ? "page" : undefined}
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>


                </div>

                <button
                    className={`gn-burger ${open ? "open" : ""}`}
                    onClick={() => setOpen((s) => !s)}
                    aria-label="Toggle navigation"
                    aria-expanded={open}
                    type="button"
                >
                    <svg
                        className="gn-icon hamburger"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <rect x="3" y="6" width="18" height="2" rx="1" />
                        <rect x="3" y="11" width="18" height="2" rx="1" />
                        <rect x="3" y="16" width="18" height="2" rx="1" />
                    </svg>

                    <svg
                        className="gn-icon close"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <path d="M6 6 L18 18 M6 18 L18 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <div className="gn-contacts" aria-hidden="true">
                    <div className="gn-dots" aria-hidden="true">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <circle cx="5" cy="5" r="1.8" fill="#bc4b78" />
                            <circle cx="12" cy="5" r="1.8" fill="#bc4b78" />
                            <circle cx="19" cy="5" r="1.8" fill="#bc4b78" />
                            <circle cx="5" cy="12" r="1.8" fill="#bc4b78" />
                            <circle cx="12" cy="12" r="1.8" fill="#bc4b78" />
                            <circle cx="19" cy="12" r="1.8" fill="#bc4b78" />
                            <circle cx="5" cy="19" r="1.8" fill="#bc4b78" />
                            <circle cx="12" cy="19" r="1.8" fill="#bc4b78" />
                            <circle cx="19" cy="19" r="1.8" fill="#bc4b78" />
                        </svg>
                    </div>

                    <a href="tel:+15879684541" className="gn-phone">+1 (587)-968-4541</a>
                    <a href="tel:+15879684541" >
                        <button className="gn-chat" aria-label="Live chat">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" fill="#fff" />
                                <circle cx="8" cy="10" r="1" fill="#fff" />
                                <circle cx="12" cy="10" r="1" fill="#fff" />
                                <circle cx="16" cy="10" r="1" fill="#fff" />
                            </svg>
                        </button>
                    </a>
                </div>
            </div>

            <div className="gn-accent" aria-hidden="true" />
        </header>
    );
}