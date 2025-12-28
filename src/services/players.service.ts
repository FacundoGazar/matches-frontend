import api from "../api/axios";
import { ENDPOINTS } from "../api/endpoints";
import { Player } from "../types/player";
import { PaginatedResponse } from "../types/paginatedResponse";

type GetPlayersParams = {
  teamId?: number;
  page?: number;
  pageSize?: number;
};

export const PlayersService = {
  getAll: (params?: GetPlayersParams) =>
    api.get<PaginatedResponse<Player>>(ENDPOINTS.PLAYERS.BASE, { params }),

  getById: (id: number) =>
    api.get<Player>(ENDPOINTS.PLAYERS.BY_ID(id)),
};
