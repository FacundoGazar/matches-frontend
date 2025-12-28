import { useParams, Link } from "react-router-dom";
import { useTeam } from "../hooks/useTeam";
import { DetailCard } from "../components/detail/DetailCard";
import { DetailGrid } from "../components/detail/DetailGrid";
import { DetailField } from "../components/detail/DetailField";

export const TeamDetail = () => {
  const { id } = useParams();
  const teamId = Number(id);

  const { data, isLoading, error } = useTeam(teamId);

  if (isLoading) return <p>Cargando...</p>;
  if (error || !data) return <p>Error al cargar el equipo</p>;

  return (
    <DetailCard title="Detalle del Equipo">
      <DetailGrid>
        <DetailField label="ID" value={data.id} />

        <DetailField
          label="Nombre"
          value={<strong>{data.name}</strong>}
        />

        <DetailField
          label="Jugadores"
          value={
            <Link to={`/players?teamId=${data.id}`}>
              Ver jugadores ({data.players})
            </Link>
          }
        />

        <DetailField label="Edad promedio" value={data.age} />
        <DetailField label="Posesión" value={data.possession} />
        <DetailField label="Penales convertidos" value={data.penaltyKicks} />
        <DetailField
          label="Intentos de penal"
          value={data.penaltyKickAttempts}
        />
        <DetailField label="Expected Goals (xG)" value={data.expectedGoals} />
        <DetailField label="Expected Assists (xA)" value={data.expectedAssists} />
        <DetailField label="Ranking" value={data.rank} />
      </DetailGrid>
    </DetailCard>
  );
};

export default TeamDetail;