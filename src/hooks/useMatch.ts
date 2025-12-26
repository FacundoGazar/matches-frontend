import { useQuery } from "@tanstack/react-query";
import { MatchesService } from "../services/matches.service";
import { Match } from "../types/match";

export const useMatch = (id?: number) => {
  return useQuery<Match>({
    queryKey: ["match", id],
    queryFn: async () => {
      const response = await MatchesService.getById(id!);
      return response.data;
    },
    enabled: !!id,
  });
};
