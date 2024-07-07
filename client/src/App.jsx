import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Villagers from "./pages/Villagers";
import FormPage from "./pages/FormPage";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="background-img"></div>

      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/villagers" element={<Villagers />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
