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
        ease: [0.16, 1, 0.3, 1], // <<< CORREÇÃO
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
        ease: [0.16, 1, 0.3, 1], // <<< CORREÇÃO
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
        <p>
          Aplicação Django completa (CRUD) para controle de reagentes químicos em
          laboratório. Inclui autenticação, controle de estoque, registro de
          validade e alertas automáticos. Hospedado no PythonAnywhere.
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
        <p>
          Aplicação Streamlit que utiliza visão computacional e modelos de IA para
          classificar vidrarias de laboratório a partir de uma imagem enviada pelo
          usuário.
        </p>

        <a
          href="https://labglassware.streamlit.app"
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
        <p>
          Aplicação Streamlit com RAG para auxiliar na leitura e interpretação de
          artigos científicos. O usuário envia PDFs e o assistente consulta o
          conteúdo para responder perguntas.
        </p>

        <a
          href="https://vawarticles3.app.vercel"
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
