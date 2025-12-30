# 💻 Code Connect

![Cover](https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png)

<div align="center">

  ![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
  ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
  ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

</div>

## 📖 Sobre o Projeto

**Code Connect** é uma plataforma de blog desenvolvida para conectar desenvolvedores através do conhecimento. O projeto permite a listagem e leitura de artigos técnicos, com foco em uma experiência de leitura limpa e suporte para trechos de código.

Este projeto foi desenvolvido aplicando conceitos modernos de Engenharia de Software, incluindo renderização no servidor (SSR) com Next.js, ORM com Prisma e conteinerização com Docker.

### ✨ Funcionalidades

- **Listagem de Posts:** Visualização de cards com resumo dos artigos.
- **Leitura de Artigos:** Página dedicada para leitura completa.
- **Renderização de Markdown:** O conteúdo dos posts suporta Markdown, incluindo blocos de código com *syntax highlighting* (tema Dracula).
- **Banco de Dados Relacional:** Estrutura robusta utilizando PostgreSQL e Prisma ORM.
- **Seed Database:** Script para popular o banco com dados iniciais de teste.
- **Responsividade:** Layout adaptável para dispositivos móveis e desktop.

## 🚀 Tecnologias Utilizadas

- **[Next.js 14](https://nextjs.org/)** - Framework React para produção.
- **[Prisma ORM](https://www.prisma.io/)** - Para comunicação com o banco de dados.
- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional.
- **[Docker](https://www.docker.com/)** - Para ambiente de desenvolvimento isolado.
- **[React Markdown](https://github.com/remarkjs/react-markdown)** - Para converter markdown em HTML.
- **[CSS Modules](https://github.com/css-modules/css-modules)** - Para estilização escopada.

---

## 🛠️ Como Executar o Projeto

Siga os passos abaixo para rodar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (v18+)
- [Docker](https://www.docker.com/) (Opcional, mas recomendado para o banco)
- [Git](https://git-scm.com/)

### 1. Clone o repositório

```bash
git clone [https://github.com/kisuke121253/code_connect.git](https://github.com/kisuke121253/code_connect.git)
cd code-connect