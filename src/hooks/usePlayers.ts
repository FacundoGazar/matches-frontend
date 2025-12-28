import { useQuery, } from "@tanstack/react-query";
import { PlayersService } from "../services/players.service";
import { Player } from "../types/player";
import { PaginatedResponse } from "../types/paginatedResponse";

export const usePlayers = (
  teamId?: number,
  page: number = 1,
  pageSize: number = 10
) => {
  return useQuery<PaginatedResponse<Player>>({
    queryKey: ["players", teamId, page, pageSize],
    queryFn: async () => {
      const response = await PlayersService.getAll({
        teamId,
        page,
        pageSize,
      });
      return response.data;
    },
    placeholderData: previousData => previousData,
  });
};