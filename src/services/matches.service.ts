import api from "../api/axios";
import { ENDPOINTS } from "../api/endpoints";
import { Match } from "../types/match";
import { PaginatedResponse } from "../types/paginatedResponse";

type GetMatchesParams = {
  from?: string;
  to?: string;
  page?: number;
  pageSize?: number;
};

export const MatchesService = {
  getAll: (params?: GetMatchesParams) =>
    api.get<PaginatedResponse<Match>>(ENDPOINTS.MATCHES.BASE, { params }),

  getById: (id: number) =>
    api.get<Match>(ENDPOINTS.MATCHES.BY_ID(id)),
};