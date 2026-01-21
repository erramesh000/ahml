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
                        <h2 id="appointment-heading">Start Your Sustainability Journey</h2>

                        <form className="appointment-form" onSubmit={handleSubmit} noValidate>
                            {/* <div className="row"> */}
                            <label className={`field ${form.name ? "filled" : ""}`}>
                                <span>Name *</span>
                                <input name="name" value={form.name} onChange={onChange} type="text" autoComplete="name" />
                            </label>

                            <label className={`field ${form.phone ? "filled" : ""}`}>
                                <span>Phone Number</span>
                                <input name="phone" value={form.phone} onChange={onChange} type="tel" placeholder="Enter your phone number" autoComplete="tel" />
                            </label>

                            <label className={`field ${form.email ? "filled" : ""}`}>
                                <span>Email Address *</span>
                                <input name="email" value={form.email} onChange={onChange} type="email" placeholder="Enter your email" autoComplete="email" />
                            </label>

                            <div className="form-row">
                                <label className={`field ${form.date ? "filled" : ""}`}>
                                    <span>Date</span>
                                    <input name="date" value={form.date} onChange={onChange} type="date" placeholder="dd-mm-yyyy" />
                                </label>

                                <label className={`field ${form.time ? "filled" : ""}`}>
                                    <span>Time</span>
                                    <input name="time" value={form.time} onChange={onChange} type="time" placeholder="--:--" />
                                </label>
                            </div>

                            <label className={`field ${form.company ? "filled" : ""}`}>
                                <span>Company</span>
                                <input name="company" value={form.company} onChange={onChange} type="text" placeholder="Enter company name" autoComplete="organization" />
                            </label>

                            <fieldset className="fieldset-address">
                                <legend>Address Details</legend>
                                <div className="form-row">
                                    <label className={`field ${form.area ? "filled" : ""}`}>
                                        <span>Area</span>
                                        <input name="area" value={form.area} onChange={onChange} type="text" placeholder="Enter area" />
                                    </label>

                                    <label className={`field ${form.city ? "filled" : ""}`}>
                                        <span>City</span>
                                        <input name="city" value={form.city} onChange={onChange} type="text" placeholder="Enter city" />
                                    </label>
                                </div>

                                <div className="form-row">
                                    <label className={`field ${form.state ? "filled" : ""}`}>
                                        <span>State</span>
                                        <input name="state" value={form.state} onChange={onChange} type="text" placeholder="Enter state" />
                                    </label>

                                    <label className={`field ${form.postCode ? "filled" : ""}`}>
                                        <span>Post Code</span>
                                        <input name="postCode" value={form.postCode} onChange={onChange} type="text" placeholder="Enter post code" />
                                    </label>
                                </div>
                            </fieldset>

                            <label className={`field ${form.message ? "filled" : ""}`}>
                                <span>Message *</span>
                                <textarea name="message" value={form.message} onChange={onChange} rows={5} />
                            </label>

                            <div className="form-actions">
                                <button type="submit" className={`btn ${status === "sending" ? "loading" : ""}`} aria-live="polite">
                                    {status === "sending" ? "Sending…" : status === "success" ? "Sent" : "Send Message"}
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