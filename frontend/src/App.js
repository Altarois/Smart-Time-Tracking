// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Task from './pages/Task/Task';
import ProtectedRoute from './components/Auth/ProtectedRoute';

import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/login" element={<Home />} />
        <Route path="/tasks" element={
        <RecoilRoot >
          <ProtectedRoute>
          <Task />
          </ProtectedRoute>
        </RecoilRoot>} />
      </Routes>
    </Router>
  );
}

export default App;
