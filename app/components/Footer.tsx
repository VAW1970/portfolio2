export default function Footer() {
  return (
    <>
      <footer className="footer">
        <h3>📬 Contato</h3>

        <p>
          📧 <strong>Email:</strong>{" "}
          <a href="mailto:valdiraw@yahoo.com.br">valdiraw@yahoo.com.br</a>
        </p>

        <p>
          💼 <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/valdir-albino-wallauer-11682376"
            target="_blank"
          >
            linkedin.com/in/valdir-albino-wallauer-11682376
          </a>
        </p>

        <p>
          🐙 <strong>GitHub:</strong>{" "}
          <a href="https://github.com/VAW1970" target="_blank">
            github.com/VAW1970
          </a>
        </p>

        <p className="footer-copy">
          © {new Date().getFullYear()} - Portfólio de Valdir Albino Wallauer
        </p>
      </footer>
    </>
  );
}
