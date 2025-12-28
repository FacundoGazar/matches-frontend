import DataTable, { TableColumn } from "react-data-table-component";
import { Link } from "react-router-dom";

interface Standing {
  rank: number;
  teamId: number;
  teamName: string;
  win: number;
  loss: number;
  draw: number;
  conceded: number;
  points: number;
}

interface Props {
  data: Standing[];
  loading: boolean;
}

export const StandingsTable = ({ data, loading }: Props) => {
  const columns: TableColumn<Standing>[] = [
    {
      name: "Rank",
      selector: row => row.rank,
      center: true,
      width: "80px",
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
      name: "Win",
      selector: row => row.win,
      center: true,
      width: "80px",
    },
    {
      name: "Loss",
      selector: row => row.loss,
      center: true,
      width: "80px",
    },
    {
      name: "Draw",
      selector: row => row.draw,
      center: true,
      width: "80px",
    },
    {
      name: "Conceded",
      selector: row => row.conceded,
      center: true,
      width: "110px",
    },
    {
      name: "Points",
      selector: row => row.points,
      center: true,
      width: "90px",
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
      noDataComponent="No hay standings para mostrar"
    />
  );
};
