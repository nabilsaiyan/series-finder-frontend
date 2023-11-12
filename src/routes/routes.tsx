import { Route, Routes } from "react-router-dom";
import NoPage from "../components/Error/NoPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<NoPage />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default AppRoutes;
