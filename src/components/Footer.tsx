"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-left">
          <span className="footer-copyright">&copy; {currentYear} BHAGYESH SUNIL CHAUDHARI.</span>
          <span className="footer-rights">ALL_RIGHTS_RESERVED.log</span>
        </div>
        <div className="footer-right">
          <span className="footer-status">
            [STATUS: <span className="footer-status-green">READY_TO_DEPLOY</span>]
          </span>
          <span className="footer-loc">[LOC: D:/BHAGYESH-PORTFOLIO]</span>
        </div>
      </div>
    </footer>
  );
}
