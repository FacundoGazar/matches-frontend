import api from "../api/axios";
import { ENDPOINTS } from "../api/endpoints";
import { Team } from "../types/team";

export const TeamsService = {
  getAll: () =>
    api.get<Team[]>(ENDPOINTS.TEAMS.BASE),

  getById: (id: number) =>
    api.get<Team>(ENDPOINTS.TEAMS.BY_ID(id)),
};