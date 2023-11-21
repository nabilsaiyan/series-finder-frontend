import { Navigate, Route, Routes } from "react-router-dom";
import NoPage from "../components/Error/NoPage";
import FindSeries from "../components/SearchSeries/FindSeries";
import TrendingSeries from "../components/TrendingSeries/TrendingSeries";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/trending" />} />
      <Route path="search/:keyword" element={<FindSeries />} />
      <Route path="trending" element={<TrendingSeries />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default AppRoutes;
