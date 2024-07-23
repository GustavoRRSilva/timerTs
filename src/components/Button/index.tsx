import styles from "./Button.module.scss";

//Interface para buttonProps
interface ButtonProps{
  texto:string
}

//Adicionando a Props
export default function Button({texto}:ButtonProps) {
  return <button className={styles.botao}>{texto}</button>;
}
