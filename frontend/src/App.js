import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePastePage from './pages/CreatePastePage';
import ViewPastePage from './pages/ViewPastePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePastePage />} />
      <Route path="/paste/:pasteId" element={<ViewPastePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
