import { useState } from "react";
import { useMatches } from "../hooks/useMatches";

export const MatchesPage = () => {
  const [fromInput, setFromInput] = useState<string>("");
  const [toInput, setToInput] = useState<string>("");

  const [filters, setFilters] = useState<{
    from?: string;
    to?: string;
  }>({});

  const { data, isLoading, error } = useMatches(filters);

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
          </tr>
        </thead>
        <tbody>
          {data?.map((match) => (
            <tr key={match.id}>
              <td>{new Date(match.matchDate).toLocaleDateString()}</td>
              <td>{match.homeTeam}</td>
              <td>
                {match.homeScore} - {match.awayScore}
              </td>
              <td>{match.awayTeam}</td>
              <td>{match.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchesPage;
