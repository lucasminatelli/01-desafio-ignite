import { Trash } from "phosphor-react";
import styles from "./Tarefa.module.css";

interface TarefaProps {
  done: boolean;
  title: string;
}

export function Tarefa({ done, title }: TarefaProps) {
  return (
    <article className={styles.tarefa}>
      <input type="checkbox" checked={done} />
      <p>{title}</p>
      <Trash size={16} />
    </article>
  );
}
