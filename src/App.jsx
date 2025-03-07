// CSS import
import "./App.css";

// library import
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
