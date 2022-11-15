import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import Show from './pages/Show';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/starred" element={<Starred />}></Route>
        <Route path="*" element={<p>404</p>}></Route>
        <Route path="/show/:id" element={<Show />}></Route>
      </Routes>
    </div>
  );
}

export default App;
