"use client";

import React from "react";
import Head from "next/head";
import Services from "./index";

const KEYWORDS =
    "Advanced Healing Massage Ltd, Advanced Healing Massage Ltd Calgary AB, Massage Therapy Calgary, Registered Massage Therapist Calgary, Professional Massage Therapy Calgary, Healing Massage Calgary, Massage Therapy in Calgary AB, Massage Therapist near T3N 1V9, Calgary Massage Clinic, Best Massage Therapy Calgary, Massage Services Calgary Alberta, Therapeutic Massage Calgary, Deep Tissue Massage Calgary, Relaxation Massage Calgary, Stress Relief Massage Calgary, Pain Relief Massage Calgary, Sports Massage Calgary, Prenatal Massage Calgary, Swedish Massage Calgary, Affordable massage therapy in Calgary, Professional massage therapist in Calgary Alberta, Book massage appointment in Calgary, Healing and relaxation massage Calgary";

export default function ServicesPage() {
    return (
        <>
            <Head>
                <title>Massage Services in Calgary Alberta | Advanced Healing Massage Ltd</title>
                <meta
                    name="description"
                    content="Explore the full range of massage services offered by Advanced Healing Massage Ltd in Calgary AB, including deep tissue, relaxation, therapeutic, sports, and prenatal massage."
                />
                <meta name="keywords" content={KEYWORDS} />
            </Head>
            <Services />
        </>
    );
}