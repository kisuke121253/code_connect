'use client';

import Image from 'next/image';
import styles from './aside.module.css';
import logo from './logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Usando o ícone 'Users' para representar a comunidade/autores
import { Home, Users, Code2 } from 'lucide-react';

export const Aside = () => {
    const pathname = usePathname();
    const isActive = (path) => pathname === path;

    return (
        <aside className={styles.aside}>
            <div className={styles.logoContainer}>
                <Image src={logo} alt="Logo da Code Connect" priority />
            </div>

            <nav className={styles.nav}>
                <Link 
                    href="/" 
                    className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
                >
                    <Home size={20} />
                    <span>Início</span>
                </Link>
                

                <Link 
                    href="/sobre" 
                    className={`${styles.navLink} ${isActive('/sobre') ? styles.active : ''}`}
                >
                    <Code2 size={20} />
                    <span>Sobre</span>
                </Link>
            </nav>
            
        </aside>
    )
}