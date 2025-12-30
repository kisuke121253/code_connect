import Image from "next/image";
import styles from "./page.module.css";
import { CardPost } from "./components/CardPost";
import logger from "../logger";
import Link from "next/link";
import db from "../../prisma/db";

async function getAllposts(page, searchTerm){
  try{

    const where = {};
    if(searchTerm){
      where.title = {
        contains: searchTerm,
        mode: 'insensitive'
      }
    }

    const perPage = 6;
    const skip = (page -1) * perPage;
    const totalItems = await db.post.count({where});
    const totalPages = Math.ceil(totalItems / perPage);
    const prev = page > 1 ? page -1 : null;
    const next = page < totalPages ? page + 1 : null;
    const posts = await db.post.findMany({
      take: perPage,
      skip: skip,
      where,
      orderBy:{
        createdAt: 'desc'
      },
      include:{
        author: true
      },
    })
    return {data: posts, prev, next}
  }
  catch(error){
    logger.error(`Erro ao buscar posts{error}`)
    return {data: [], prev: null, next: null}
  }
}

export default async function Home({searchParams}) {
  const currentPage = parseInt(searchParams?.page || 1);
  const searchTerm = searchParams?.q;
  const { data: posts, prev, next } = await getAllposts(currentPage, searchTerm);

  return (
    <main className={styles.main}>
      {/* Os posts ficam soltos aqui, como você queria */}
      {posts.map(post => <CardPost key={post.id} post={post}/>)}

      {/* Container da Paginação (Forçaremos ele a ir para baixo no CSS) */}
      <div className={styles.pagination}>
          {prev && (
            <Link 
                href={{ pathname: '/', query: { page: prev, q: searchTerm } }} 
                className={styles.paginationLink}
            >
                <span>←</span> Anterior
            </Link>
          )}

          {next && (
            <Link 
                href={{ pathname: '/', query: { page: next, q: searchTerm } }} 
                className={styles.paginationLink}
            >
                Próximo <span>→</span>
            </Link>
          )}
      </div>
    </main>
  );
}