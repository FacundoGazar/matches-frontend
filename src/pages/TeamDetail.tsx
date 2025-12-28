import { useParams, Link } from "react-router-dom";
import {useTeam} from "../hooks/useTeam";

export const TeamDetail = () => {
  const { id } = useParams();
  const teamId = Number(id);

  const { data, isLoading, error } = useTeam(teamId);

  if (isLoading) return <p>Cargando...</p>;
  if (error || !data) return <p>Error al cargar el partido</p>;

  return (
    <div>
        <h1>Team detail</h1>
        <p><strong>ID:</strong> {data.id}</p>
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong><Link to={`/players?teamId=${data.id}`}>Players:</Link></strong> {data.players}</p>
        <p><strong>Age:</strong> {data.age}</p>
        <p><strong>Possession:</strong> {data.possession}</p>
        <p><strong>Penalty Kicks:</strong> {data.penaltyKicks}</p>
        <p><strong>Penalty Kick Attempts:</strong> {data.penaltyKickAttempts}</p>
        <p><strong>Expected Goals:</strong> {data.expectedGoals}</p>
        <p><strong>Expected Assists:</strong> {data.expectedAssists}</p>
        <p><strong>Rank:</strong> {data.rank}</p>
    </div>
  );
};

export default TeamDetail;