import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as z from "zod";
import { cn } from "./lib/utils";
import { useCountStore } from "./stores/useCountStore";

// Contoh penggunaan state management Zustand
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

// Contoh penggunaan react-hook-form & zod validation
const schema = z.object({
  title: z.string().min(1, { error: "Wajib diisi" }),
});

function CreateProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="flex flex-col gap-2"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          {...register("title")}
          aria-invalid={errors.title ? "true" : undefined}
          aria-describedby={errors.title ? "title-error" : undefined}
          className="border px-2 py-1"
        />
        {errors.title?.message && (
          <p id="title-error" className="text-sm text-red-500">
            {errors.title.message}
          </p>
        )}
      </div>

      <button type="submit" className="cursor-pointer border px-2 py-1">
        Simpan
      </button>
    </form>
  );
}

// Contoh penggunaan React Query
async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }
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
    <div className="flex flex-col gap-6 p-6">
      <CreateProductForm />
      <div className="grid grid-cols-4 gap-3">
        {data?.map((product: any) => (
          <div key={product.id} className="border p-2">
            <img src={product.image} alt={product.title} className="size-10" />
            <p className="line-clamp-1">{product.title}</p>
            <p>{product.price}</p>
            <p className="line-clamp-1">{product.description}</p>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Contoh penggunaan react-router-dom */}
        <Route path="/" element={<h1>Home</h1>} />
        {/* Contoh penggunaan tailwindcss, tailwind-merge, clsx, dan prettier-plugin-tailwindcss */}
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
