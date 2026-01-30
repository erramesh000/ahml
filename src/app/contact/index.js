"use client";

import React, { useState, useRef, useEffect } from "react";
import "./index.css";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
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
                    name: form.name.trim(),
                    subject: `New Contact Form Submission from ${form.name.trim()}`,
                    text: form.message.trim(),
                    company: form.company.trim(),
                    html: "",
                    formType:"contact-us"
                }),
            });
            setStatus("success");
            setForm({ name: "", email: "", company: "", message: "" });
            setTimeout(() => setStatus("idle"), 2400);
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 2200);
        }
    }

    return (
        <div className="contactbg" id="contact">
            <main className="contact-page alt-two" aria-label="Contact">
                <div className="contact-bg-anim" aria-hidden="true" />

                <div className="contact-inner">
                    <section ref={cardRef} className="contact-card" aria-labelledby="contact-heading">
                        <h2 id="contact-heading">Contact Us</h2>

                        <form className="contact-form" onSubmit={handleSubmit} noValidate>
                            {/* <div className="row"> */}
                            <label className={`field ${form.name ? "filled" : ""}`}>
                                <span>Name *</span>
                                <input name="name" value={form.name} onChange={onChange} type="text" autoComplete="name" />
                            </label>

                            <label className={`field ${form.email ? "filled" : ""}`}>
                                <span>Email *</span>
                                <input name="email" value={form.email} onChange={onChange} type="email" autoComplete="email" />
                            </label>
                            {/* </div> */}

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
                                    {status === "sending" ? "Sending…" : status === "success" ? "Sent" : "Send Message"}
                                </button>

                                <div className={`status ${status}`} role="status" aria-hidden={status === "idle"}>
                                    {status === "error" && <span className="err">Please complete required fields</span>}
                                </div>
                            </div>
                        </form>
                    </section>

                    <aside className="contact-info" aria-labelledby="contact-info-heading">
                        <div className="info-card flex justify-between flex-col gap-y-5">
                            <h3 id="contact-info-heading">Reach out to <strong>ahml</strong> today</h3>

                            <p>
                                <b>Massage healing therapy</b> is a holistic, hands-on practice involving the manipulation of soft tissues—muscles, tendons, ligaments, and fascia—to reduce stress, alleviate pain, and promote physical and emotional well-being.
                            </p>
                            <p>
                                Effective for reducing chronic back pain, neck and shoulder pain, headaches, and muscle stiffness.
                            </p>
                            <p>
                                Stimulates blood flow, which helps deliver oxygen and nutrients to tissues, accelerates injury recovery, and reduces swelling.
                            </p>
                            <p>
                                If you have any questions about our services, or need expert advice for you, we encourage you to contact us today.
                            </p>
                            
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}