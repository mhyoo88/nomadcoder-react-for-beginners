import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//v6 부터 Switch -> Routes 로 변경
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
