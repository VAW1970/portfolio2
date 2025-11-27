import Providers from "./providers";
import "./globals.css";

export const metadata = {
  title: "Portfólio - Valdir",
  description: "Portfólio Profissional",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
