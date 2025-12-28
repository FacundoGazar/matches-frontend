import { useQuery } from "@tanstack/react-query";
import { PlayersService } from "../services/players.service";
import { Player } from "../types/player";

export const usePlayer = (id?: number) => {
  return useQuery<Player>({
    queryKey: ["player", id],
    queryFn: async () => {
      const response = await PlayersService.getById(id!);
      return response.data;
    },
    enabled: !!id,
  });
};
