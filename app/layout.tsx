// app/layout.tsx
import "./globals.css"; // seu CSS global (tema dark/light, cards, botões, etc.)
import Providers from "./providers"; // Theme + Context Providers
import type { ReactNode } from "react";

export const metadata = {
  title: "Portfólio - Valdir Albino Wallauer",
  description:
    "Portfólio profissional de transição de carreira para Data Science, IA e Desenvolvimento Web",
  icons: {
    icon: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <head>
        {/* SEO/meta tags extras podem ser adicionadas aqui */}
      </head>
      <body>
        {/* Providers incluem ThemeContext e outros Context Providers */}
        <Providers>
          <div className="app-container">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
