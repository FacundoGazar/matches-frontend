export const ENDPOINTS = {
  MATCHES: {
    BASE: "/matches",
    BY_ID: (id: number) => `/matches/${id}`,
  },
  TEAMS: {
    BASE: "/teams",
    BY_ID: (id: number) => `/teams/${id}`,
  },
};
