import { useParams } from "react-router-dom";
import {usePlayer} from "../../hooks/usePlayer";
import { formatValue } from "../../utils/format";

export const PlayerDetail = () => {
    const { id } = useParams();
    const { data, isLoading, error } = usePlayer(Number(id));

    if (isLoading) return <p>Cargando...</p>;
    if (error || !data) return <p>Error al cargar el jugador</p>;
    return (
        <div>
            <h1>Player</h1>
            <table>
            <thead>
                <tr>
                    <th>Player Name</th>
                    <th>Team Name</th>
                    <th>Nation</th>
                    <th>Age</th>
                    <th>Position</th>
                    <th>Goals</th>
                    <th>Assists</th>
                    <th>Played</th>
                    <th>Starts</th>
                    <th>Minutes</th>
                    <th>Yellow</th>
                    <th>Red</th>
                    <th>Weekly</th>
                    <th>Annual</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.playerName}</td>
                    <td>{data.teamName}</td>
                    <td>{formatValue(data.playerNation)}</td>
                    <td>{formatValue(data.playerAge)}</td>
                    <td>{data.position}</td>
                    <td>{data.goals}</td>
                    <td>{data.assists}</td>
                    <td>{data.played}</td>
                    <td>{data.starts}</td>
                    <td>{data.minutes}</td>
                    <td>{data.yellow}</td>
                    <td>{data.red}</td>
                    <td>{formatValue(data.weekly)}</td>
                    <td>{formatValue(data.annual)}</td>
                </tr>
            </tbody>
            </table>
        </div>
    );
    };

export default PlayerDetail;