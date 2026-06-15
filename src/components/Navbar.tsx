"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { num: "[01]", label: "ABOUT", href: "#about" },
  { num: "[02]", label: "EXPERTISE", href: "#expertise" },
  { num: "[03]", label: "PROJECTS", href: "#projects" },
  { num: "[04]", label: "RAG TERMINAL", href: "#assistant" },
  { num: "[05]", label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeString, setTimeString] = useState<string>("");

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      
      const now = new Date();
      setTimeString(now.toLocaleString("en-US", options) + " IST");
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#" className="navbar-logo" onClick={closeMenu}>
          BHAGYESH<span className="cursor-blink">_</span>
        </a>

        {/* Hamburger (mobile only) */}
        <button
          className={`hamburger${isOpen ? " open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link" onClick={closeMenu}>
                  <span className="nav-num">{link.num}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {timeString && (
            <span className="navbar-time" style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.8125rem",
              color: "var(--subtext)",
              marginRight: "1.5rem",
              padding: "0.25rem 0.5rem",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              backgroundColor: "var(--card-bg)"
            }}>
              {timeString}
            </span>
          )}
          <ThemeToggle />
        </nav>

        {/* Mobile Nav Overlay */}
        <nav className={`nav-mobile${isOpen ? " open" : ""}`}>
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link" onClick={closeMenu}>
                  <span className="nav-num">{link.num}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {timeString && (
            <div className="navbar-time-mobile" style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.875rem",
              color: "var(--subtext)",
              marginBottom: "1.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              backgroundColor: "var(--card-bg)",
              textAlign: "center"
            }}>
              {timeString}
            </div>
          )}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
