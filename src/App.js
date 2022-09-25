// local imports
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import LoginSuccess from "./components/LoginSuccess";
import RequireAuth from "./components/RequireAuth";
import Home from "./components/Home";

// 3rd pary imports
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Layout />}>
          <Route path="/login-success" element={<LoginSuccess />} />
          <Route element={<RequireAuth />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
