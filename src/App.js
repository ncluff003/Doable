import "./App.css";
import ToDoList from "./TodoList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import ToDo from "./Todo";

function App() {
  library.add(fab, far, fas);
  const [tasks, setTasks] = useState([]);

  const addTask = (taskname) => {
    setTasks([...tasks, { name: taskname, completed: false, id: tasks.length + 1 }]);
  };

  const resetInput = (input) => {
    input.value = "";
  };

  const handleSubmit = (taskname, input, e) => {
    e.preventDefault();
    if (!taskname) return;
    addTask(taskname);
    resetInput(input);
  };

  return (
    <div className="App">
      <div className="content">
        <h1 className="app-title">Doable</h1>
        <form className="toDoForm" action="" onSubmit={(e) => handleSubmit(document.querySelector(".addToDo").value, document.querySelector(".addToDo"), e)}>
          <label htmlFor="addToDo" className="addToDoLabel">
            What Is Doable Today?
          </label>
          <input type="text" className="addToDo" placeholder="Name your task here." />
          <button className="createToDo">Create Task</button>
        </form>
        <div className="task-container">
          <ToDoList tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </div>
  );
}
export default App;
