import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useMatches } from "../../hooks/useMatches";

export const Matches = () => {
  const [searchParams] = useSearchParams();
  const [fromInput, setFromInput] = useState<string>("");
  const [toInput, setToInput] = useState<string>("");

  const [filters, setFilters] = useState<{
    from?: string;
    to?: string;
  }>({});

  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useMatches(filters, page, 10);

  const handleSearch = () => {
    setFilters({
      from: fromInput || undefined,
      to: toInput || undefined,
    });
  };

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar partidos</p>;

  return (
    <div>
      <div>
        <label>
          Desde:
          <input
            type="date"
            value={fromInput}
            onChange={(e) => setFromInput(e.target.value)}
          />
        </label>

        <label>
          Hasta:
          <input
            type="date"
            value={toInput}
            onChange={(e) => setToInput(e.target.value)}
          />
        </label>

        <button onClick={handleSearch}>Buscar</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Local</th>
            <th>Resultado</th>
            <th>Visitante</th>
            <th>ID</th>
            <th>Jornada</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((match) => (
            <tr key={match.id}>
              <td>{new Date(match.matchDate).toLocaleDateString()}</td>
              <td>
                <Link to={`/teams/${match.homeTeamId}`}>
                  {match.homeTeam}
                </Link>
              </td>
              <td>
                {match.homeScore} - {match.awayScore}
              </td>
              <td>
                <Link to={`/teams/${match.awayTeamId}`}>
                  {match.awayTeam}
                </Link>
              </td>

              <td>
                <Link to={`/matches/${match.id}`}>
                  {match.id}    
                </Link>
              </td>
              <td>
                {match.week}
              </td>
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
          Página {data?.page} de {data?.totalPages}
        </span>

        <button
          disabled={page === data?.totalPages}
          onClick={() => setPage(p => p + 1)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Matches;
