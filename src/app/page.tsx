
import Authentification from "./component/authentification/Authentification"
import Counter from "./component/counterReducer/Counter";
import TaskList from "./component/taskList/TaskList";
import TodoApp from "./component/todoApp/TodoApp";

export default function Home() {
  return (
    <main>
      <Authentification />
      <TaskList />
      <TodoApp />
      <Counter />
    </main>
  );
}
