import DataTable, { TableColumn } from "react-data-table-component";
import { Link } from "react-router-dom";
import { Player } from "../../types/player";
import { formatValue } from "../../utils/format";

interface Props {
  data: Player[];
  loading: boolean;
}

export const PlayersTable = ({ data, loading }: Props) => {
  const columns: TableColumn<Player>[] = [
    {
      name: "Jugador",
      cell: row => (
        <Link to={`/players/${row.playerId}`}>
          {row.playerName}
        </Link>
      ),
    },
    {
      name: "Equipo",
      cell: row => (
        <Link to={`/teams/${row.teamId}`}>
          {row.teamName}
        </Link>
      ),
    },
    {
      name: "Nación",
      selector: row => formatValue(row.playerNation),
      center: true,
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={data}
      progressPending={loading}
      pagination={false} // paginación server-side
      highlightOnHover
      striped
      responsive
      noDataComponent="No hay jugadores para mostrar"
    />
  );
};
