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
        <p>
          Sistema desenvolvido em <b>Django</b> para controle de reagentes em
          laboratório, com CRUD completo, autenticação, gestão de estoque,
          monitoramento de validade e alertas automáticos. Um projeto que une
          experiência técnica na área química com boas práticas de desenvolvimento
          back-end.
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
          Aplicação em <b>Streamlit</b> utilizando modelos de{" "}
          <b>Visão Computacional</b> para identificar automaticamente diferentes
          tipos de vidrarias de laboratório a partir de uma imagem enviada pelo
          usuário. Criado para apoiar estudantes, pesquisadores e ambientes de
          ensino.
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
        <h3>📚🤖 IA com RAG — Assistente para Interpretação de Artigos Científicos</h3>
        <p>
          Assistente inteligente desenvolvido com <b>RAG (Retrieval-Augmented
          Generation)</b> para análise de PDFs científicos. Utiliza{" "}
          <b>Next.js + TypeScript</b> no front-end e modelos de IA para extrair,
          indexar e consultar o conteúdo de artigos. Ideal para pesquisadores,
          estudantes e profissionais que precisam interpretar materiais técnicos
          de forma ágil.
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
