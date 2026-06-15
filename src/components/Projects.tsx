"use client";

const projectsList = [
  {
    num: "01",
    title: "AETHER_AGENT_SYSTEM",
    category: "AGENTIC_AI / AUTONOMOUS WORKFLOWS",
    description: "An autonomous multi-agent task orchestrator designed to analyze code repositories, run test suites, and write pull requests. Leverages LangGraph for hierarchical state management and CrewAI for role-based agents.",
    tech: ["Python", "LangGraph", "CrewAI", "FastAPI", "Docker", "Pytest"],
    gitLink: "#",
    liveLink: "#",
  },
  {
    num: "02",
    title: "OMNI_RAG_SEARCH_ENGINE",
    category: "RAG / VECTOR INFRASTRUCTURE",
    description: "Enterprise semantic search and retrieval engine. Implements custom recursive-paragraph chunking, sparse/dense hybrid indexing via Qdrant & BM25, and Cohere re-ranking to yield 98%+ relevant context for generation.",
    tech: ["TypeScript", "Next.js", "Qdrant", "OpenAI API", "HuggingFace", "Ragas"],
    gitLink: "#",
    liveLink: "#",
  },
  {
    num: "03",
    title: "NEXUS_SAAS_DASHBOARD",
    category: "FULL_STACK_WEB / TELEMETRY",
    description: "Real-time infrastructure and operations dashboard. Features dynamic charts, automated workflow triggers, multi-tenant RBAC permissions, and an API built on FastAPI. Deployed with CI/CD and containerized.",
    tech: ["Next.js 16", "TypeScript", "FastAPI", "PostgreSQL", "TailwindCSS", "Docker"],
    gitLink: "#",
    liveLink: "#",
  },
];

import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <Reveal>
        <div className="section-header">
          <span className="section-num">[03]</span>
          <h2 className="section-title">PROJECT_REPOSITORIES.db</h2>
        </div>
      </Reveal>

      <div className="projects-list">
        {projectsList.map((project, index) => (
          <Reveal key={project.num} delay={index * 150}>
            <div className="project-item">
              <div className="project-num">[{project.num}]</div>

              <div className="project-main">
                <div className="project-header">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <p className="project-desc">{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                <a href={project.gitLink} className="mono-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "0.4rem", display: "inline-block", verticalAlign: "-0.125em" }}>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  VIEW_CODE.git
                </a>
                <a href={project.liveLink} className="mono-btn sec-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "0.4rem", display: "inline-block", verticalAlign: "-0.125em" }}>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  LAUNCH_LIVE.sh
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
