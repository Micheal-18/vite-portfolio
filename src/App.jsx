import React from "react";
import "./index.css";
import A from "./routes/a";
import B from "./routes/b";
import C from "./routes/c";
import D from "./routes/d";
import E from "./routes/e";
import F from "./routes/f";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
          <Routes>
            <Route path="/" element={<A />} />
            <Route path="/b" element={<B />} />
            <Route path="/c" element={<C />} />
            <Route path="/d" element={<D />} />
            <Route path="/e" element={<E />} />
            <Route path="/f" element={<F />} />
          </Routes>
    </div>
  );
}

export default App;
