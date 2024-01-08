import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./pages/Layout/Layout.jsx";
import { MainPage } from "./pages/MainPage/MainPage.jsx";
import { DynamicComponentJS } from "./Tasks/JS/index.jsx";
import { DynamicComponentReact } from "./Tasks/React/index.jsx";
import { JSMain } from "./pages/JSMain/JSMain.jsx";
import { ReactMain } from "./pages/ReactMain/ReactMain.jsx";
import { FrontendTask } from "./Tasks/Frontend/FrontendTask.jsx";
import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="/js" element={<JSMain />} />
                <Route path="/js/:id" element={<DynamicComponentJS />} />
                <Route path="/react" element={<ReactMain />} />
                <Route path="/react/:id" element={<DynamicComponentReact />} />
                <Route path="/frontend" element={<FrontendTask />} />
            </Route>
        </Routes>
    );
}

export default App;
