import logger from '../../../logger';
// import {remark} from 'remark';
// import html from 'remark-html';
import db from '../../../../prisma/db';
import { redirect } from 'next/navigation';
import styles from './post.module.css'; 
import Image from "next/image";
import { Avatar } from '@/app/components/Avatar/index';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Link from 'next/link';


async function getPostBySlugs(slug){
    try{
        const post = await db.post.findFirst({
        where: {slug},
        include: {author: true}
        })

        if (!post){
            throw new Error(`Post com o slug ${slug} não encontrado`);
        }
        // const processedContent = await remark()
        //     .use(html)
        //     .process(post.markdown);
        // const contentHtml = processedContent.toString();

        // post.markdown = contentHtml

        return post
    }
    catch(error){
        logger.error(`Erro ao buscar post por slug: ${slug, error}`)
    }
    redirect('/not-found')
}

const PagePost = async ({ params }) => {
    const slug = params.slug
    const post = await getPostBySlugs(slug)

    return (
        <article className={styles.container}>
            <header className={styles.header}>
                {post.cover && (
                    <figure>
                         <Image 
                            src={post.cover} 
                            width={900} 
                            height={300} 
                            alt={`Capa do post ${post.title}`}
                            className={styles.cover}
                         />
                    </figure>
                )}
                
                <h1 className={styles.title}>{post.title}</h1>
                
                {/* Reutilizando seu componente Avatar centralizado */}

            <div className={styles.authorContainer}>
                <Avatar
                    name={post.author.username} 
                    ImageSrc={post.author.avatar} 
                />
            </div>
            </header>

            {/* O conteúdo HTML recebe a classe .content para aplicarmos o CSS nas tags */}
            <div className={styles.content}>
                <ReactMarkdown
                    components={{
                        code({node, inline, className, children, ...props}) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    style={dracula}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            )
                        }
                    }}
                >
                    {post.markdown}
                </ReactMarkdown>
            </div>

            <Link href="/" className={styles.backLink}>← Voltar para a lista de posts</Link>
        </article>
    )
}



export default PagePost;