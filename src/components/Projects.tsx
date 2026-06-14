"use client";

import styles from "./Projects.module.css";

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

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionNum}>[03]</span>
          <h2 className={styles.title}>PROJECT_REPOSITORIES.db</h2>
        </div>

        <div className={styles.list}>
          {projectsList.map((project, index) => (
            <div key={index} className={styles.projectItem}>
              <div className={styles.projectNum}>[{project.num}]</div>
              <div className={styles.projectMain}>
                <div className={styles.projectHeader}>
                  <span className={styles.category}>{project.category}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.map((t, tIndex) => (
                    <span key={tIndex} className={styles.techTag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.links}>
                <a href={project.gitLink} className="mono-btn">
                  VIEW_CODE.git
                </a>
                <a href={project.liveLink} className={`${styles.secBtn} mono-btn`}>
                  LAUNCH_LIVE.sh
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
