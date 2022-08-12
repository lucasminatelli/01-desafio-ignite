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
  const [tasks, setTasks] = React.useState<Tasks[]>([]);
  const [newTask, setNewTask] = React.useState<string>();

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
    const tasksWithoutThisOne = tasks.filter((task) => task.id !== id);
    setTasks(tasksWithoutThisOne);
  }

  function handleCountTasksDone() {
    let count = 0;
    tasks.forEach((task) => {
      if (task.done === true) {
        count++;
      }
    });
    return count;
  }

  function handleUpdateTasks(id: number) {
    const updatedTasks: Tasks[] = [];
    tasks.forEach((task) => {
      if(task.id === id){
        updatedTasks.push({
          id: task.id,
          done: !task.done,
          title: task.title
        })
      } else {
        updatedTasks.push({
          id: task.id,
          done: task.done,
          title: task.title
        })
      }
    });
    setTasks(updatedTasks);
  }

  const tasksDone = handleCountTasksDone();

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
            {tasks.length > 0 ? (
              <span>{`${tasksDone} de ${tasks.length}`}</span>
            ) : (
              <span>0</span>
            )}
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
                onCheckTask={handleUpdateTasks}
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
