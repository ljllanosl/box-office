import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/starred" element={<Starred />}></Route>
        <Route path="*" element={<p>404</p>}></Route>
      </Routes>
    </div>
  );
}

export default App;
