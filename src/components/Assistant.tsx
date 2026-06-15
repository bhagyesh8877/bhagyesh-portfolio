"use client";

import { useState, useRef, useEffect } from "react";
import Reveal from "./Reveal";

type LogType = "info" | "search" | "rag" | "llm";


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
      { text: ">> CHUNK_ID_883: 'Bhagyesh builds autonomous agent architectures using LangGraph and CrewAI...'", type: "rag" },
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
      { text: ">> CHUNK_ID_112: 'Expertise in building scalable RAG solutions...'", type: "rag" },
      { text: "Executing LLM generation with grounding constraints...", type: "llm" },
    ],
    final: "Bhagyesh's RAG expertise focuses on performance and reliability. He designs dense/sparse hybrid search indexes using Qdrant, Pinecone, and pgvector. He optimizes retrieval by using semantic recursive-character chunking, metadata filtering, and Cohere re-ranking models. To prevent hallucinations, he implements strict grounding checks, prompt compression, and conducts continuous pipeline evaluations using frameworks like Ragas.",
  },
  tech: {
    logs: [
      { text: "$ RAG_LOADER --query='Full Stack Web Technologies'", type: "info" },
      { text: "Searching knowledge base for stack items...", type: "search" },
      { text: "Retrieving matching nodes...", type: "rag" },
      { text: ">> CHUNK_ID_452: 'Full-stack developer utilizing Next.js, React, and TypeScript...'", type: "rag" },
      { text: "Synthesizing response...", type: "llm" },
    ],
    final: "Bhagyesh builds scalable web platforms. His frontend stack centers around Next.js, React, and TypeScript, utilizing TailwindCSS or Vanilla CSS modules. On the backend, he writes high-performance asynchronous APIs using Python's FastAPI and Node.js. For database systems, he works with PostgreSQL (with Prisma or SQLAlchemy), MongoDB, and Redis caching layers, deploying his applications in containerized Docker environments.",
  },
  principles: {
    logs: [
      { text: "$ RAG_LOADER --query='Engineering principles and values'", type: "info" },
      { text: "Searching metadata fields...", type: "search" },
      { text: ">> CHUNK_ID_009: 'Values: strong typing, modularity, auto-validation of LLM outputs...'", type: "rag" },
      { text: "Formulating summary...", type: "llm" },
    ],
    final: "Bhagyesh's engineering philosophy centers on quality and speed. He advocates for strictly typed, modular codebases (using TypeScript and typed Python). When integrating LLMs, he builds strict guardrails like output validation and rate-limiting. He prioritizes UI performance, implementing optimal Next.js caching, minimal hydration scripts, and clean, high-contrast, clutter-free designs.",
  },
};

function getLogClass(type: LogType) {
  if (type === "search") return "log-search";
  if (type === "rag") return "log-rag";
  if (type === "llm") return "log-llm";
  return "log-info";
}

function getLogSymbol(type: LogType) {
  if (type === "rag") return "[RAG]";
  if (type === "llm") return "[LLM]";
  if (type === "search") return "[SRC]";
  return "[SYS]";
}

export default function Assistant() {
  const [inputQuery, setInputQuery] = useState("");
  const [logs, setLogs] = useState<LogEntry[]>([
    { text: "RAG_PORTFOLIO_AGENT version 1.6.0-stable", type: "info" },
    { text: "Vector databases connected: OK.", type: "info" },
    { text: "Enter a question or click a preset chip above to query my experience.", type: "info" },
  ]);
  const [finalResponse, setFinalResponse] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  // Scroll only the terminal body — NOT the page
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [logs, finalResponse]);

  const runRAGProcess = async (queryText: string) => {
    if (isTyping) return;
    setIsTyping(true);
    setFinalResponse("");

    const q = queryText.toLowerCase();
    let key = "ai";
    if (q.includes("rag") || q.includes("vector") || q.includes("retriev")) key = "rag";
    else if (q.includes("stack") || q.includes("tech") || q.includes("frontend") || q.includes("backend") || q.includes("web")) key = "tech";
    else if (q.includes("principle") || q.includes("value") || q.includes("philosophy") || q.includes("rule")) key = "principles";

    const data = RESPONSES[key];
    setLogs([{ text: `Executing query: "${queryText}"`, type: "info" }]);

    for (let i = 0; i < data.logs.length; i++) {
      await new Promise((r) => setTimeout(r, 350 + Math.random() * 200));
      setLogs((prev) => [...prev, data.logs[i]]);
    }

    await new Promise((r) => setTimeout(r, 500));

    const words = data.final.split(" ");
    let text = "";
    for (let i = 0; i < words.length; i++) {
      text += (i === 0 ? "" : " ") + words[i];
      setFinalResponse(text);
      await new Promise((r) => setTimeout(r, 25 + Math.random() * 20));
    }

    setIsTyping(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuery.trim() || isTyping) return;
    runRAGProcess(inputQuery);
    setInputQuery("");
  };

  return (
    <section id="assistant" className="section-container">
      <Reveal>
        <div className="section-header" style={{ marginBottom: "3rem" }}>
          <span className="section-num">[04]</span>
          <h2 className="section-title">RAG_AGENT_INTERFACE.sh</h2>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="preset-chips">
          {PRESETS.map((preset, i) => (
            <button
              key={i}
              className="preset-chip"
              onClick={() => runRAGProcess(preset.query)}
              disabled={isTyping}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="terminal" style={{ position: "relative", overflow: "hidden" }}>
          <div className="terminal-scanlines" />
          <div className="terminal-header">
            <div className="term-controls">
              <span className="term-dot" />
              <span className="term-dot" />
              <span className="term-dot" />
            </div>
            <span className="terminal-title-text">rag_vector_search_terminal.exe</span>
          </div>

          <div className="terminal-body" ref={terminalBodyRef}>
            {logs.map((log, i) => (
              <div key={i} className={`log-row ${getLogClass(log.type)}`}>
                <span className="log-symbol">{getLogSymbol(log.type)}</span>
                <span>{log.text}</span>
              </div>
            ))}

            {finalResponse && (
              <div className="response-container">
                <div className="response-label">[LLM_RESPONSE_OUTPUT]:</div>
                <div className="response-content">
                  {finalResponse}
                  {isTyping && <span className="cursor-blink">_</span>}
                </div>
              </div>
            )}

          </div>

          <form onSubmit={handleSubmit} className="terminal-form">
            <span className="prompt-symbol">$</span>
            <input
              type="text"
              className="terminal-input"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder={isTyping ? "Agent executing workflow..." : "Query portfolio database..."}
              disabled={isTyping}
              aria-label="Terminal query input"
            />
            <button
              type="submit"
              className="terminal-submit"
              disabled={isTyping || !inputQuery.trim()}
            >
              RUN
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
