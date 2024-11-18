import { useState, useEffect } from "react";
import Task from "../components/Task";

const ToDo = () => {
  const [todoList, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem("todoList");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTask, setNewTask] = useState("");

  const handleData = (event) => setNewTask(event.target.value);

  const addTask = () => {
    if (newTask.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }
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

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div
      className="todos"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "100px",
        width: "1100px",
      }}
    >
      <div
        className="addTask"
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <input
          className="new-task"
          type="text"
          value={newTask}
          onChange={handleData}
          style={{
            padding: "8px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            flex: "1",
          }}
        />
        <button
          className="add-task"
          onClick={addTask}
          style={{
            padding: "8px 12px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
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
