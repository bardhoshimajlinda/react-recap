const Task = (props) => {
  const style = {
    textDecoration: props.completed ? "line-through" : "none",
    color: props.completed ? "gray" : "black",
    opacity: props.completed ? 0.6 : 1,
    padding: "10px",
    marginBottom: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    border: "1px solid #ddd",
  };

  return (
    <div key={props.id} style={style}>
      <span className="task-name" style={{ flex: "1", padding: "0 8px" }}>
        {props.name}
      </span>
      <button
        className="delete-task"
        onClick={() => props.delete(props.id)}
        style={{
          backgroundColor: "#dc3545",
          color: "#fff",
          border: "none",
          padding: "5px 8px",
          borderRadius: "5px",
          cursor: "pointer",
          marginRight: "5px",
        }}
      >
        X
      </button>
      <button
        className="complete-task"
        onClick={() => props.completeTask(props.id)}
        style={{
          backgroundColor: props.completed ? "#6c757d" : "#007bff",
          color: "#fff",
          border: "none",
          padding: "5px 8px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {props.completed ? "Undo" : "Complete"}
      </button>
    </div>
  );
};

export default Task;
