import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePage from '@/Pages/Create';

const AppRouter = () => {
  return (
      <Router>
        <Routes>
          <Route  path="/" element={<CreatePage/>} />
          <Route path="/create" element={<CreatePage/>} />
        </Routes>
      </Router>
    );
};

export default AppRouter;