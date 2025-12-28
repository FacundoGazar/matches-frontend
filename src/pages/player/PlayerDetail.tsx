import { useParams, Link } from "react-router-dom";
import { usePlayer } from "../../hooks/usePlayer";
import { formatValue } from "../../utils/format";
import { DetailCard } from "../../components/detail/DetailCard";
import { DetailGrid } from "../../components/detail/DetailGrid";
import { DetailField } from "../../components/detail/DetailField";

export const PlayerDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = usePlayer(Number(id));

  if (isLoading) return <p>Cargando...</p>;
  if (error || !data) return <p>Error al cargar el jugador</p>;

  return (
    <DetailCard title="Detalle del Jugador">
      <DetailGrid>
        <DetailField
          label="Nombre"
          value={<strong>{data.playerName}</strong>}
        />

        <DetailField
          label="Equipo"
          value={
            <Link to={`/teams/${data.teamId}`}>
              {data.teamName}
            </Link>
          }
        />

        <DetailField label="Nacionalidad" value={formatValue(data.playerNation)} />
        <DetailField label="Edad" value={formatValue(data.playerAge)} />
        <DetailField label="Posición" value={data.position} />

        <DetailField label="Goles" value={data.goals} />
        <DetailField label="Asistencias" value={data.assists} />
        <DetailField label="Partidos jugados" value={data.played} />
        <DetailField label="Titularidades" value={data.starts} />
        <DetailField label="Minutos" value={data.minutes} />

        <DetailField label="Amarillas" value={data.yellow} />
        <DetailField label="Rojas" value={data.red} />

        <DetailField label="Salario semanal" value={formatValue(data.weekly)} />
        <DetailField label="Salario anual" value={formatValue(data.annual)} />
      </DetailGrid>
    </DetailCard>
  );
};

export default PlayerDetail;