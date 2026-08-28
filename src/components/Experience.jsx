import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaBuilding, FaCheck } from "react-icons/fa";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Work History</span>
          <h2 className="section-title">Internship Experience</h2>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card"
              style={{
                padding: "2.5rem",
                position: "relative",
                borderLeft: "4px solid #7b61ff"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "1rem",
                  marginBottom: "1.25rem"
                }}
              >
                <div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#ffffff" }}>
                    {exp.role}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#a78bfa",
                      fontSize: "1rem",
                      fontWeight: 700,
                      marginTop: "0.25rem"
                    }}
                  >
                    <FaBuilding /> {exp.company}
                  </div>
                </div>

                <span
                  style={{
                    padding: "0.35rem 0.85rem",
                    background: "rgba(123, 97, 255, 0.15)",
                    border: "1px solid rgba(123, 97, 255, 0.3)",
                    color: "#a78bfa",
                    borderRadius: "9999px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem"
                  }}
                >
                  <FaBriefcase /> {exp.type}
                </span>
              </div>

              <ul style={{ listStyle: "none", padding: 0 }}>
                {exp.points.map((pt, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      color: "#b3afcc",
                      fontSize: "0.98rem",
                      lineHeight: 1.7,
                      marginBottom: "0.85rem"
                    }}
                  >
                    <span
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "rgba(123, 97, 255, 0.15)",
                        border: "1px solid rgba(123, 97, 255, 0.3)",
                        color: "#7b61ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.7rem",
                        marginTop: "0.2rem",
                        flexShrink: 0
                      }}
                    >
                      <FaCheck />
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
