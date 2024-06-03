
import Authentification from "./component/authentification/Authentification"
import Counter from "./component/counterReducer/Counter";
import ThemeSwitcher from "./component/lightMod/ThemeSwitcher";


import TaskList from "./component/taskList/TaskList";
import TodoApp from "./component/todoApp/TodoApp";

export default function Home() {
  return (
    <main>
      <ThemeSwitcher />
      <Authentification />
      <TaskList />
      <TodoApp />
      <Counter />
    </main>
  );
}
