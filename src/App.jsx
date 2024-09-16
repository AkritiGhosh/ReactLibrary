import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import MainLayout from "./layout/MainLayout";
import { tabs } from "./lib/constant";
import Main from "./page/Main";
import CodeLayout from "./layout/CodeLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<MainLayout default={true} />}>
          <Route path=":page" element={<Main />}>
            <Route path={tabs.ARTICLE} element={<Main />} />
            <Route path={tabs.CODE} element={<CodeLayout />} />
            <Route path={tabs.DEMO} element={<Main />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
