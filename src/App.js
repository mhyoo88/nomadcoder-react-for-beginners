import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//v6 부터 Switch -> Routes 로 변경
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import UseRef from "./routes/UseRef";
import Test from "./routes/Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
        <Route path="/use-ref" element={<UseRef />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
