import { useState } from "react";
import Task from "../components/Task";

const ToDo = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleData = (event) => setNewTask(event.target.value);

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      isCompleted: false,
    };
    setTodoList([...todoList, task]);
    setNewTask(" ");
  };

  const deleteTask = (taskId) => {
    setTodoList(todoList.filter((task) => task.id !== taskId));
  };

  const completeTask = (taskId) => {
    setTodoList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <div>
      <div className="addTask">
        <input
          className="new-task"
          type="text"
          value={newTask}
          onChange={handleData}
        />
        <button className="add-task" onClick={addTask}>
          Add task
        </button>
      </div>
      <br />
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              key={task.id}
              name={task.taskName}
              id={task.id}
              completed={task.isCompleted}
              delete={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ToDo;
