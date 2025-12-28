import { HomeCard } from "../components/home/HomeCard";
import { FaFutbol, FaUsers, FaTrophy } from "react-icons/fa";
import "./Homepage.css";

export const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Matches-React</h1>

      <div className="home-grid">
        <HomeCard
          title="Matches"
          icon={<FaFutbol />}
          to="/matches"
        />

        <HomeCard
          title="Standings"
          icon={<FaTrophy />}
          to="/standings"
        />

        <HomeCard
          title="Players"
          icon={<FaUsers />}
          to="/players"
        />
      </div>
    </div>
  );
};

export default Homepage;
