import { useQuery } from "@tanstack/react-query";
import { MatchesService } from "../services/matches.service";
import { Match } from "../types/match";

type UseMatchesParams = {
  from?: string;
  to?: string;
};

export const useMatches = ({ from, to }: UseMatchesParams) => {
  return useQuery<Match[]>({
    queryKey: ["matches", from, to],
    queryFn: async () => {
      const response = await MatchesService.getAll({ from, to });
      return response.data;
    },
  });
};
