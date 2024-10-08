import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";
import {Grocery} from "./types/Grocery.ts";
import {Route, Routes} from "react-router-dom";
import AllProductsPage from "./components/AllProductsPage.tsx";
import ShoppingListPage from "./components/ShoppingListPage.tsx";

function App() {
    const [groceries, setGroceries] = useState<Grocery[]>([])
    const getAllGroceries = () => {
        axios.get("/api/groceries")
            .then(response => setGroceries(response.data))
            .catch(error => console.error(error))
    }
    useEffect(() => getAllGroceries(), [])

  return (
    <>
        <Routes>
          <Route path={"/"} element={<AllProductsPage groceries={groceries}/>}/>
          <Route path={"/shoppinglist"} element={<ShoppingListPage groceries={groceries}/>}/>
        </Routes>
    </>
  )
}

export default App
