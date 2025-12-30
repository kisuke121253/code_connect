import styles from './button.module.css'; // Importando o CSS Module

export const Button = ({children}) => {
    return (
        <button className={styles.btn}>
            {children}
        </button>
    )
}