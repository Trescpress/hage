import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/home/Homepage";
import Marketplace from "./pages/marketplace/Marketplace";
import Marketplace2 from "./pages/marketplace/Marketplace2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/marketplace/1" element={<Marketplace />} />

        <Route path="/marketplace/2" element={<Marketplace2 />} />

        <Route path="*" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
