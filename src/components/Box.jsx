const Box = (props) => {
  console.log(props);

  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };
  return (
    <button
      className="box"
      style={styles}
      onClick={() => props.toggle(props.id)}
    ></button>
  );
};

export default Box;
