import { BrowserRouter, Routes, Route } from "react-router-dom";
import MatchesPage from "../pages/MatchesPage";
import NotFound from "../pages/NotFound";
import MatchDetail from "../pages/MatchDetail";
import { TeamDetail } from "../pages/TeamDetail";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MatchesPage />} />
      <Route path="/matches/:id" element={<MatchDetail />} />
      <Route path="/teams/:id" element={<TeamDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);