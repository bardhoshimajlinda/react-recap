import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>React Examples</h1>
      <p>Select an example to see more:</p>
      <div className="link-list">
        <Link to="/fruits" className="example-link">
          Search Example
        </Link>
        <Link to="/form-example" className="example-link">
          Form Example
        </Link>
      </div>
    </div>
  );
};

export default Home;
