import { BrowserRouter, Routes, Route } from "react-router-dom";
import MatchesPage from "../pages/MatchesPage";
import NotFound from "../pages/NotFound";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MatchesPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);