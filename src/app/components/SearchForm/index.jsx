import { Button } from "../Button";
import styles from "./searchform.module.css";

export const SearchForm = ()=> {
    return (
        <form className={styles.form} action='/'>
            <input 
                name='q'
                placeholder="Buscar posts..."
                className={styles.input}
            />
            <Button>Buscar</Button>
        </form>
    )
}