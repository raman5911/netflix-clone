import React from "react";

function Footer() {
  return (
    <div className="section footer">
      <p>
        Questions? Call{" "}
        <span
          style={{
            textDecoration: "underline",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          000-800-919-1694
        </span>
      </p>

      <div className="footer_links">
        <a href="/help" className="footer_link">
          FAQ
        </a>
        <a href="/privacy" className="footer_link">
          Privacy
        </a>
        <a href="/legal-notices" className="footer_link">
          Legal Notices
        </a>
        <a href="/terms-of-use" className="footer_link">
          Terms of Use
        </a>
      </div>

      <p>Netflix India</p>
    </div>
  );
}

export default Footer;
