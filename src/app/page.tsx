
import Authentification from "./composant/authentification/Authentification"
import TaskList from "./composant/taskList/TaskList";
import TodoApp from "./composant/todoApp/TodoApp";

export default function Home() {
  return (
    <main>
      <Authentification />
      <TaskList />
      < TodoApp />
    </main>
  );
}
