import api from "../api/axios";
import { ENDPOINTS } from "../api/endpoints";
import { Match } from "../types/match";

type GetMatchesParams = {
  from?: string;
  to?: string;
};

export const MatchesService = {
  getAll: (params?: GetMatchesParams) =>
    api.get<Match[]>(ENDPOINTS.MATCHES.BASE, { params }),
};
