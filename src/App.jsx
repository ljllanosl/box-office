import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<p>My Homepage</p>}></Route>
      <Route path="/starred" element={<p>My star</p>}></Route>
      <Route path="*" element={<p>404</p>}></Route>
    </Routes>
  );
}

export default App;
