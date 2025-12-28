import { useQuery } from "@tanstack/react-query";
import { MatchesService } from "../services/matches.service";
import { Match } from "../types/match";
import { PaginatedResponse } from "../types/paginatedResponse";

type UseMatchesParams = {
  from?: string;
  to?: string;
};

export const useMatches = (
  { from, to }: UseMatchesParams, 
  page: number = 1,
  pageSize: number = 10
) => {
  return useQuery<PaginatedResponse<Match>>({
    queryKey: ["matches", from, to, page, pageSize],
    queryFn: async () => {
      const response = await MatchesService.getAll({ 
        from, 
        to, 
        page, 
        pageSize 
      });
      return response.data;
    },
    placeholderData: previousData => previousData,
  });
};
