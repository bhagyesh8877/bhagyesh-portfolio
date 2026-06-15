"use client";

import Reveal from "./Reveal";

const principles = [
  { title: "Autonomy First:", body: "Creating agentic systems with robust control loops, tool validation, and state recovery." },
  { title: "Grounded Generation:", body: "Minimizing LLM hallucinations by building dense/sparse hybrid RAG search vectors." },
  { title: "Performance & Types:", body: "Enforcing strong typing (TypeScript/Python Type Hints) and minimal client bundle sizes." },
  { title: "Aesthetic Simplicity:", body: "Crafting high-contrast, lightning-fast layouts that value functional layout over clutter." },
];

export default function About() {
  return (
    <section id="about" className="section-container">
      <Reveal>
        <div className="section-header">
          <span className="section-num">[01]</span>
          <h2 className="section-title">ABOUT_ME.md</h2>
        </div>
      </Reveal>

      <div className="about-grid">
        {/* Text Column */}
        <Reveal delay={100}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h3 className="about-subtitle">
              I build intelligent software that connects advanced AI agents with robust web architectures.
            </h3>
            <p className="about-para">
              As a Software Engineer, I focus on the intersection of AI Engineering and Full-Stack Development.
              I specialize in designing and implementing autonomous <strong>Agentic AI</strong> frameworks that
              can reason, invoke external tools, and collaborate to solve complex operational challenges.
            </p>
            <p className="about-para">
              My expertise includes architecting high-performance <strong>RAG (Retrieval-Augmented Generation)</strong> systems.
              I optimize document parsing, embedding pipelines, chunking strategies, and hybrid search methods to deliver
              context-aware, low-latency, and grounded responses from unstructured enterprise data.
            </p>
            <p className="about-para">
              On the web side, I assemble responsive and visually stunning frontend interfaces using Next.js and React,
              backed by scalable APIs built in FastAPI and Node.js. I believe in writing type-safe, maintainable,
              and highly optimized code from backend database layers up to the user interface.
            </p>
          </div>
        </Reveal>

        {/* Info Column */}
        <Reveal delay={300}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div className="info-card">
              <div className="info-card-header">
                <span className="info-card-title">ENGINEERING_PRINCIPLES</span>
              </div>
              <ul className="principles-list">
                {principles.map(({ title, body }) => (
                  <li key={title} className="principle-item">
                    <strong>{title} </strong>
                    {body}
                  </li>
                ))}
              </ul>
            </div>

            <div className="stats-grid">
              <div className="stat-box">
                <span className="stat-num">99%</span>
                <span className="stat-label">RAG ACCURACY</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">100ms</span>
                <span className="stat-label">AVG LATENCY</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
