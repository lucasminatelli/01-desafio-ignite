import React from "react";
import { PlusCircle } from "phosphor-react";
import { Tarefa } from "./Tarefa";
import styles from "./ToDo.module.css";
import doc from "../assets/doc.svg";

interface Tasks {
  id: number;
  done: boolean;
  title: string;
}

export function ToDo() {
  const [tasks, setTasks] = React.useState<Tasks[]>([
    {
      id: new Date().getTime(),
      done: false,
      title: "Primeira tarefa",
    },
  ]);

  return (
    <div>
      <div>
        <form className={styles.form}>
          <input placeholder="Adicione uma nova tarefa"></input>
          <button type="submit">
            <span>Criar</span>
            <PlusCircle size={16} />
          </button>
        </form>
      </div>

      <div>
        <header className={styles.header}>
          <div>
            <strong className={styles.tarefas_criadas}>Tarefas criadas</strong>
            <span>{tasks.length}</span>
          </div>
          <div>
            <strong className={styles.tarefas_concluidas}>Concluídas</strong>
            <span>0</span>
          </div>
        </header>

        {tasks.length > 0 ? (
          <div className={styles.lista}>
            {tasks.map((task) => (
              <Tarefa key={task.id} done={task.done} title={task.title} />
            ))}
          </div>
        ) : (
          <div className={styles.lista_vazia}>
            <img src={doc} alt="" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        )}
      </div>
    </div>
  );
}
