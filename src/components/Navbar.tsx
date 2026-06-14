"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#" className={styles.logo} onClick={closeMenu}>
          BHAGYESH
          <span className={styles.logoDot}>_</span>
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          className={`${styles.mobileToggle} ${isOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* Navigation Menu */}
        <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#about" className={styles.navLink} onClick={closeMenu}>
                <span className={styles.navNum}>[01]</span> ABOUT
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#expertise" className={styles.navLink} onClick={closeMenu}>
                <span className={styles.navNum}>[02]</span> EXPERTISE
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#projects" className={styles.navLink} onClick={closeMenu}>
                <span className={styles.navNum}>[03]</span> PROJECTS
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#assistant" className={styles.navLink} onClick={closeMenu}>
                <span className={styles.navNum}>[04]</span> RAG TERMINAL
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#contact" className={styles.navLink} onClick={closeMenu}>
                <span className={styles.navNum}>[05]</span> CONTACT
              </a>
            </li>
          </ul>
          <div className={styles.toggleWrapper}>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
