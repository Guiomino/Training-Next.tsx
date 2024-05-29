
import Authentification from "./composant/authentification/Authentification"
import TaskList from "./composant/taskList/TaskList";
// import UserListAPI from "./composant/userListAPI/UserListAPI";

export default function Home() {
  return (
    <main>
      <Authentification />
      <TaskList />
      {/* <UserListAPI /> */}
    </main>
  );
}
