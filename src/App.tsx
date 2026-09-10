import { BrowserRouter, Route, Routes } from "react-router-dom";
import { cn } from "./lib/utils";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<h1 className={cn("text-3xl font-bold")}>Home</h1>}
        />
        <Route
          path="/about"
          element={<h1 className={cn("text-3xl font-bold")}>About</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}
