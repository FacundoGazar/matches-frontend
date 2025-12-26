import api from "../api/axios";
import { ENDPOINTS } from "../api/endpoints";
import { Standing } from "../types/standing";

export const StandingsService = {
  getAll: () =>
    api.get<Standing[]>(ENDPOINTS.STANDINGS.BASE),

  getById: (id: number) =>
    api.get<Standing>(ENDPOINTS.STANDINGS.BY_ID(id)),
};