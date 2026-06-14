"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./Assistant.module.css";

type LogType = "info" | "search" | "rag" | "llm" | "output";

interface LogEntry {
  text: string;
  type: LogType;
}

const PRESETS = [
  { label: "AI & Agents", query: "Analyze Bhagyesh's AI and Agentic systems experience." },
  { label: "RAG & Vector", query: "Explain his Retrieval-Augmented Generation (RAG) setup." },
  { label: "Full Stack Tech", query: "What frontend and backend technologies does he build with?" },
  { label: "Core Principles", query: "What are his engineering core values?" },
];

const RESPONSES: Record<string, { logs: LogEntry[]; final: string }> = {
  ai: {
    logs: [
      { text: "$ RAG_LOADER --query='AI and Agentic systems'", type: "info" },
      { text: "Embedding query using text-embedding-3-small (1536 dimensions)...", type: "search" },
      { text: "Querying index 'bhagyesh-agent-portfolio' in Qdrant Vector DB...", type: "search" },
      { text: "Vector distance search complete. Top match found (Score: 0.988):", type: "rag" },
      { text: ">> CHUNK_ID_883: 'Bhagyesh builds autonomous agent architectures using LangGraph and CrewAI. Expert at creating state-based agentic workflows, function/tool calling execution loops, and structured output generators.'", type: "rag" },
      { text: "Passing chunks to LLM Context... Initializing system prompts.", type: "llm" },
      { text: "Model generating response based strictly on context...", type: "llm" },
    ],
    final: "Bhagyesh Sunil Chaudhari is highly experienced in Agentic AI. He architectures autonomous systems using LangGraph, CrewAI, and LangChain. Rather than simple linear chains, he builds cyclic state machine systems with robust tool-calling loops, error recovery paths, and structured JSON parsing. He integrates agent reasoning directly into web workflows, giving them the ability to search codebases, query external APIs, and execute actions with human-in-the-loop validation.",
  },
  rag: {
    logs: [
      { text: "$ RAG_LOADER --query='Retrieval-Augmented Generation (RAG)'", type: "info" },
      { text: "Embedding query...", type: "search" },
      { text: "Executing hybrid search (Dense: Qdrant cosine, Sparse: BM25/Lexical)...", type: "search" },
      { text: "Merging results with Reciprocal Rank Fusion (RRF)... Complete.", type: "rag" },
      { text: ">> CHUNK_ID_112: 'Expertise in building scalable RAG solutions. Focuses on advanced document ingestion, semantic hierarchical chunking, Cohere cross-encoder re-ranking, and evaluations using Ragas frameworks.'", type: "rag" },
      { text: "Executing LLM generation with grounding constraints...", type: "llm" },
    ],
    final: "Bhagyesh's RAG expertise focuses on performance and reliability. He designs dense/sparse hybrid search indexes using Qdrant, Pinecone, and pgvector. He optimizes retrieval by using semantic recursive-character chunking, metadata filtering, and Cohere re-ranking models. To prevent hallucinations, he implements strict grounding checks, prompt compression, and conducts continuous pipeline evaluations using frameworks like Ragas.",
  },
  tech: {
    logs: [
      { text: "$ RAG_LOADER --query='Full Stack Web Technologies'", type: "info" },
      { text: "Searching knowledge base for stack items...", type: "search" },
      { text: "Retrieving matching nodes...", type: "rag" },
      { text: ">> CHUNK_ID_452: 'Full-stack developer utilizing Next.js, React, and TypeScript on the frontend, alongside FastAPI, Python, and Node.js on the backend. Expert in DB setups in PostgreSQL and MongoDB.'", type: "rag" },
      { text: "Synthesizing response...", type: "llm" },
    ],
    final: "Bhagyesh builds scalable web platforms. His frontend stack centers around Next.js, React, and TypeScript, utilizing TailwindCSS or Vanilla CSS modules. On the backend, he writes high-performance asynchronous APIs using Python's FastAPI and Node.js. For database systems, he works with PostgreSQL (with Prisma or SQLAlchemy), MongoDB, and Redis caching layers, deploying his applications in containerized Docker environments.",
  },
  principles: {
    logs: [
      { text: "$ RAG_LOADER --query='Engineering principles and values'", type: "info" },
      { text: "Searching metadata fields...", type: "search" },
      { text: ">> CHUNK_ID_009: 'Values: strong typing, modularity, auto-validation of LLM outputs, low latency, and clean aesthetic layouts.'", type: "rag" },
      { text: "Formulating summary...", type: "llm" },
    ],
    final: "Bhagyesh's engineering philosophy centers on quality and speed. He advocates for strictly typed, modular codebases (using TypeScript and typed Python). When integrating LLMs, he builds strict guardrails like output validation and rate-limiting. He prioritizes UI performance, implementing optimal Next.js caching, minimal hydration scripts, and clean, high-contrast, clutter-free designs.",
  },
};

export default function Assistant() {
  const [inputQuery, setInputQuery] = useState("");
  const [logs, setLogs] = useState<LogEntry[]>([
    { text: "RAG_PORTFOLIO_AGENT version 1.6.0-stable", type: "info" },
    { text: "Vector databases connected: OK.", type: "info" },
    { text: "Enter a question or click a preset chip above to query my experience.", type: "info" },
  ]);
  const [finalResponse, setFinalResponse] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of logs
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs, finalResponse]);

  const runRAGProcess = async (queryText: string) => {
    if (isTyping) return;
    setIsTyping(true);
    setFinalResponse("");

    // Categorize query
    const lowerQuery = queryText.toLowerCase();
    let key = "ai";
    if (lowerQuery.includes("rag") || lowerQuery.includes("vector") || lowerQuery.includes("retriev")) {
      key = "rag";
    } else if (
      lowerQuery.includes("stack") ||
      lowerQuery.includes("tech") ||
      lowerQuery.includes("frontend") ||
      lowerQuery.includes("backend") ||
      lowerQuery.includes("web")
    ) {
      key = "tech";
    } else if (
      lowerQuery.includes("principle") ||
      lowerQuery.includes("value") ||
      lowerQuery.includes("philosophy") ||
      lowerQuery.includes("rule")
    ) {
      key = "principles";
    }

    const matchedData = RESPONSES[key];

    // Clear logs and print starting line
    setLogs([{ text: `Executing query: "${queryText}"`, type: "info" }]);

    // Print logs sequentially
    for (let i = 0; i < matchedData.logs.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 350 + Math.random() * 200));
      setLogs((prev) => [...prev, matchedData.logs[i]]);
    }

    // Small delay before LLM response
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Typing effect for final response
    const finalWords = matchedData.final.split(" ");
    let currentText = "";
    
    for (let wordIndex = 0; wordIndex < finalWords.length; wordIndex++) {
      currentText += (wordIndex === 0 ? "" : " ") + finalWords[wordIndex];
      setFinalResponse(currentText);
      await new Promise((resolve) => setTimeout(resolve, 25 + Math.random() * 20));
    }

    setIsTyping(false);
  };

  const handlePresetClick = (queryText: string) => {
    if (isTyping) return;
    runRAGProcess(queryText);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuery.trim() || isTyping) return;
    runRAGProcess(inputQuery);
    setInputQuery("");
  };

  return (
    <section id="assistant" className={styles.assistant}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionNum}>[04]</span>
          <h2 className={styles.title}>RAG_AGENT_INTERFACE.sh</h2>
        </div>

        {/* Preset Prompt Chips */}
        <div className={styles.presets}>
          {PRESETS.map((preset, index) => (
            <button
              key={index}
              className={styles.presetChip}
              onClick={() => handlePresetClick(preset.query)}
              disabled={isTyping}
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* Terminal Screen */}
        <div className={styles.terminal}>
          <div className={styles.terminalHeader}>
            <div className={styles.termControls}>
              <span className={styles.termDot}></span>
              <span className={styles.termDot}></span>
              <span className={styles.termDot}></span>
            </div>
            <span className={styles.terminalTitle}>rag_vector_search_terminal.exe</span>
          </div>

          <div className={styles.terminalBody}>
            {logs.map((log, index) => {
              let classType = styles.logInfo;
              if (log.type === "search") classType = styles.logSearch;
              if (log.type === "rag") classType = styles.logRag;
              if (log.type === "llm") classType = styles.logLlm;

              return (
                <div key={index} className={`${styles.logRow} ${classType}`}>
                  <span className={styles.logSymbol}>
                    {log.type === "info" ? "[SYS]" : log.type === "rag" ? "[RAG]" : log.type === "llm" ? "[LLM]" : "[SRC]"}
                  </span>{" "}
                  {log.text}
                </div>
              );
            })}

            {finalResponse && (
              <div className={styles.responseContainer}>
                <div className={styles.responseLabel}>[LLM_RESPONSE_OUTPUT]:</div>
                <div className={styles.responseContent}>
                  {finalResponse}
                  {isTyping && <span className="cursor-blink">_</span>}
                </div>
              </div>
            )}

            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input */}
          <form onSubmit={handleSubmit} className={styles.terminalForm}>
            <span className={styles.promptSymbol}>$</span>
            <input
              type="text"
              className={styles.terminalInput}
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder={isTyping ? "Agent executing workflow..." : "Query portfolio database..."}
              disabled={isTyping}
              aria-label="Terminal query input"
            />
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isTyping || !inputQuery.trim()}
            >
              RUN
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
