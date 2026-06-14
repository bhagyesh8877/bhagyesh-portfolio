"use client";

import styles from "./Expertise.module.css";

const expertiseAreas = [
  {
    num: "01",
    title: "AGENTIC_AI",
    description: "Designing autonomous, multi-agent networks that reason, execute actions, and achieve objectives.",
    skills: [
      "LangGraph / LangChain",
      "CrewAI / AutoGen",
      "State Machines & Workflows",
      "Tool Calling & Function Execution",
      "Human-in-the-loop Workflows",
      "Agent Evaluation & Tracing",
    ],
  },
  {
    num: "02",
    title: "RAG_ARCHITECTURES",
    description: "Building production-grade retrieval pipelines connecting unstructured data to large language models.",
    skills: [
      "Vector Stores (Pinecone, Qdrant, pgvector)",
      "Hybrid Search (Dense + Sparse/BM25)",
      "Chunking Strategies (Semantic, Recursive)",
      "Re-ranking Models (Cohere, Cross-Encoders)",
      "LlamaIndex / LangChain RAG",
      "Evaluation (Ragas, TruLens)",
    ],
  },
  {
    num: "03",
    title: "FULL_STACK_DEV",
    description: "Creating premium, high-speed interfaces and type-safe backend APIs that handle data seamlessly.",
    skills: [
      "Next.js / React / TypeScript",
      "FastAPI / Python / Node.js",
      "PostgreSQL / MongoDB / Redis",
      "RESTful & GraphQL APIs",
      "TailwindCSS / CSS Modules",
      "ORM (Prisma, SQLAlchemy, Mongoose)",
    ],
  },
  {
    num: "04",
    title: "CORE_ENGINEERING",
    description: "Enforcing clean architecture, testing strategies, CI/CD integrations, and containerized deployments.",
    skills: [
      "Docker / Containerization",
      "Git / Version Control / GitHub Actions",
      "Linux / Shell Scripting",
      "AWS / GCP Services",
      "API Testing (Pytest, Jest)",
      "Performance Benchmarking",
    ],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className={styles.expertise}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionNum}>[02]</span>
          <h2 className={styles.title}>EXPERTISE_MATRIX.log</h2>
        </div>

        <div className={styles.grid}>
          {expertiseAreas.map((area, index) => (
            <div key={index} className={`${styles.card} glow-hover`}>
              <div className={styles.cardTop}>
                <span className={styles.cardNum}>[{area.num}]</span>
                <h3 className={styles.cardTitle}>{area.title}</h3>
              </div>
              <p className={styles.cardDesc}>{area.description}</p>
              <div className={styles.divider}></div>
              <div className={styles.skillsWrapper}>
                <span className={styles.skillsTitle}>TECH_STACK:</span>
                <ul className={styles.skillsList}>
                  {area.skills.map((skill, sIndex) => (
                    <li key={sIndex} className={styles.skillItem}>
                      <span className={styles.itemDot}>&bull;</span> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
