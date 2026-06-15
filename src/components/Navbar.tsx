"use client";

import { useState } from "react";
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

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

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
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
