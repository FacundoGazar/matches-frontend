import { Link } from "react-router-dom";
import {useStandings} from "../hooks/useStandings";

export const Standings = () => {
  const { data, isLoading, error } = useStandings();

  if (isLoading) return <p>Cargando...</p>;
  if (error || !data) return <p>Error al cargar el partido</p>;

  return (
    <div>
        <h1>Standings</h1>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team Name</th>
              <th>Win</th>
              <th>Loss</th>
              <th>Draw</th>
              <th>Conceded</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {data.map((standing) => (
              <tr key={standing.rank}>
                <td>{standing.rank}</td>
                <td><Link to={`/teams/${standing.teamId}`}>{standing.teamName}</Link></td>
                <td>{standing.win}</td>
                <td>{standing.loss}</td>
                <td>{standing.draw}</td>
                <td>{standing.conceded}</td>
                <td>{standing.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default Standings;