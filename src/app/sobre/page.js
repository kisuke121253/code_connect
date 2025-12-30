import styles from './sobre.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Sobre | Code Connect',
};

export default function Sobre() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Sobre o Code Connect</h1>
      
      <div className={styles.content}>
        <p>
          O <strong>Code Connect</strong> é uma plataforma construída para desenvolvedores 
          compartilharem conhecimento, snippets de código e descobertas do dia a dia.
        </p>
        
        <p>
          Este projeto foi desenvolvido como parte de um estudo aprofundado sobre 
          <strong> Engenharia de Software</strong> e desenvolvimento Fullstack moderno.
        </p>

        <h2 className={styles.subtitle}>Stack Tecnológica</h2>
        <ul className={styles.techList}>
          <li>⚡ Next.js (App Router)</li>
          <li>🎨 CSS Modules + Glassmorphism</li>
          <li>🐘 Prisma ORM & PostgreSQL</li>
          <li>🐳 Docker</li>
        </ul>

        <div className={styles.cta}>
            <Link href="/" className={styles.btn}>Voltar para o Feed</Link>
        </div>
      </div>
    </main>
  );
}