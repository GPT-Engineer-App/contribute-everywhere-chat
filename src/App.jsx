import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        // Removed routes for Forum and Chat as they cannot be implemented without a backend or additional packages
      </Routes>
    </Router>
  );
}

export default App;
