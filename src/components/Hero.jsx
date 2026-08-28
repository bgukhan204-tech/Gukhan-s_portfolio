import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaBrain, FaArrowRight } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "7.5rem",
        paddingBottom: "4rem",
        position: "relative"
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          {/* Status Pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.45rem 1.2rem",
              background: "rgba(123, 97, 255, 0.12)",
              border: "1px solid rgba(123, 97, 255, 0.35)",
              borderRadius: "9999px",
              color: "#a78bfa",
              fontSize: "0.88rem",
              fontWeight: 700,
              marginBottom: "1.75rem"
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#7b61ff",
                boxShadow: "0 0 10px #7b61ff"
              }}
            />
            Available for Full-Time & Internship Opportunities
          </div>

          <h1
            style={{
              fontSize: "4rem",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "1.25rem",
              letterSpacing: "-0.03em",
              color: "#ffffff"
            }}
            className="hero-heading"
          >
            Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
          </h1>

          <h2
            style={{
              fontSize: "1.45rem",
              fontWeight: 700,
              color: "#a78bfa",
              marginBottom: "1.5rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem"
            }}
          >
            <FaBrain style={{ color: "#7b61ff" }} />
            {personalInfo.title}
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              color: "#b3afcc",
              maxWidth: "680px",
              marginBottom: "2.5rem",
              lineHeight: 1.75
            }}
          >
            {personalInfo.objective}
          </p>

          {/* Quick Highlight Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.25rem",
              width: "100%",
              maxWidth: "680px",
              marginBottom: "2.5rem"
            }}
            className="hero-stats"
          >
            <div
              className="glass-card"
              style={{
                padding: "1.25rem",
                textAlign: "center"
              }}
            >
              <div style={{ fontSize: "1.65rem", fontWeight: 800, color: "#7b61ff", marginBottom: "0.2rem" }}>
                8.2
              </div>
              <div style={{ fontSize: "0.82rem", color: "#7e7a9c", fontWeight: 600 }}>
                CGPA (Till 7th Sem)
              </div>
            </div>

            <div
              className="glass-card"
              style={{
                padding: "1.25rem",
                textAlign: "center"
              }}
            >
              <div style={{ fontSize: "1.65rem", fontWeight: 800, color: "#c4b5fd", marginBottom: "0.2rem" }}>
                AI & Web
              </div>
              <div style={{ fontSize: "0.82rem", color: "#7e7a9c", fontWeight: 600 }}>
                Core Focus
              </div>
            </div>

            <div
              className="glass-card"
              style={{
                padding: "1.25rem",
                textAlign: "center"
              }}
            >
              <div style={{ fontSize: "1.65rem", fontWeight: 800, color: "#38bdf8", marginBottom: "0.2rem" }}>
                2026
              </div>
              <div style={{ fontSize: "0.82rem", color: "#7e7a9c", fontWeight: 600 }}>
                Graduation Year
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div
            style={{
              display: "flex",
              gap: "1.25rem",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "2.5rem"
            }}
          >
            <a href="#projects" className="btn btn-primary">
              Explore Projects <FaArrowRight />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <span style={{ color: "#7e7a9c", fontSize: "0.88rem", fontWeight: 700 }}>
              CONNECT WITH ME:
            </span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#b3afcc",
                fontSize: "1.4rem",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "#b3afcc")}
            >
              <FaGithub />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#b3afcc",
                fontSize: "1.4rem",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => (e.target.style.color = "#7b61ff")}
              onMouseLeave={(e) => (e.target.style.color = "#b3afcc")}
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              style={{
                color: "#b3afcc",
                fontSize: "1.4rem",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => (e.target.style.color = "#c4b5fd")}
              onMouseLeave={(e) => (e.target.style.color = "#b3afcc")}
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-heading { font-size: 2.75rem !important; }
          .hero-stats { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
