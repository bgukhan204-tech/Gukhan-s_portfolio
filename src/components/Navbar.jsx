import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "0.85rem 0" : "1.35rem 0",
        background: scrolled
          ? "rgba(18, 16, 30, 0.88)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "none",
        boxShadow: scrolled ? "0 10px 30px rgba(0, 0, 0, 0.4)" : "none",
        transition: "all 0.3s ease"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem"
          }}
        >
          <span
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #7b61ff 0%, #635bff 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              color: "#ffffff",
              fontSize: "1.15rem",
              boxShadow: "0 0 15px rgba(123, 97, 255, 0.4)"
            }}
          >
            GB
          </span>
          <span
            style={{
              fontWeight: 800,
              fontSize: "1.25rem",
              color: "#ffffff",
              letterSpacing: "-0.02em"
            }}
          >
            Gukhan<span style={{ color: "#7b61ff" }}>.b</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem"
          }}
          className="desktop-nav"
        >
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              style={{
                color: "#b3afcc",
                textDecoration: "none",
                fontSize: "0.95rem",
                fontWeight: 600,
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => (e.target.style.color = "#7b61ff")}
              onMouseLeave={(e) => (e.target.style.color = "#b3afcc")}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ padding: "0.55rem 1.25rem", fontSize: "0.88rem" }}
          >
            Get In Touch
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{
            background: "transparent",
            border: "none",
            color: "#ffffff",
            fontSize: "1.4rem",
            cursor: "pointer",
            display: "none"
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "#141222",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)"
            }}
          >
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: "#f3f2f8",
                  textDecoration: "none",
                  fontSize: "1.05rem",
                  fontWeight: 600
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ textAlign: "center", marginTop: "0.5rem" }}
            >
              Get In Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </motion.header>
  );
}
