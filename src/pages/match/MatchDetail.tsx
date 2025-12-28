import { Link, useParams } from "react-router-dom";
import { useMatch } from "../../hooks/useMatch";
import { formatValue } from "../../utils/format";
import { DetailCard } from "../../components/detail/DetailCard";
import { DetailGrid } from "../../components/detail/DetailGrid";
import { DetailField } from "../../components/detail/DetailField";

const MatchDetail = () => {
  const { id } = useParams();
  const matchId = Number(id);

  const { data, isLoading, error } = useMatch(matchId);

  if (isLoading) return <p>Cargando...</p>;
  if (error || !data) return <p>Error al cargar el partido</p>;

  return (
    <DetailCard title="Detalle del Partido">
      <DetailGrid>
        <DetailField
          label="Fecha"
          value={new Date(data.matchDate).toLocaleDateString()}
        />

        <DetailField
          label="Resultado"
          value={
            <>
              <Link to={`/teams/${data.homeTeamId}`}>
                <strong>{data.homeTeam}</strong>
              </Link>
              {" "}{data.homeScore} - {data.awayScore}{" "}
              <Link to={`/teams/${data.awayTeamId}`}>
                <strong>{data.awayTeam}</strong>
              </Link>
            </>
          }
        />

        <DetailField label="Semana" value={data.week} />
        <DetailField label="Día" value={data.day} />
        <DetailField label="Hora" value={data.matchTime} />
        <DetailField label="Asistencia" value={formatValue(data.attendance)} />
        <DetailField label="Estadio" value={data.venue} />
        <DetailField label="Árbitro" value={data.referee} />
      </DetailGrid>
    </DetailCard>
  );
};

export default MatchDetail;
