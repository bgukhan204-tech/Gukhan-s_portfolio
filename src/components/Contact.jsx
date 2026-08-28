import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCopy,
  FaCheck,
  FaGoogle
} from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleOpenGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent("Portfolio Inquiry & Collaboration")}`;
    window.open(gmailUrl, "_blank");
  };

  const handleOpenMailto = () => {
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent("Portfolio Inquiry & Collaboration")}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Let's Connect & Collaborate</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "3rem",
            alignItems: "start"
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", marginBottom: "1rem" }}>
              Interested in working together?
            </h3>
            <p style={{ color: "#b3afcc", lineHeight: 1.7, fontSize: "1.05rem", marginBottom: "2rem" }}>
              I am actively looking for software engineering roles, AI internships, and collaborative tech projects. Reach out to me directly via email or phone!
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
              {/* Email item */}
              <div
                className="glass-card"
                style={{
                  padding: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "rgba(123, 97, 255, 0.15)",
                      border: "1px solid rgba(123, 97, 255, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#a78bfa",
                      fontSize: "1.2rem"
                    }}
                  >
                    <FaEnvelope />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "#7e7a9c", fontWeight: 600 }}>Email Address</div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff" }}>
                      {personalInfo.email}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, "email")}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: copiedEmail ? "#a78bfa" : "#b3afcc",
                    padding: "0.5rem 0.85rem",
                    borderRadius: "8px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.8rem",
                    fontWeight: 600
                  }}
                >
                  {copiedEmail ? <FaCheck /> : <FaCopy />}
                  {copiedEmail ? "Copied" : "Copy"}
                </button>
              </div>

              {/* Phone item */}
              <div
                className="glass-card"
                style={{
                  padding: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "rgba(123, 97, 255, 0.15)",
                      border: "1px solid rgba(123, 97, 255, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#a78bfa",
                      fontSize: "1.2rem"
                    }}
                  >
                    <FaPhone />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "#7e7a9c", fontWeight: 600 }}>Phone Number</div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff" }}>
                      {personalInfo.phone}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: copiedPhone ? "#a78bfa" : "#b3afcc",
                    padding: "0.5rem 0.85rem",
                    borderRadius: "8px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.8rem",
                    fontWeight: 600
                  }}
                >
                  {copiedPhone ? <FaCheck /> : <FaCopy />}
                  {copiedPhone ? "Copied" : "Copy"}
                </button>
              </div>

              {/* Location */}
              <div
                className="glass-card"
                style={{
                  padding: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem"
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(123, 97, 255, 0.15)",
                    border: "1px solid rgba(123, 97, 255, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#a78bfa",
                    fontSize: "1.2rem"
                  }}
                >
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div style={{ fontSize: "0.8rem", color: "#7e7a9c", fontWeight: 600 }}>Location</div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff" }}>
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Gmail Redirection */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card"
            style={{
              padding: "3rem 2.5rem",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "20px",
                background: "linear-gradient(135deg, rgba(123, 97, 255, 0.25), rgba(99, 102, 241, 0.25))",
                border: "1px solid rgba(123, 97, 255, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                color: "#a78bfa",
                marginBottom: "1.5rem"
              }}
            >
              <FaPaperPlane />
            </div>

            <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.75rem" }}>
              Direct Email Connection
            </h3>

            <p style={{ color: "#b3afcc", lineHeight: 1.6, fontSize: "1rem", maxWidth: "420px", marginBottom: "2rem" }}>
              Click below to compose and send an email directly to <strong style={{ color: "#ffffff" }}>{personalInfo.email}</strong> via Gmail or your default email app.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%", maxWidth: "360px" }}>
              <button
                onClick={handleOpenGmail}
                className="btn btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "0.95rem 1.5rem",
                  fontSize: "1rem",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  borderRadius: "12px"
                }}
              >
                <FaGoogle style={{ fontSize: "1.1rem" }} /> Open in Gmail Compose
              </button>

              <button
                onClick={handleOpenMailto}
                className="btn btn-secondary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "0.95rem 1.5rem",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  borderRadius: "12px"
                }}
              >
                <FaEnvelope style={{ fontSize: "1.05rem" }} /> Open in Default Mail App
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
