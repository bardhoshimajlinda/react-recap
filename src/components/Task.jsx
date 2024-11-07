const Task = (props) => {
  const style = {
    textDecoration: props.completed ? "line-through" : "none",
    color: props.completed ? "gray" : "black",
    opacity: props.completed ? 0.6 : 1,
  };
  return (
    <div key={props.id} style={style}>
      <span className="task-name">{props.name}</span>
      <button className="delete-task" onClick={() => props.delete(props.id)}>
        X
      </button>
      <button
        className="complete-task"
        onClick={() => props.completeTask(props.id)}
      >
        Complete
      </button>
    </div>
  );
};

export default Task;
