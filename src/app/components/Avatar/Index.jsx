import Image from "next/image";
import styles from "./avatar.module.css";

export const Avatar = ({name, ImageSrc}) => {
    return (
        <ul className={styles.ul}>
            <li>
                <Image src={ImageSrc} width={32} height={32} alt={`Imagem do(a) ${name}`}/>
            </li>
            <li>@{name}</li>
        </ul>
    )
}