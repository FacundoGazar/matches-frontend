import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Matches } from "../pages/match/Matches";
import { NotFound }  from "../pages/NotFound";
import MatchDetail from "../pages/match/MatchDetail";
import { TeamDetail } from "../pages/TeamDetail";
import { Standings } from "../pages/Standings";
import { Homepage } from "../pages/Homepage";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/matches" element={<Matches />} />
      <Route path="/matches/:id" element={<MatchDetail />} />
      <Route path="/teams/:id" element={<TeamDetail />} />
      <Route path="/standings/" element={<Standings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);