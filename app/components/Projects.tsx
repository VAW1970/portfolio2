export default function Projects() {
  return (
    <>
      <h2>🚀 Projetos em Destaque</h2>

      {/* Projeto 1 */}
      <div className="card" style={{ marginTop: "1.5rem" }}>
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
      </div>

      <div className="divider" />

      {/* Projeto 2 */}
      <div className="card">
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
      </div>

      <div className="divider" />

      {/* Projeto 3 */}
      <div className="card">
        <h3>
          📚🤖 IA com RAG — Assistente para Interpretação de Artigos Científicos
        </h3>
        <p>
          Aplicação Streamlit com RAG para auxiliar na leitura e interpretação de
          artigos científicos. O usuário envia PDFs e o assistente consulta o
          conteúdo para responder perguntas.
        </p>

        <a
          href="https://appartigos.streamlit.app"
          target="_blank"
          className="project-btn"
        >
          🔗 Abrir Assistente
        </a>
      </div>

      <div className="divider" />
    </>
  );
}
