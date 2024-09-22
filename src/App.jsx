import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import MainLayout from "./layout/MainLayout";
import { tabs } from "./lib/constant";
import Main from "./page/Main";
import CodeLayout from "./layout/CodeLayout";
import ArticleLayout from "./layout/ArticleLayout";
import DemoLayout from "./layout/DemoLayout";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<MainLayout selected={false} />}>
          <Route path=":page" element={<Main />}>
            <Route path={tabs.ARTICLE} element={<ArticleLayout />} />
            <Route path={tabs.CODE} element={<CodeLayout />} />
            <Route path={tabs.DEMO} element={<DemoLayout />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
