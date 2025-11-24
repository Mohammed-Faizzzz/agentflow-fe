import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ToolRunnerPage from "./pages/ToolRunnerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tool/:endpointName" element={<ToolRunnerPage />} />
    </Routes>
  );
}

export default App;
