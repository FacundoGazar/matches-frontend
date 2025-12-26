import { useQuery } from "@tanstack/react-query";
import { TeamsService } from "../services/teams.service";
import { Team } from "../types/team";

export const useTeam = (id?: number) => {
  return useQuery<Team>({
    queryKey: ["team", id],
    queryFn: async () => {
      const response = await TeamsService.getById(id!);
      return response.data;
    },
    enabled: !!id,
  });
};
