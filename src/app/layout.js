import { Prompt } from "next/font/google";
import "./globals.css";
import { Aside } from "./components/Aside"; // Verifique se o caminho está certo
import { SearchForm } from "./components/SearchForm"; // Verifique o caminho

export const metadata = {
  title: 'Code Connect',
  description: 'Uma rede social para desenvolvedores.',
};

const prompt = Prompt({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className="app-container">
          {/* Coluna 1: Barra Lateral Fixa */}
          <Aside />
          
          {/* Coluna 2: Área de Conteúdo (Busca + Posts) */}
          <div className="main-content">
            <SearchForm />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}