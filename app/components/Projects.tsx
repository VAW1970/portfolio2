"use client";

import { motion, Variants } from "framer-motion";

export default function Projects() {
  const cardVariant: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const titleVariant: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <>
      {/* Título animado */}
      <motion.h2
        variants={titleVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ marginBottom: "1rem" }}
      >
        🚀 Projetos em Destaque
      </motion.h2>

      {/* --- PROJETO 1 --- */}
      <motion.div
        className="card"
        variants={cardVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ marginTop: "1.5rem" }}
      >
        <h3>🧪 CRUD Django — Gerenciamento de Reagentes Químicos</h3>

        <div className="badges">
          <span className="badge">Python</span>
          <span className="badge">Django</span>
          <span className="badge">SQLite</span>
          <span className="badge">Autenticação</span>
          <span className="badge">Deploy PythonAnywhere</span>
        </div>

        <p>
          Aplicação completa para controle de reagentes: CRUD, autenticação,
          estoque, validade e alertas automáticos (User - Test#2025).
        </p>

        <a
          href="https://vaw.pythonanywhere.com/"
          target="_blank"
          className="project-btn"
        >
          🔗 Acessar o Sistema
        </a>
      </motion.div>

      <div className="divider" />

      {/* --- PROJETO 2 --- */}
      <motion.div
        className="card"
        variants={cardVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3>🧪🔍 IA — Identificação de Vidrarias de Laboratório</h3>

        <div className="badges">
          <span className="badge">Python</span>
          <span className="badge">Pytorch</span>
          <span className="badge">Tensorflow</span>
          <span className="badge">Opencv</span>
          <span className="badge">TypeScript</span>
          <span className="badge">Visão Computacional</span>         
        </div>

        <p>
          Sistema que utiliza IA e visão computacional para classificar vidrarias
          de laboratório a partir de imagens enviadas pelo usuário.
        </p>

        <a
          href="https://labglass2.vercel.app"
          target="_blank"
          className="project-btn"
        >
          🔗 Abrir Aplicação
        </a>
      </motion.div>

      <div className="divider" />

      {/* --- PROJETO 3 --- */}
      <motion.div
        className="card"
        variants={cardVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3>
          📚🤖 IA com RAG — Assistente para Interpretação de Artigos Científicos
        </h3>

        <div className="badges">
          <span className="badge">Python</span>
          <span className="badge">Langchain</span>
          <span className="badge">TypeScript</span>
          <span className="badge">RAG</span>
          <span className="badge">Vector DB</span>          
          <span className="badge">PDF Parsing</span>
        </div>

        <p>
          Assistente inteligente que interpreta PDFs com suporte de RAG: extrai
          conteúdo, processa trechos e responde perguntas com base no artigo.
        </p>

        <a
          href="https://vawarticles3.vercel.app"
          target="_blank"
          className="project-btn"
        >
          🔗 Abrir Assistente
        </a>
      </motion.div>

      <div className="divider" />
    </>
  );
}
