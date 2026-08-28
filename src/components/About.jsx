import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLightbulb, FaBuilding } from "react-icons/fa";
import { personalInfo, education } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="section" style={{ background: "rgba(13, 10, 24, 0.6)" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">About Me</span>
          <h2 className="section-title">Background & Academic Journey</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "2.5rem",
            alignItems: "stretch"
          }}
          className="about-grid"
        >
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card"
            style={{ padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    background: "rgba(123, 97, 255, 0.15)",
                    border: "1px solid rgba(123, 97, 255, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#a78bfa",
                    fontSize: "1.25rem"
                  }}
                >
                  <FaLightbulb />
                </div>
                <h3 style={{ fontSize: "1.45rem", fontWeight: 700, color: "#ffffff" }}>Passionate AI & Web Developer</h3>
              </div>

              <p style={{ color: "#b3afcc", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "1.5rem" }}>
                I am a dedicated <strong style={{ color: "#ffffff" }}>Artificial Intelligence and Data Science</strong> engineering student at V.S.B College of Engineering Technical Campus. My ambition lies at the intersection of modern full-stack web architecture and intelligent AI solutions.
              </p>

              <p style={{ color: "#7e7a9c", lineHeight: 1.7, fontSize: "0.98rem", marginBottom: "1.5rem" }}>
                Whether it's building secure enterprise backends with Java Spring Boot & JWT, crafting sleek React user interfaces, or training deep neural networks with TensorFlow to detect synthetic deepfakes, I enjoy tackling complex engineering problems with clean code.
              </p>
            </div>

            {/* Core Pillars */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "1rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)"
              }}
              className="pillars-grid"
            >
              <div>
                <div style={{ color: "#7b61ff", fontWeight: 700, fontSize: "1.05rem" }}>Problem Solver</div>
                <div style={{ color: "#7e7a9c", fontSize: "0.85rem" }}>Analytical thinking</div>
              </div>
              <div>
                <div style={{ color: "#c4b5fd", fontWeight: 700, fontSize: "1.05rem" }}>Full-Stack</div>
                <div style={{ color: "#7e7a9c", fontSize: "0.85rem" }}>End-to-end web apps</div>
              </div>
              <div>
                <div style={{ color: "#38bdf8", fontWeight: 700, fontSize: "1.05rem" }}>AI & Data</div>
                <div style={{ color: "#7e7a9c", fontSize: "0.85rem" }}>TensorFlow & ML</div>
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card"
            style={{
              padding: "2.5rem",
              background: "linear-gradient(145deg, rgba(123, 97, 255, 0.08), rgba(25, 22, 39, 0.95))"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: "rgba(123, 97, 255, 0.18)",
                  border: "1px solid rgba(123, 97, 255, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#c4b5fd",
                  fontSize: "1.25rem"
                }}
              >
                <FaGraduationCap />
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#ffffff" }}>Education</h3>
            </div>

            {education.map((edu, index) => (
              <div key={index}>
                <div
                  style={{
                    display: "inline-block",
                    padding: "0.25rem 0.75rem",
                    background: "rgba(123, 97, 255, 0.15)",
                    color: "#a78bfa",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    borderRadius: "6px",
                    marginBottom: "0.75rem"
                  }}
                >
                  {edu.duration}
                </div>

                <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.4rem" }}>
                  {edu.degree}
                </h4>

                <p style={{ color: "#b3afcc", fontSize: "0.92rem", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <FaBuilding style={{ color: "#7e7a9c" }} /> {edu.institution}
                </p>

                <div
                  style={{
                    padding: "0.85rem 1rem",
                    background: "rgba(255, 255, 255, 0.04)",
                    borderRadius: "10px",
                    border: "1px solid rgba(255, 255, 255, 0.07)",
                    marginBottom: "1.25rem"
                  }}
                >
                  <span style={{ color: "#b3afcc", fontSize: "0.9rem" }}>Academic Performance: </span>
                  <span style={{ color: "#38bdf8", fontWeight: 800, fontSize: "1.05rem" }}>
                    CGPA {edu.cgpa}
                  </span>
                </div>

                <ul style={{ paddingLeft: "1.2rem", color: "#7e7a9c", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  {edu.highlights.map((item, i) => (
                    <li key={i} style={{ marginBottom: "0.5rem" }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 576px) {
          .pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
