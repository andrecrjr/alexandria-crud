import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreatePage from "@/Pages/Auth/Content/Create";
import LoginPage from "./Pages/Auth/Login";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
