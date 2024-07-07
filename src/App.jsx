import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import RoutesPage from "./page/Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routes" element={<RoutesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
