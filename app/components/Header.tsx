import Image from "next/image";

export default function Header() {
  return (
    <>
      <h1>💼 Portfólio Profissional</h1>
      <h3>Transição de Carreira para Data Science, IA e Desenvolvimento Web</h3>

      <p>
        Obrigado por visitar meu portfólio!
        <br /><br />
        Sou um profissional em transição para a área de Tecnologia, integrando
        minha trajetória na Química Industrial com novas competências em
        programação, inteligência artificial e desenvolvimento web. A formação
        em Análise e Desenvolvimento de Sistemas (ADS) consolidou minha base em
        lógica de programação, bancos de dados e construção de aplicações,
        permitindo unir tecnologia à indústria de forma estratégica.
        <br /><br />
        Atualmente, estou focado em aprofundar conhecimentos nas áreas de:
      </p>

      <ul>
        <li>Inteligência Artificial</li>
        <li>Ciência de Dados</li>
        <li>Desenvolvimento Python (Web / Back-end)</li>
        <li>Django e Streamlit</li>
        <li>TypeScript e Next.js</li>
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
            Sou Especialista em Química Industrial com mais de 35 anos de
            experiência, atualmente direcionando minha carreira para Tecnologia.
            <br /><br />
            Apaixonado por resolver problemas reais e construir ferramentas que
            agregam valor, venho aplicando boas práticas de engenharia de
            software aliadas ao meu background técnico.
            <br /><br />
            Possuo experiência e estudos em{" "}
            <b>Python</b>, <b>Django</b>, <b>Streamlit</b>,{" "}
            <b>TypeScript</b>, <b>Next.js</b>, <b>Inteligência Artificial</b>,{" "}
            <b>Modelos de Linguagem (RAG)</b> e{" "}
            <b>Visão Computacional</b>.
            <br /><br />
            Minha atuação prévia com <b>ISO 9001/14001</b>,{" "}
            <b>Química Analítica</b>, <b>Assuntos Regulatórios</b> e{" "}
            <b>Controle de Qualidade</b> fortalece minha atenção a processos,
            rastreabilidade, documentação e confiabilidade — elementos essenciais
            também no desenvolvimento de software.
          </p>
        </div>
      </div>
    </>
  );
}
