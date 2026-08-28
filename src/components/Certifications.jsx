import React from "react";
import { motion } from "framer-motion";
import { FaCloud, FaBrain } from "react-icons/fa";
import { certifications } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="section" style={{ background: "rgba(13, 10, 24, 0.6)" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Credentials</span>
          <h2 className="section-title">Certifications & Training</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem"
          }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card"
              style={{
                padding: "2rem",
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start"
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "14px",
                  background: "rgba(123, 97, 255, 0.15)",
                  border: "1px solid rgba(123, 97, 255, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#a78bfa",
                  fontSize: "1.5rem",
                  flexShrink: 0
                }}
              >
                {index === 0 ? <FaBrain /> : <FaCloud />}
              </div>

              <div>
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.2rem 0.65rem",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "6px",
                    color: "#7e7a9c",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem"
                  }}
                >
                  {cert.badge}
                </span>

                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.4rem" }}>
                  {cert.title}
                </h3>

                <p style={{ color: "#a78bfa", fontWeight: 700, fontSize: "0.9rem" }}>
                  {cert.provider}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
