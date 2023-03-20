import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { CharactersPage } from "./pages/CharactersPage";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/characters"} element={<CharactersPage />} />
      </Routes>
    </>
  );
}

export default App;
