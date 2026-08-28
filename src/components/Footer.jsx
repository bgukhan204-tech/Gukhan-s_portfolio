import React from "react";
import { FaArrowUp, FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        padding: "3rem 0 2rem",
        background: "#0b0915"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          textAlign: "center"
        }}
      >
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "rgba(123, 97, 255, 0.15)",
            border: "1px solid rgba(123, 97, 255, 0.3)",
            color: "#a78bfa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "1.1rem",
            transition: "all 0.3s ease"
          }}
        >
          <FaArrowUp />
        </button>

        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#b3afcc", fontSize: "1.25rem", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
            onMouseLeave={(e) => (e.target.style.color = "#b3afcc")}
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#b3afcc", fontSize: "1.25rem", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.target.style.color = "#7b61ff")}
            onMouseLeave={(e) => (e.target.style.color = "#b3afcc")}
          >
            <FaLinkedin />
          </a>
        </div>

        <p style={{ color: "#7e7a9c", fontSize: "0.88rem", fontWeight: 500 }}>
          © {new Date().getFullYear()} Gukhan B. Built with React, Vite & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
