import { Route, Routes } from "react-router-dom";
import NoPage from "../components/Error/NoPage";
import FindSeries from "../components/SearchSeries/FindSeries";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FindSeries />} />
      <Route path="search" element={<FindSeries />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default AppRoutes;
