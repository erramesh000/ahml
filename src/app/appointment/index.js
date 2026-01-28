"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
//import greennew from "../images/ahml.png";
import "./index.css";

export default function Appointment() {
    const [form, setForm] = useState({ name: "", phone: "", email: "", company: "", date: "", time: "", area: "", city: "", state: "", postCode: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle|sending|success|error
    const cardRef = useRef(null);
    const toastRef = useRef(null);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("show");
                        obs.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.12 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        if (status === "success" && toastRef.current) {
            toastRef.current.classList.add("visible");
            const t = setTimeout(() => toastRef.current.classList.remove("visible"), 2400);
            return () => clearTimeout(t);
        }
    }, [status]);

    function onChange(e) {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 2200);
            return;
        }
        setStatus("sending");
        try {
            // TODO: replace with real API call
            // await new Promise((r) => setTimeout(r, 900));
            const res = await fetch("/api/send-mail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: form.email.trim(),
                    subject: `New Appointment Form Submission from ${form.name.trim()}`,
                    name: form.name.trim(),
                    text: form.message.trim(),
                    company: form.company.trim(),
                    html: "",
                }),
            });
            setStatus("success");
            setForm({ name: "", phone: "", email: "", company: "", date: "", time: "", area: "", city: "", state: "", postCode: "", message: "" });
            setTimeout(() => setStatus("idle"), 2400);
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 2200);
        }
    }

    return (
        <div className="appointmentbg" id="appointment">
            <main className="appointment-page alt-two" aria-label="Appointment">
                <div className="appointment-bg-anim" aria-hidden="true" />

                <div className="appointment-inner">
                    <section ref={cardRef} className="appointment-card" aria-labelledby="appointment-heading">
                        <div className="appointment-logo" aria-hidden="true">
                            <Image src="/images/ahml.png" alt="" width={96} height={96} priority />
                        </div>
                        <h2 id="appointment-heading">Massage Consent & Appointment Form</h2>

                        <form className="appointment-form" onSubmit={handleSubmit} noValidate>
                            {/* <div className="row"> */}
                            <label className={`field ${form.name ? "filled" : ""}`}>
                                <span>Name *</span>
                                <input name="name" value={form.name} onChange={onChange} type="text" autoComplete="name" />
                            </label>

                            <label className={`field ${form.phone ? "filled" : ""}`}>
                                <span>Phone Number</span>
                                <input name="phone" value={form.phone} onChange={onChange} type="tel" autoComplete="tel" />
                            </label>

                            <label className={`field ${form.email ? "filled" : ""}`}>
                                <span>Email Address *</span>
                                <input name="email" value={form.email} onChange={onChange} type="email" autoComplete="email" />
                            </label>

                            <div className="form-row">
                                <label className={`field ${form.date ? "filled" : ""}`}>
                                    <span></span>
                                    <input name="date" value={form.date} onChange={onChange} type="date" />
                                </label>

                                <label className={`field ${form.time ? "filled" : ""}`}>
                                    <span></span>
                                    <input name="time" value={form.time} onChange={onChange} type="time" />
                                </label>
                            </div>

                            <label className={`field ${form.company ? "filled" : ""}`}>
                                <span>Company</span>
                                <input name="company" value={form.company} onChange={onChange} type="text" autoComplete="organization" />
                            </label>

                            <label className={`field ${form.message ? "filled" : ""}`}>
                                <span>Message *</span>
                                <textarea name="message" value={form.message} onChange={onChange} rows={5} />
                            </label>

                            <div className="form-actions">
                                <button type="submit" className={`btn ${status === "sending" ? "loading" : ""}`} aria-live="polite">
                                    {status === "sending" ? "Sending…" : status === "success" ? "Sent" : "Submit Appointment Request"}
                                </button>

                                <div className={`status ${status}`} role="status" aria-hidden={status === "idle"}>
                                    {status === "error" && <span className="err">Please complete required fields</span>}
                                </div>
                            </div>
                        </form>
                    </section>


                </div>

                <div ref={toastRef} className="appointment-toast" aria-hidden={status !== "success"}>
                    {/* <strong>Thanks — we received your message</strong>
                    <span>We’ll get back to you within 2 business days.</span> */}
                </div>


            </main>
        </div>
    );
}