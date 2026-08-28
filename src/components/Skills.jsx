import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaPython,
  FaDatabase,
  FaLock,
  FaCreditCard,
  FaGithub,
  FaHtml5,
  FaDesktop,
  FaCogs,
  FaCheckCircle
} from "react-icons/fa";
import {
  SiJavascript,
  SiSpringboot,
  SiTensorflow,
  SiStreamlit,
  SiMysql,
  SiRender
} from "react-icons/si";
import { skills } from "../data/portfolioData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { key: "all", label: "All Skills" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend & AI" },
    { key: "database", label: "Database" },
    { key: "tools", label: "Tools & Deployment" }
  ];

  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case "FaReact": return <FaReact style={{ color: "#38bdf8" }} />;
      case "SiJavascript": return <SiJavascript style={{ color: "#facc15" }} />;
      case "FaHtml5": return <FaHtml5 style={{ color: "#f97316" }} />;
      case "FaDesktop": return <FaDesktop style={{ color: "#a78bfa" }} />;
      case "FaJava": return <FaJava style={{ color: "#fb923c" }} />;
      case "SiSpringboot": return <SiSpringboot style={{ color: "#4ade80" }} />;
      case "FaLock": return <FaLock style={{ color: "#c4b5fd" }} />;
      case "FaPython": return <FaPython style={{ color: "#60a5fa" }} />;
      case "SiTensorflow": return <SiTensorflow style={{ color: "#f97316" }} />;
      case "SiStreamlit": return <SiStreamlit style={{ color: "#f87171" }} />;
      case "FaCreditCard": return <FaCreditCard style={{ color: "#4ade80" }} />;
      case "SiMysql": return <SiMysql style={{ color: "#38bdf8" }} />;
      case "FaDatabase": return <FaDatabase style={{ color: "#a78bfa" }} />;
      case "FaGithub": return <FaGithub style={{ color: "#ffffff" }} />;
      case "SiRender": return <SiRender style={{ color: "#2dd4bf" }} />;
      default: return <FaCogs style={{ color: "#7b61ff" }} />;
    }
  };

  const getFilteredSkills = () => {
    if (activeTab === "frontend") return skills.frontend;
    if (activeTab === "backend") return skills.backend;
    if (activeTab === "database") return skills.database;
    if (activeTab === "tools") return skills.tools;
    return [...skills.frontend, ...skills.backend, ...skills.database, ...skills.tools];
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Technical Stack</span>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>

        {/* Tab Filters */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.75rem",
            flexWrap: "wrap",
            marginBottom: "3rem"
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              style={{
                padding: "0.6rem 1.25rem",
                borderRadius: "9999px",
                border: "1px solid",
                borderColor: activeTab === cat.key ? "#7b61ff" : "rgba(255, 255, 255, 0.08)",
                background: activeTab === cat.key ? "#635bff" : "rgba(255, 255, 255, 0.05)",
                color: activeTab === cat.key ? "#ffffff" : "#b3afcc",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Clean Skills Cards Grid (Without Percentages) */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1.25rem",
            marginBottom: "3.5rem"
          }}
        >
          {getFilteredSkills().map((skill, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              key={skill.name}
              className="glass-card"
              style={{
                padding: "1.25rem 1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "1.1rem"
              }}
            >
              <div
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  flexShrink: 0
                }}
              >
                {getSkillIcon(skill.icon)}
              </div>
              <div>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff" }}>
                  {skill.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills Section */}
        <div
          className="glass-card"
          style={{
            padding: "2rem",
            background: "linear-gradient(145deg, rgba(123, 97, 255, 0.05), rgba(25, 22, 39, 0.8))",
            border: "1px solid rgba(123, 97, 255, 0.2)"
          }}
        >
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "1.25rem", color: "#ffffff" }}>
            Soft Skills & Core Strengths
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem" }}>
            {skills.softSkills.map((soft, idx) => (
              <span
                key={idx}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 1.1rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "9999px",
                  color: "#b3afcc",
                  fontSize: "0.9rem",
                  fontWeight: 600
                }}
              >
                <FaCheckCircle style={{ color: "#7b61ff", fontSize: "0.85rem" }} />
                {soft}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
