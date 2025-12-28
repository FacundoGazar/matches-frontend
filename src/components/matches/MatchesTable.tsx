import DataTable, { TableColumn } from "react-data-table-component";
import { Link } from "react-router-dom";
import { Match } from "../../types/match";

interface Props {
  data: Match[];
  loading: boolean;
}

export const MatchesTable = ({ data, loading }: Props) => {
  const columns: TableColumn<Match>[] = [
    {
      name: "Fecha",
      selector: row => new Date(row.matchDate).toLocaleDateString(),
      sortable: true,
    },
    {
      name: "Local",
      cell: row => (
        <Link to={`/teams/${row.homeTeamId}`}>
          {row.homeTeam}
        </Link>
      ),
    },
    {
      name: "Resultado",
      cell: row => `${row.homeScore} - ${row.awayScore}`,
      center: true,
    },
    {
      name: "Visitante",
      cell: row => (
        <Link to={`/teams/${row.awayTeamId}`}>
          {row.awayTeam}
        </Link>
      ),
    },
    {
      name: "Jornada",
      selector: row => row.week,
      center: true,
    },
    {
      name: "Detalle",
      cell: row => (
        <Link className="btn btn-sm btn-outline-primary" to={`/matches/${row.id}`}>
          Ver
        </Link>
      ),
      ignoreRowClick: true,
      button: true,
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={data}
      progressPending={loading}
      pagination={false}
      highlightOnHover
      striped
      responsive
    />
  );
};
