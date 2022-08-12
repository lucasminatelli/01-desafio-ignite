import React, { ChangeEvent, FormEvent } from "react";
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
  const [newTask, setNewTask] = React.useState<string>();
  const [tasks, setTasks] = React.useState<Tasks[]>([]);

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event?.target.value);
  }

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks([
      ...tasks,
      {
        id: new Date().getTime(),
        done: false,
        title: newTask ? newTask : "",
      },
    ]);
    setNewTask("");
  }

  function deleteTask(id: number) {
    const tasksWithoutThisOne = tasks.filter(task => task.id !== id);
    setTasks(tasksWithoutThisOne);
  }

  return (
    <div>
      <div>
        <form onSubmit={handleCreateNewTask} className={styles.form}>
          <input
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={handleNewTask}
          />
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
              <Tarefa
                key={task.id}
                id={task.id}
                done={task.done}
                title={task.title}
                onDeleteTask={deleteTask}
              />
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
