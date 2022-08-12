import { Trash } from "phosphor-react";
import styles from "./Tarefa.module.css";

interface TarefaProps {
  id: number;
  done: boolean;
  title: string;
  onDeleteTask: (id: number) => void;
}

export function Tarefa({ id, done, title, onDeleteTask }: TarefaProps) {
  return (
    <article className={styles.tarefa}>
      <input type="checkbox" checked={done} />
      <p>{title}</p>
      <Trash size={16} onClick={() => onDeleteTask(id)} />
    </article>
  );
}
