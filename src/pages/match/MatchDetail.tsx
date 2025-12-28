import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useMatch } from "../../hooks/useMatch";
import { formatValue } from "../../utils/format";

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
        <strong>
          <Link to={`/teams/${data.homeTeamId}`}>
            {data.homeTeam}
          </Link>
        </strong> 
        {" "}{data.homeScore} - {data.awayScore}{" "}
        <strong>
          <Link to={`/teams/${data.awayTeamId}`}>
            {data.awayTeam}
          </Link>
        </strong>
      </p>
      <p><strong>Semana:</strong> {data.week}</p>
      <p><strong>Día:</strong> {data.day}</p>
      <p><strong>Hora del Partido:</strong> {data.matchTime}</p>
      <p><strong>Asistencia:</strong> {formatValue(data.attendance)}</p>
      <p><strong>Estadio:</strong> {data.venue}</p>
      <p><strong>Árbitro:</strong> {data.referee}</p>
      <p><strong>ID:</strong> {data.id}</p>
    </div>
  );
};

export default MatchDetail;
