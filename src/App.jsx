import { HashRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/PageLayout";
import MainContent from "./layout/ContentLayout";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path=":page" element={<MainContent />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
