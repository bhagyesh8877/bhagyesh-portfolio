"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== "idle") return;

    setStatus("sending");
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("sent");
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionNum}>[05]</span>
          <h2 className={styles.title}>CONNECT.sh</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <h3 className={styles.subtitle}>Let's build something intelligent.</h3>
            <p className={styles.description}>
              I'm open to full-time opportunities, consulting engagements, or
              collaborations regarding Agentic AI workflows, vector search architectures,
              and modern full-stack web builds.
            </p>

            <div className={styles.links}>
              <div className={styles.linkItem}>
                <span className={styles.linkLabel}>EMAIL:</span>
                <a href="mailto:bhagyesh.chaudhari@example.com" className={styles.linkVal}>
                  bhagyesh.chaudhari@example.com
                </a>
              </div>
              <div className={styles.linkItem}>
                <span className={styles.linkLabel}>GITHUB:</span>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkVal}
                >
                  github.com/bhagyesh-chaudhari
                </a>
              </div>
              <div className={styles.linkItem}>
                <span className={styles.linkLabel}>LINKEDIN:</span>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkVal}
                >
                  linkedin.com/in/bhagyesh-chaudhari
                </a>
              </div>
            </div>
          </div>

          <div className={styles.formCol}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  SENDER_NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={styles.input}
                  disabled={status === "sending"}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  SENDER_EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="your.email@domain.com"
                  className={styles.input}
                  disabled={status === "sending"}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  MESSAGE_BODY
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Describe your project, timeline, or query..."
                  className={styles.textarea}
                  disabled={status === "sending"}
                />
              </div>

              <button
                type="submit"
                className={`${styles.submitBtn} mono-btn`}
                disabled={status === "sending" || status === "sent"}
              >
                {status === "idle" && "SUBMIT_MESSAGE.bat"}
                {status === "sending" && "TRANSMITTING..."}
                {status === "sent" && "TRANSMISSION_SUCCESSFUL.log"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
