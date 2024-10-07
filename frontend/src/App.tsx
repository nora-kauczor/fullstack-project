import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";
import {Grocery} from "./types/Grocery.ts";
import {Route, Routes} from "react-router-dom";
import AllProductsPage from "./components/AllProductsPage.tsx";
import ShoppingListPage from "./components/ShoppingListPage.tsx";
import {SelectedItem} from "./types/SelectedItem.ts";

function App() {
    const [groceries, setGroceries] = useState<Grocery[]>([])
    const getAllGroceries = () => {
        axios.get("/api/groceries")
            .then(response => setGroceries(response.data))
            .catch(error => console.error(error))
    }
    useEffect(() => getAllGroceries(), [])


    const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([])
    const getSelectedItems = () => {
        axios.get("/api/shopping-list")
            .then(response => setSelectedItems(response.data))
            .catch(error => console.error(error))
    }
    useEffect(() => getSelectedItems(), [])






  return (
    <>
        <AllProductsPage groceries={groceries}/>
      <Routes>
          <Route path={"/"} element={<AllProductsPage groceries={groceries}/>}/>
          <Route path={"/shoppinglist"} element={<ShoppingListPage groceries={groceries} selectedItems={selectedItems}/>}/>
      </Routes>
    </>
  )
}

export default App
