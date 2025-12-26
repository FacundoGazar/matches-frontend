import { useParams } from "react-router-dom";
import { useMatch } from "../hooks/useMatch";

const MatchDetail = () => {
  const { id } = useParams();
  const matchId = Number(id);

  const { data, isLoading, error } = useMatch(matchId);

  if (isLoading) return <p>Cargando...</p>;
  if (error || !data) return <p>Error al cargar el partido</p>;

  return (
    <div>
      <h2>Detalle del Partido</h2>

      <p><strong>Fecha:</strong> {new Date(data.matchDate).toLocaleDateString()}</p>
      <p>
        <strong>{data.homeTeam}</strong> {data.homeScore} - {data.awayScore}{" "}
        <strong>{data.awayTeam}</strong>
      </p>

      <p><strong>ID:</strong> {data.id}</p>
    </div>
  );
};

export default MatchDetail;
