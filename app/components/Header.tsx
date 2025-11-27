import Image from "next/image";

export default function Header() {
  return (
    <>
      <h1>💼 Portfólio Profissional</h1>
      <h3>Transição de carreira para Data Science, IA e Desenvolvimento Web</h3>

      <p>
        Obrigado por visitar meu portfólio!
        <br /><br />
        💻⚗️ Expandindo horizontes e conectando saberes: como profissional de
        Química Industrial, decidi investir na formação em Análise e
        Desenvolvimento de Sistemas (ADS) para ampliar minha atuação e agregar
        valor ao meu perfil técnico. Ao longo do curso, mergulhei em lógica de
        programação, banco de dados, desenvolvimento web, construindo uma base
        sólida para integrar tecnologia à indústria.
        <br /><br />
        Atualmente estou em transição de carreira para a área de Tecnologia, com
        foco em:
      </p>

      <ul>
        <li>Inteligência Artificial</li>
        <li>Ciência de Dados</li>
        <li>Desenvolvimento Python (Web / Back-end)</li>
        <li>Django e Streamlit</li>
      </ul>

      <div className="divider" />

      <h3>👤 Sobre mim</h3>

      <div className="columns">
        <div className="col1">
          <Image
            src="/VAW.jpeg"
            alt="Valdir Albino Wallauer"
            width={180}
            height={260}
            style={{ borderRadius: "8px" }}
          />
          <p style={{ fontSize: "0.9rem", marginTop: "0.3rem" }}>
            Valdir Albino Wallauer
          </p>
        </div>

        <div className="col2">
          <p>
            Especialista em Química Industrial com mais de 35 anos de
            experiência, em transição para a área de tecnologia.
            <br /><br />
            Sou um solucionador de problemas apaixonado por construir ferramentas
            úteis e aprender continuamente.
            <br /><br />
            Possuo conhecimentos em <b>Python</b>, <b>Django</b>,{" "}
            <b>Streamlit</b>, <b>IA aplicada</b>, estudo{" "}
            <b>Modelos de Linguagem (RAG)</b> e <b>Visão Computacional</b>.
            <br /><br />
            Minha experiência prévia em <b>ISO 9001/14001</b>,{" "}
            <b>Química Analítica</b>, <b>Assuntos Regulatórios</b> e{" "}
            <b>Controle de Qualidade</b> fortalece minha base para aplicar boas
            práticas de engenharia de software em contextos reais.
          </p>
        </div>
      </div>
    </>
  );
}
