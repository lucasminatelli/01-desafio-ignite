import { Trash } from "phosphor-react";
import styles from "./Tarefa.module.css";

export function Tarefa() {
  return (
    <article className={styles.tarefa}>
      <input type="checkbox" />
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <Trash size={16}/>
    </article>
  );
}
