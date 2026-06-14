"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.tag}>
          <span className={styles.tagDot}></span>
          <span className={styles.tagText}>PORTFOLIO_SYSTEM_v1.6_ONLINE</span>
        </div>

        <h1 className={styles.title}>
          BHAGYESH
          <br />
          SUNIL CHAUDHARI
        </h1>

        <h2 className={styles.subtitle}>
          SOFTWARE ENGINEER &bull; AI / AGENTIC AI &bull; RAG &bull; FULL-STACK
        </h2>

        <p className={styles.description}>
          Engineering autonomous AI agent environments, vector-retrieval (RAG)
          pipelines, and high-performance full-stack web applications. Bridging
          the gap between advanced language model intelligence and production software.
        </p>

        <div className={styles.actions}>
          <a href="#assistant" className="mono-btn">
            RUN RAG_AGENT.sh
          </a>
          <a href="#projects" className={`${styles.secBtn} mono-btn`}>
            VIEW_PROJECTS.log
          </a>
        </div>
      </div>

      {/* Technical Dashboard/Telemetry Sidebar (Premium B&W aesthetic) */}
      <div className={styles.dashboard}>
        <div className={styles.dashHeader}>
          <span className={styles.dashTitle}>SYSTEM_TELEMETRY</span>
          <div className={styles.dashControls}>
            <span className={styles.dashDot}></span>
            <span className={styles.dashDot}></span>
            <span className={styles.dashDot}></span>
          </div>
        </div>
        <div className={styles.dashContent}>
          <div className={styles.dashRow}>
            <span className={styles.dashKey}>ENGINEER:</span>
            <span className={styles.dashVal}>BHAGYESH S. CHAUDHARI</span>
          </div>
          <div className={styles.dashRow}>
            <span className={styles.dashKey}>ROLE:</span>
            <span className={styles.dashVal}>SOFTWARE ENGINEER (AI)</span>
          </div>
          <div className={styles.dashRow}>
            <span className={styles.dashKey}>STACK:</span>
            <span className={styles.dashVal}>TS, PY, NEXT.JS, FASTAPI</span>
          </div>
          <div className={styles.dashRow}>
            <span className={styles.dashKey}>CORE:</span>
            <span className={styles.dashVal}>AGENTIC AGENTS, VECTOR DBs, RAG</span>
          </div>
          <div className={styles.dashRow}>
            <span className={styles.dashKey}>STATUS:</span>
            <span className={styles.dashVal}>
              <span className={styles.pulseDot}></span> READY_TO_DEPLOY
            </span>
          </div>
          <div className={styles.dashDivider}></div>
          <div className={styles.dashCodeBlock}>
            <code>
              $ query_vector_store --top_k 3
              <br />
              &gt; Fetching matches for "Bhagyesh"...
              <br />
              &gt; [Match 1] AI & Agentic AI (Score: 0.99)
              <br />
              &gt; [Match 2] RAG Architectures (Score: 0.98)
              <br />
              &gt; [Match 3] Full Stack Dev (Score: 0.95)
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
