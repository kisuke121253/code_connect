import { Avatar } from "../Avatar";
import Image from "next/image";
import styles from "./cardpost.module.css";
import Link from "next/link";

export const CardPost = ({post}) => {
    return (
    <Link href={`/posts/${post.slug}`} className={styles.link}>
        <article>
            <header className={styles.header}>
                <figure>
                    <Image src={post.cover} 
                    width={438} 
                    height={133} 
                    className={styles.img}
                    alt={`Capa do post de titulo: ${post.title}`}/>
                </figure>
            </header>
            <section className={styles.section}>
                <h2 className={styles.cardpost_title}>{post.title}</h2>
                <p className={styles.p}>{post.body}</p>
            </section>
            <footer className={styles.footer}>
                <Avatar ImageSrc={post.author.avatar} 
                name={post.author.username} />
            </footer>
        </article>
    </Link>
    )    
}