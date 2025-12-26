import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <div>
        <h1>Homepage</h1>
        <p><Link to="/matches">Matches</Link></p>
        <p><Link to="/standings">Standings</Link></p>
    </div>
  );
};

export default Homepage;
