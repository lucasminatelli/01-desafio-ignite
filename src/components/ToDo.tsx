import styles from "./ToDo.module.css";

export function ToDo() {
  return (
    <div>
      <div>
        <form>
          <input placeholder="Adicione uma nova tarefa"></input>
          <button>Criar</button>
        </form>
      </div>

      <div>
        <header className={styles.header}>
          <div>
            <strong className={styles.tarefas_criadas}>Tarefas criadas</strong>
            <span>0</span>
          </div>
          <div>
            <strong className={styles.tarefas_concluidas}>Concluídas</strong>
            <span>0</span>
          </div>
        </header>

        <div>
          content
        </div>
      </div>
    </div>
  );
}
