import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage"; // NEW: Import the Landing Page
import Home from "./Home";
import ToolRunnerPage from "./pages/ToolRunnerPage";

function App() {
  return (
    <Routes>
      {/* Route 1: Landing Page (The new attractive front page) */}
      <Route path="/" element={<LandingPage />} /> 
      
      {/* Route 2: Dashboard (Your existing tool grid) */}
      <Route path="/home" element={<Home />} />
      
      {/* Route 3: Tool Runner (For running individual tools) */}
      <Route path="/tool/:endpointName" element={<ToolRunnerPage />} />
    </Routes>
  );
}

export default App;