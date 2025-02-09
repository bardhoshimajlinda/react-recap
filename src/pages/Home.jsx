import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
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
          <Link to="/airbnb" className="example-link">
            Airbnb
          </Link>
          <Link to="/travel-journey" className="example-link">
            Travel Journey
          </Link>
          <Link to="/boxes" className="example-link">
            Boxes Style
          </Link>
          <Link to="/todo" className="example-link">
            TODO
          </Link>
          <Link to="/memory-game" className="example-link">
            Memory Game
          </Link>
          <Link to="/recipe" className="example-link">
            Recipe
          </Link>
          <Link to="/counter" className="example-link">
            Counter
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
