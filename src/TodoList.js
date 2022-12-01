import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToDoList = ({ tasks, setTasks }) => {
  const resetTaskIds = (filteredTasks) => {
    let newTasks = filteredTasks.map((task, i) => {
      return { name: task.name, completed: task.completed, id: i + 1 };
    });
    console.log(newTasks);
    return setTasks(newTasks);
  };

  const deleteTask = (id) => {
    let filteredTasks = tasks.filter((task) => task.id !== id);
    resetTaskIds(filteredTasks);
  };

  const completeTask = (id) => {
    tasks[id - 1].completed = true;
    let completedTask = document.querySelectorAll(".task")[id - 1];
    completedTask.classList.add("task-completed");
    completedTask.querySelector(".taskDescriptionCompleted").textContent = `Completed`;
    setTasks(tasks);
  };

  return (
    <div className="taskContainer">
      {tasks.map((task) => (
        <div className="task" key={task.id}>
          <div className="taskDescription">
            <p className="taskDescriptionText">{task.name}</p>
          </div>
          <div className="taskHandle">
            <p className="taskDescriptionCompleted"></p>
            <button className="completeButton" onClick={() => completeTask(task.id)}>
              <FontAwesomeIcon icon={["fas", "check"]} />
            </button>
            <button className="deleteButton" onClick={() => deleteTask(task.id)}>
              <FontAwesomeIcon icon={["fas", "times"]} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
