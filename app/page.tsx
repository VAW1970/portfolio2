"use client";

import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#F8F9FA",
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "Helvetica, sans-serif",
      }}
    >
      {/* ESTILOS GERAIS */}
      <style>{`
        h1, h2, h3, h4 {
          font-family: 'Helvetica', sans-serif;
          color: #1F1F1F;
        }

        .card {
          background-color: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0px 2px 10px rgba(0,0,0,0.08);
          border: 1px solid #EDEDED;
        }

        .columns {
          display: flex;
          gap: 2rem;
          margin-top: 1.5rem;
        }

        .col {
          flex: 1;
        }

        .col1 { flex: 1; }
        .col2 { flex: 3; }

        .divider {
          width: 100%;
          height: 1px;
          background-color: #ddd;
          margin: 2rem 0;
        }

        .project-btn {
          display: inline-block;
          padding: 10px 20px;
          border-radius: 8px;
          background-color: #4F8BF9;
          color: white !important;
          font-weight: 500;
          margin-top: 10px;
          transition: 0.2s;
        }

        .project-btn:hover {
          background-color: #3A6FD9;
        }

        .footer {
          text-align: center;
          margin-top: 2rem;
          padding: 2rem 0;
          color: #1F1F1F;
        }

        .footer a {
          color: #4F8BF9;
        }

        .footer-copy {
          margin-top: 1.5rem;
          font-size: 0.85rem;
          color: #777;
        }
      `}</style>

      <Header />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
