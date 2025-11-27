"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "./providers";

import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <main style={{ padding: "2rem" }}>
      {/* Botão Light/Dark */}
      <button
        onClick={toggleTheme}
        style={{
          padding: "8px 16px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          marginBottom: "1.5rem",
          background: theme === "light" ? "#222" : "#ddd",
          color: theme === "light" ? "#fff" : "#000",
        }}
      >
        {theme === "light" ? "🌙 Modo Escuro" : "☀️ Modo Claro"}
      </button>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Header />
      </motion.div>

      {/* SKILLS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Skills />
      </motion.div>

      {/* PROJECTS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Projects />
      </motion.div>

      {/* FOOTER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Footer />
      </motion.div>
    </main>
  );
}
