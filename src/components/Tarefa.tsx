import { Trash } from "phosphor-react";
import styles from "./Tarefa.module.css";

interface TarefaProps {
  id: number;
  done: boolean;
  title: string;
  onDeleteTask: (id: number) => void;
  onCheckTask: (id: number) => void;
}

export function Tarefa({ id, done, title, onDeleteTask, onCheckTask }: TarefaProps) {
  return (
    <article className={styles.tarefa}>
      <input type="checkbox" checked={done} onClick={() => onCheckTask(id)} />
      <p>{title}</p>
      <Trash size={16} onClick={() => onDeleteTask(id)} />
    </article>
  );
}
