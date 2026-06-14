"use client";

import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionNum}>[01]</span>
          <h2 className={styles.title}>ABOUT_ME.md</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.textCol}>
            <h3 className={styles.subtitle}>
              I build intelligent software that connects advanced AI agents with robust web architectures.
            </h3>
            <p className={styles.paragraph}>
              As a Software Engineer, I focus on the intersection of AI Engineering and Full-Stack Development. I specialize in designing and implementing autonomous **Agentic AI** frameworks that can reason, invoke external tools, and collaborate to solve complex operational challenges.
            </p>
            <p className={styles.paragraph}>
              My expertise includes architecting high-performance **RAG (Retrieval-Augmented Generation)** systems. I optimize document parsing, embedding pipelines, chunking strategies, and hybrid search methods to deliver context-aware, low-latency, and grounded responses from unstructured enterprise data.
            </p>
            <p className={styles.paragraph}>
              On the web side, I assemble responsive and visually stunning frontend interfaces using Next.js and React, backed by scalable APIs built in FastAPI and Node.js. I believe in writing type-safe, maintainable, and highly optimized code from backend database layers up to the user interface.
            </p>
          </div>

          <div className={styles.infoCol}>
            <div className={styles.infoCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardTitle}>ENGINEERING_PRINCIPLES</span>
              </div>
              <ul className={styles.principlesList}>
                <li className={styles.principleItem}>
                  <strong>Autonomy First:</strong> Creating agentic systems with robust control loops, tool validation, and state recovery.
                </li>
                <li className={styles.principleItem}>
                  <strong>Grounded Generation:</strong> Minimizing LLM hallucinations by building dense/sparse hybrid RAG search vectors.
                </li>
                <li className={styles.principleItem}>
                  <strong>Performance & Types:</strong> Enforcing strong typing (TypeScript/Python Type Hints) and minimal client bundle sizes.
                </li>
                <li className={styles.principleItem}>
                  <strong>Aesthetic Simplicity:</strong> Crafting high-contrast, lightning-fast layouts that value functional layout over clutter.
                </li>
              </ul>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statBox}>
                <span className={styles.statNum}>99%</span>
                <span className={styles.statLabel}>RAG ACCURACY</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}>100ms</span>
                <span className={styles.statLabel}>AVG LATENCY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
