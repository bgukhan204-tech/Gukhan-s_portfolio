import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTimes } from "react-icons/fa";
import { projects } from "../data/portfolioData";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section" style={{ background: "rgba(13, 10, 24, 0.6)" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Featured Work</span>
          <h2 className="section-title">Projects & Applications</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "2rem"
          }}
        >
          {projects.map((proj, index) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "2rem"
              }}
            >
              <div>
                {/* Category Header */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <span
                    style={{
                      padding: "0.25rem 0.75rem",
                      background: "rgba(123, 97, 255, 0.15)",
                      color: "#a78bfa",
                      border: "1px solid rgba(123, 97, 255, 0.3)",
                      borderRadius: "6px",
                      fontSize: "0.8rem",
                      fontWeight: 700
                    }}
                  >
                    {proj.category}
                  </span>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#7e7a9c", fontSize: "1.15rem", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
                      onMouseLeave={(e) => (e.target.style.color = "#7e7a9c")}
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>

                <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem" }}>
                  {proj.title}
                </h3>

                <p style={{ color: "#b3afcc", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  {proj.shortDesc}
                </p>

                {/* Metrics */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.75rem",
                    padding: "0.85rem",
                    background: "rgba(255, 255, 255, 0.03)",
                    borderRadius: "10px",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    marginBottom: "1.5rem"
                  }}
                >
                  {proj.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div style={{ fontSize: "0.75rem", color: "#7e7a9c" }}>{m.label}</div>
                      <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#f3f2f8" }}>{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.75rem" }}>
                  {proj.tags.map((t, idx) => (
                    <span key={idx} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedProject(proj)}
                className="btn btn-secondary"
                style={{ width: "100%", justifyContent: "center", fontSize: "0.9rem" }}
              >
                View Full Details & Architecture
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              background: "rgba(10, 8, 20, 0.8)",
              backdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem"
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card"
              style={{
                maxWidth: "680px",
                width: "100%",
                padding: "2.5rem",
                position: "relative",
                background: "#171426",
                border: "1px solid rgba(123, 97, 255, 0.35)",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.6)"
              }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  right: "1.25rem",
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "none",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#b3afcc",
                  fontSize: "1rem",
                  cursor: "pointer"
                }}
              >
                <FaTimes />
              </button>

              <span
                style={{
                  padding: "0.25rem 0.75rem",
                  background: "rgba(123, 97, 255, 0.15)",
                  color: "#a78bfa",
                  borderRadius: "6px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  display: "inline-block",
                  marginBottom: "1rem"
                }}
              >
                {selectedProject.category}
              </span>

              <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", marginBottom: "1rem" }}>
                {selectedProject.title}
              </h3>

              <p style={{ color: "#b3afcc", lineHeight: 1.7, fontSize: "1rem", marginBottom: "1.5rem" }}>
                {selectedProject.fullDesc}
              </p>

              <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#a78bfa", marginBottom: "0.75rem" }}>
                Technologies Used
              </h4>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
                {selectedProject.tags.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: "0.35rem 0.85rem",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "6px",
                      color: "#b3afcc",
                      fontSize: "0.85rem"
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <FaGithub /> GitHub Repository
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn btn-secondary"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
