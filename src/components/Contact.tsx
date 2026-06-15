"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-container">
      <Reveal>
        <div className="section-header">
          <span className="section-num">[05]</span>
          <h2 className="section-title">CONNECT.sh</h2>
        </div>
      </Reveal>

      <div className="contact-grid">
        {/* Info Column */}
        <Reveal delay={100}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <h3 className="contact-subtitle">Let&apos;s build something intelligent.</h3>
            <p className="contact-desc">
              I&apos;m open to full-time opportunities, consulting engagements, or
              collaborations regarding Agentic AI workflows, vector search architectures,
              and modern full-stack web builds.
            </p>

            <div className="contact-links">
              <div className="contact-link-item">
                <span className="contact-link-label">EMAIL:</span>
                <a href="mailto:chaudharibhagyesh123@gmail.com" className="contact-link-val" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  chaudharibhagyesh123@gmail.com
                </a>
              </div>
              <div className="contact-link-item">
                <span className="contact-link-label">GITHUB:</span>
                <a href="https://github.com/bhagyesh8877" target="_blank" rel="noopener noreferrer" className="contact-link-val" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  https://github.com/bhagyesh8877
                </a>
              </div>
              <div className="contact-link-item">
                <span className="contact-link-label">LINKEDIN:</span>
                <a href="https://www.linkedin.com/in/bhagyesh-chaudhari-915605171/" target="_blank" rel="noopener noreferrer" className="contact-link-val" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  https://www.linkedin.com/in/bhagyesh-chaudhari-915605171/
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Form Column */}
        <Reveal delay={300}>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">SENDER_NAME</label>
              <input
                type="text" id="name" name="name" required
                value={formState.name} onChange={handleChange}
                placeholder="Your name" className="form-input"
                disabled={status === "sending"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">SENDER_EMAIL</label>
              <input
                type="email" id="email" name="email" required
                value={formState.email} onChange={handleChange}
                placeholder="your.email@domain.com" className="form-input"
                disabled={status === "sending"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">MESSAGE_BODY</label>
              <textarea
                id="message" name="message" required rows={5}
                value={formState.message} onChange={handleChange}
                placeholder="Describe your project, timeline, or query..."
                className="form-textarea" disabled={status === "sending"}
              />
            </div>

            <button
              type="submit"
              className="mono-btn contact-submit"
              disabled={status === "sending" || status === "sent"}
            >
              {status === "idle" && "SUBMIT_MESSAGE.bat"}
              {status === "sending" && "TRANSMITTING..."}
              {status === "sent" && "TRANSMISSION_SUCCESSFUL.log"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
