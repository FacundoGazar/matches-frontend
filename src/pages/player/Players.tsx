import { useSearchParams } from "react-router-dom";
import { usePlayers } from "../../hooks/usePlayers";
import { useState } from "react";
import { PlayersTable } from "../../components/players/PlayersTable";

export const Players = () => {
  const [searchParams] = useSearchParams();
  const teamIdParam = searchParams.get("teamId");
  const teamId = teamIdParam ? Number(teamIdParam) : undefined;

  const [page, setPage] = useState(1);

  const { data, isLoading, error } = usePlayers(teamId, page, 15);

  if (error) return <p>Error al cargar los jugadores</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">
        Players
      </h2>

      <PlayersTable
        data={data?.data ?? []}
        loading={isLoading}
      />

      <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
        <button
          className="btn btn-outline-secondary"
          disabled={page === 1}
          onClick={() => setPage(p => p - 1)}
        >
          Anterior
        </button>

        <span>
          Página {data?.page} de {data?.totalPages}
        </span>

        <button
          className="btn btn-outline-secondary"
          disabled={page === data?.totalPages}
          onClick={() => setPage(p => p + 1)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Players;
