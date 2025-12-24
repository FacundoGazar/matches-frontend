export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
  },
  MATCHES: {
    BASE: "/matches",
    BY_ID: (id: number) => `/matches/${id}`,
  },
  PRODUCTS: {
    BASE: "/products",
  },
};
