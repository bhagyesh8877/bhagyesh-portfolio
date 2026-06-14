"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.copyright}>
            &copy; {currentYear} BHAGYESH SUNIL CHAUDHARI.
          </span>
          <span className={styles.allRights}>
            ALL_RIGHTS_RESERVED.log
          </span>
        </div>
        <div className={styles.right}>
          <span className={styles.status}>
            [STATUS: <span className={styles.statusGreen}>READY_TO_DEPLOY</span>]
          </span>
          <span className={styles.loc}>
            [LOC: D:/BHAGYESH-PORTFOLIO]
          </span>
        </div>
      </div>
    </footer>
  );
}
