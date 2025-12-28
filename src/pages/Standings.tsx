import { useStandings } from "../hooks/useStandings";
import { StandingsTable } from "../components/standings/StandingsTable";

export const Standings = () => {
  const { data, isLoading, error } = useStandings();

  if (error) return <p>Error al cargar standings</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Standings</h2>

      <StandingsTable
        data={data ?? []}
        loading={isLoading}
      />
    </div>
  );
};

export default Standings;
