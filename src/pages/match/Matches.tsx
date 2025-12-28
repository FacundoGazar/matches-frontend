import { useState } from "react";
import { useMatches } from "../../hooks/useMatches";
import { MatchesTable } from "../../components/Matches/MatchesTable";

export const Matches = () => {
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useMatches(
    {
      from: fromInput || undefined,
      to: toInput || undefined,
    },
    page,
    10
  );

  if (error) return <p>Error al cargar partidos</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Partidos</h2>

      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <label className="form-label">Desde</label>
          <input
            type="date"
            className="form-control"
            value={fromInput}
            onChange={e => setFromInput(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <label className="form-label">Hasta</label>
          <input
            type="date"
            className="form-control"
            value={toInput}
            onChange={e => setToInput(e.target.value)}
          />
        </div>
      </div>

      <MatchesTable
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

export default Matches;
