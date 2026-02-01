"use client";

import React from "react";
import Head from "next/head";
import Contact from "./index";

const KEYWORDS =
    "Advanced Healing Massage Ltd, Advanced Healing Massage Ltd Calgary AB, Massage Therapy Calgary, Registered Massage Therapist Calgary, Professional Massage Therapy Calgary, Healing Massage Calgary, Massage Therapy in Calgary AB, Massage Therapist near T3N 1V9, Calgary Massage Clinic, Best Massage Therapy Calgary, Massage Services Calgary Alberta, Therapeutic Massage Calgary, Deep Tissue Massage Calgary, Relaxation Massage Calgary, Stress Relief Massage Calgary, Pain Relief Massage Calgary, Sports Massage Calgary, Prenatal Massage Calgary, Swedish Massage Calgary, Affordable massage therapy in Calgary, Professional massage therapist in Calgary Alberta, Book massage appointment in Calgary, Healing and relaxation massage Calgary";

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Contact Advanced Healing Massage Ltd | Calgary Massage Clinic</title>
                <meta
                    name="description"
                    content="Get in touch with Advanced Healing Massage Ltd in Calgary AB for questions about massage services, availability, pricing, or directions to our Calgary massage clinic."
                />
                <meta name="keywords" content={KEYWORDS} />
            </Head>
            <Contact />
        </>
    );
}