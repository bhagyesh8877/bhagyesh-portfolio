"use client";

import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Left: Content */}
      <Reveal delay={100}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            <span className="hero-tag-text">PORTFOLIO_SYSTEM_v1.6_ONLINE</span>
          </div>

          <h1 className="hero-title">
            BHAGYESH<br />SUNIL CHAUDHARI
          </h1>

          <h2 className="hero-subtitle">
            SOFTWARE ENGINEER &bull; AI / AGENTIC AI &bull; RAG &bull; FULL-STACK
          </h2>

          <p className="hero-desc">
            Engineering autonomous AI agent environments, vector-retrieval (RAG)
            pipelines, and high-performance full-stack web applications. Bridging
            the gap between advanced language model intelligence and production software.
          </p>

          <div className="hero-actions">
            <a href="#assistant" className="mono-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "0.5rem", display: "inline-block", verticalAlign: "-0.125em" }}>
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>
              RUN RAG_AGENT.sh
            </a>
            <a href="#projects" className="mono-btn sec-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "0.5rem", display: "inline-block", verticalAlign: "-0.125em" }}>
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              VIEW_PROJECTS.log
            </a>
          </div>
        </div>
      </Reveal>

      {/* Right: System Telemetry Dashboard */}
      <Reveal delay={300}>
        <div className="hero-dashboard">
          <div className="dash-header">
            <span className="dash-title">SYSTEM_TELEMETRY</span>
            <div className="dash-controls">
              <span className="dash-dot" />
              <span className="dash-dot" />
              <span className="dash-dot" />
            </div>
          </div>
          <div className="dash-body">
            {[
              { k: "ENGINEER:", v: "BHAGYESH S. CHAUDHARI" },
              { k: "ROLE:", v: "SOFTWARE ENGINEER (AI)" },
              { k: "STACK:", v: "TS, PY, NEXT.JS, FASTAPI" },
              { k: "CORE:", v: "AGENTIC AGENTS, VECTOR DBs, RAG" },
            ].map(({ k, v }) => (
              <div key={k} className="dash-row">
                <span className="dash-key">{k}</span>
                <span className="dash-val">{v}</span>
              </div>
            ))}
            <div className="dash-row">
              <span className="dash-key">STATUS:</span>
              <span className="dash-val">
                <span className="dash-pulse" />
                READY_TO_DEPLOY
              </span>
            </div>
            <div className="dash-divider" />
            <div className="dash-code">
              <code>
                $ query_vector_store --top_k 3<br />
                &gt; Fetching matches for &quot;Bhagyesh&quot;...<br />
                &gt; [Match 1] AI &amp; Agentic AI (Score: 0.99)<br />
                &gt; [Match 2] RAG Architectures (Score: 0.98)<br />
                &gt; [Match 3] Full Stack Dev (Score: 0.95)
              </code>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
