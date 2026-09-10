import { BrowserRouter, Route, Routes } from "react-router-dom";
import { cn } from "./lib/utils";
import { useCountStore } from "./stores/useCountStore";

function Count() {
  const { count, increment, decrement } = useCountStore();

  return (
    <div className={cn("flex flex-col items-center justify-center gap-4")}>
      <h1
        className={cn(
          "text-3xl font-bold",
          count < 0 && "text-red-500",
          count > 0 && "text-green-500",
        )}
      >
        Count: {count}
      </h1>
      <div className={cn("flex gap-4")}>
        <button
          className={cn(
            "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600",
          )}
          onClick={increment}
        >
          Increment
        </button>
        <button
          className={cn(
            "rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600",
          )}
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

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
        <Route path="/count" element={<Count />} />
      </Routes>
    </BrowserRouter>
  );
}
