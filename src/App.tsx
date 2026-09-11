import { useQuery } from "@tanstack/react-query";
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

async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
}

function Products() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={cn("grid grid-cols-4 gap-4")}>
      {data.map((product: any) => (
        <div
          key={product.id}
          className={cn(
            "flex flex-col items-center justify-center gap-2 rounded border p-4",
          )}
        >
          <img
            src={product.image}
            alt={product.title}
            className={cn("h-32 w-32 object-contain")}
          />
          <h2 className={cn("text-lg font-bold")}>{product.title}</h2>
          <p className={cn("text-gray-500")}>${product.price}</p>
        </div>
      ))}
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
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}
