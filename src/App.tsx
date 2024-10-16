import React from "react";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex h-screen w-full">
      <Routes>
        <Route index element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
