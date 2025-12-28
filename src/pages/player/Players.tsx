import { Link, useSearchParams } from "react-router-dom";
import { usePlayers } from "../../hooks/usePlayers";
import { useState } from "react";
import { formatValue } from "../../utils/format";

export const Players = () => {
  const [searchParams] = useSearchParams();
  const teamIdParam = searchParams.get("teamId");
  const teamId = teamIdParam ? Number(teamIdParam) : undefined;

  const [page, setPage] = useState(1);

  const { data, isLoading, error } = usePlayers(teamId, page, 15);

  if (isLoading) return <p>Cargando...</p>;
  if (error || !data) return <p>Error al cargar los jugadores</p>;

  return (
    <div>
      <h1>Players</h1>

      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Team Name</th>
            <th>Nation</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map(p => (
            <tr key={`${p.playerId}-${p.teamId}`}>
              <td>
                <Link to={`/players/${p.playerId}`}>
                  {p.playerName}
                </Link>
              </td>
              <td>
                <Link to={`/teams/${p.teamId}`}>
                  {p.teamName}
                </Link>
              </td>
              <td>{formatValue(p.playerNation)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 16 }}>
        <button
          disabled={page === 1}
          onClick={() => setPage(p => p - 1)}
        >
          Anterior
        </button>

        <span style={{ margin: "0 8px" }}>
          Página {data.page} de {data.totalPages}
        </span>

        <button
          disabled={page === data.totalPages}
          onClick={() => setPage(p => p + 1)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Players;
