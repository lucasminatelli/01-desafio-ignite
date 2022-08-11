import styles from "./App.module.css";
import { Header } from "./components/Header";
import { ToDo } from "./components/ToDo";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.toDo}>
        <ToDo />
      </main>
    </div>
  );
}

export default App;
