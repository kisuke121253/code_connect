'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
import Image from 'next/image'
 
export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

    const ArrowBack = ({color = '#132E35'}) => {
    return <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5117 5.76172V7.23828H3.37109L7.55469 11.457L6.5 12.5117L0.488281 6.5L6.5 0.488281L7.55469 1.54297L3.37109 5.76172H12.5117Z" fill={color} />
    </svg>
    }
 
  return (
    <div>
        <Image 
            src="/500.png" 
            width={656} 
            height={367} 
            alt="Ocorreu um erro"
        />
      <h2 style={{color:'#81FE88'}}>OPS! Página não encontrada.</h2>
      <p style={{color:'#BCBCBC'}}>Você pode voltar ao feed e continuar buscando projetos incríveis!</p>
      <a href="/">voltar ao feed {ArrowBack(true)}</a>
    </div>
  )
}