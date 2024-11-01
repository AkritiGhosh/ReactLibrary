import { HashRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Main from "./page/Main";

function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainLayout selected={false} />}>
            <Route path=":page" element={<Main />} />
          </Route>
        </Routes>
      </HashRouter>
  );
}

export default App;