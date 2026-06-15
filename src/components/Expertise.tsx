"use client";

const expertiseAreas = [
  {
    num: "01",
    title: "AGENTIC_AI",
    description: "Designing autonomous, multi-agent networks that reason, execute actions, and achieve objectives.",
    skills: ["LangGraph / LangChain", "CrewAI / AutoGen", "State Machines & Workflows", "Tool Calling & Function Execution", "Human-in-the-loop Workflows", "Agent Evaluation & Tracing"],
  },
  {
    num: "02",
    title: "RAG_ARCHITECTURES",
    description: "Building production-grade retrieval pipelines connecting unstructured data to large language models.",
    skills: ["Vector Stores (Pinecone, Qdrant, pgvector)", "Hybrid Search (Dense + Sparse/BM25)", "Chunking Strategies (Semantic, Recursive)", "Re-ranking Models (Cohere, Cross-Encoders)", "LlamaIndex / LangChain RAG", "Evaluation (Ragas, TruLens)"],
  },
  {
    num: "03",
    title: "FULL_STACK_DEV",
    description: "Creating premium, high-speed interfaces and type-safe backend APIs that handle data seamlessly.",
    skills: ["Next.js / React / TypeScript", "FastAPI / Python / Node.js", "PostgreSQL / MongoDB / Redis", "RESTful & GraphQL APIs", "TailwindCSS / CSS Modules", "ORM (Prisma, SQLAlchemy, Mongoose)"],
  },
  {
    num: "04",
    title: "CORE_ENGINEERING",
    description: "Enforcing clean architecture, testing strategies, CI/CD integrations, and containerized deployments.",
    skills: ["Docker / Containerization", "Git / Version Control / GitHub Actions", "Linux / Shell Scripting", "AWS / GCP Services", "API Testing (Pytest, Jest)", "Performance Benchmarking"],
  },
];

import Reveal from "./Reveal";

const getAreaIcon = (num: string) => {
  switch (num) {
    case "01":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      );
    case "02":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
          <path d="M19 19l-3-3" />
        </svg>
      );
    case "03":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case "04":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
          <line x1="20" y1="6" x2="20.01" y2="6" />
          <line x1="20" y1="18" x2="20.01" y2="18" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Expertise() {
  return (
    <section id="expertise" className="section-container">
      <Reveal>
        <div className="section-header">
          <span className="section-num">[02]</span>
          <h2 className="section-title">EXPERTISE_MATRIX.log</h2>
        </div>
      </Reveal>

      <div className="expertise-grid">
        {expertiseAreas.map((area, index) => (
          <Reveal key={area.num} delay={index * 100}>
            <div className="expertise-card">
              <div className="card-top">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="card-num">[{area.num}]</span>
                  <span style={{ color: "var(--accent)", opacity: 0.85 }}>{getAreaIcon(area.num)}</span>
                </div>
                <h3 className="card-title">{area.title}</h3>
              </div>
              <p className="card-desc">{area.description}</p>
              <div className="card-divider" />
              <div className="skills-wrapper">
                <span className="skills-title">TECH_STACK:</span>
                <ul className="skills-list">
                  {area.skills.map((skill) => (
                    <li key={skill} className="skill-item">
                      <span className="skill-dot">&bull;</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
