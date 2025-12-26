import { useQuery } from "@tanstack/react-query";
import { StandingsService } from "../services/standings.service";
import { Standing } from "../types/standing";

export const useStandings = () => {
  return useQuery<Standing[]>({
    queryKey: ["standings"],
    queryFn: async () => {
      const response = await StandingsService.getAll();
      return response.data;
    },
  });
};
