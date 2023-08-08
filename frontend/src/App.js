// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Task from './pages/Task/Task';
import ProtectedRoute from './components/Auth/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Home />} />
        <Route path="/tasks" element={<ProtectedRoute><Task /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
