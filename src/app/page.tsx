
import Counter from "./composant/counter/Counter"
import Authentification from "./composant/authentification/Authentification"
import TaskList from "./composant/taskList/TaskList";

export default function Home() {
  return (
    <main>
      <Counter />
      <Authentification />
      <TaskList />
    </main>
  );
}
