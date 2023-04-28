import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import { productsAndCartLoader } from "./loaders/productsAndCartLoader";
import { createContext, useState } from "react";

export const CounterContext = createContext([]);

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("tshirts.json"),
          element: <Home></Home>,
        },
        {
          path: "orders",
          loader: productsAndCartLoader,
          element: <Orders></Orders>,
        },
        { path: "about", element: <About></About> },
        { path: "inventory", element: <Inventory></Inventory> },
      ],
    },
  ]);
  return (
    <CounterContext.Provider value={[count, setCount]}>
      <div className="App">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </CounterContext.Provider>
  );
}
export default App;
